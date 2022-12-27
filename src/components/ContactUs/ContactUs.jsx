import React, {useState}from "react";
import Alert from 'react-bootstrap/Alert';
import "./ContactUs.css"
const ContactUs = () => {
  const [position, setPosition] = useState({})
  const [email,setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [getNewsletter, setGetNewsLetter] = useState(true)
  const [response, setResponse] = useState("")
  const [variant, setVariant] = useState("")
  const [hasResponse, setHasResponse] = useState(false)

  const handleInput = (e)=>{
    const val = e.target.value
    switch(e.target.name){
      case "name":
        setName(val)
        break
      case "email":
        setEmail(val)
        break
      case "message":
        setMessage(val)
        break
      case "newsletter":
        setGetNewsLetter(e.target.checked)
        break
      default:
        console.log('error')
      
    }
  }
  const getLocation = ()=>{
    if (!navigator.geolocation) {
      showAlert("warning", "Geolocation is not supported by this browser. But still you can contact us.")
      handleSubmit(null)
    }
    else{
      navigator.geolocation.getCurrentPosition(handleSubmit,handleSubmit)
    }
  }
  const handleSubmit = async (location)=>{
    console.log(location)
    if(name === ""){
      showAlert("warning", "Please enter your name to continue")
      return
    }
    if(email === ""){
      showAlert("warning", "Please enter your email to continue")
      return
    }
    if(message === ""){
      showAlert("warning", "Please enter your message to continue")
      return
    }
    let contactObject = {}
    if(location.coords){
      contactObject = {
        name : name,
        email : email,
        message : message,
        position : {
          lat : location.coords.latitude,
          long : location.coords.longitude
        }
      }
    }
    if(location.coords === undefined){
      contactObject = {
        name : name,
        email : email,
        message : message,
      }
    }
    console.log(contactObject)
    showAlert("success","Your message has been received. Thanks for contacting us.")
    
  }

  const showAlert = (variant, message) => {
    setVariant(variant)
    setResponse(message)
    setHasResponse(true)
  }
  const clear = ()=>{
    setName("")
    setEmail("")
    setMessage("")
    setGetNewsLetter(true)
    setPosition(null)
  }
  const handleCloseAlert = ()=>{
    setVariant("")
    setHasResponse(false)
    setResponse("")
  }
  return (
    <div className="wrapper-contact">

    <div className="contact-form">
      <h4>GET IN TOUCH</h4>
      <h2 className="form-headline">Send us a message</h2>
      <Alert show={hasResponse} variant={variant} onClose={handleCloseAlert} dismissible>{response}</Alert>
      <form id="submit-form" action="">
        <p>
          <input name="name" id="name" className="form-input" type="text" placeholder="Your Name*" style={{width:"100%"}} value={name} onChange={handleInput}/>
        </p>
        <p>
          <input name="email" id="email" className="form-input" type="email" placeholder="Your Email*" style={{width:"100%"}} value={email} onChange={handleInput}/>
        </p>
        <p className="full-width">
          <textarea  minLength="20" name="message" id="message" cols="30" rows="7" placeholder="Your Message*" required value={message} onChange={handleInput}></textarea>
        </p>
        <p className="full-width">
          <input type="checkbox" id="newsletter" name="newsletter" checked={getNewsletter} onChange={handleInput}/> Yes, I would like to receive communications by call / email about Company's services.
        </p>
        <p className="full-width">
          <input type="button" className="btn btn-outline-danger me-3" value="Submit" onClick={getLocation}/>
          <button className="btn btn-outline-danger" onClick={clear}>Reset</button>
        </p>
      </form>
    </div>

    <div className="contacts contact-wrapper text-center">
      <ul>
        <li>Want a <span className="highlight-text-grey ">Pizza</span>. Want to know how ?</li>
        <span className="hightlight-contact-info text-center">
          <li className="email-info mb-3"><i className="fa fa-envelope" aria-hidden="true"></i> info@pizzamakers.com</li>
          <li className="mb-3"><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">555 555 5555</span></li>
        </span>
      </ul>
    </div>
  </div>
   
  );
};


export default ContactUs;