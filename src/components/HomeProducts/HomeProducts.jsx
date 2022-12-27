/* Mohmed Sajid */
import React from "react";
import './css/HomeProducts.css';
import chickenwrap from "./images/chicken-wrap.jpg";
import italianpizza from "./images/italian-pizza.jpg";
import shawarmaplate from "./images/shawarma-plate.jpg";

const HomeProducts = () => {
  return (
    <div>
      <div>
        <section id="home-product">
            <div className="container">
              <header className="section-header aos-init">
                <h3>We Serve Passion</h3>
                <p>Our mouth watering fried chicken is prepared with fresh meat and natural ingredients infused with herbs and spices. Chicken Nuggets are crispy on the outside and juicy and tender inside. We make sure to deliver high quality product to our customers.</p>
              </header>
              <div className="row about-cols">
                <div className="col-md-4">
                  <div className="about-col">
                    <img class="product-image" src={shawarmaplate} alt="Shawarma Plate"/>
                    <h2 className="title"><a href="/">Shawarma Plate</a></h2>
                    <p className="price">$12.99</p>
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-danger">Order Now</a>
                    </div>
                  </div>
                </div>
              <div class="col-md-4">
                <div class="about-col">
                  <img class="product-image" src={italianpizza} alt="Italian Pizza"/>
                  <h2 class="title"><a href="/">Italian Pizza</a></h2>
                  <p className="price">$18.99</p>
                  <div class="d-flex justify-content-center">
                    <a href="/" class="btn btn-danger">Order Now</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="about-col">
                  <img class="product-image" src={chickenwrap} alt="Chicken Wrap"/>
                  <h2 class="title"><a href="/">Chicken Wrap</a></h2>
                  <p className='price'>$13.99</p>
                  <div class="d-flex justify-content-center ">
                    <a href="/" class="btn btn-danger">Order Now</a>
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

export default HomeProducts;
