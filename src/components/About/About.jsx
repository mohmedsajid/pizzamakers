/* 
Suparno Karmakar 
Vasu Chopra
*/
import React from "react";
import './css/About.css';

const AboutUs = () => {
  return (
    <div>
      <div>
        <section id="aboutus">
            <div className="container">
              <header className="section-header aos-init">
                <h3>About Us</h3>
                <p>At Pizzamaker, we understand that "healthy" actually means something different to everyone. So we've worked tirelessly to ensure that this site offers options no matter what your taste, cooking experience, or dietary preferences are.</p>
              </header>
              <div className="row about-cols">
                <div className="col-md-4">
                  <div className="about-col">
                    <h2 className="title"><a href="/">Our Mission</a></h2>
                    <p>We simplify the food cooking process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience. We simplify the meal planning process. Our tools equip households to eat better food</p>
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-danger">Read more</a>
                    </div>
                  </div>
                </div>
              <div class="col-md-4">
                <div class="about-col">
                  <h2 class="title"><a href="/">Our Plan</a></h2>
                  <p>Our delicious foods are cooked by chefs and dietitians and food experts to help you keep fit, eat more fiber, go vegan and more. Our delicious meal options are designed by experienced chefs and food experts to help you maintain weight, eat more fiber and more.
                  </p>
                  <div class="d-flex justify-content-center">
                    <a href="/" class="btn btn-danger">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="about-col">
                  <h2 class="title"><a href="/">Our Vision</a></h2>
                  <p>Pizzamaker will be the first food management system that combines dining out, eating store-bought food, and cooking at home to help you find and organize the restaurants, products, and recipes that fit your taste and can help you reach your food goals and keep you healthy.</p>
                  <div class="d-flex justify-content-center ">
                    <a href="/" class="btn btn-danger">Read more</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
