/* 
Mohmed Sajid
 */
import React from "react";
import './css/MenuItems.css';
import shawarmaplate from "./images/shawarma-plate.jpg";
import italianpizza from "./images/italian-pizza.jpg";
import chickenwrap from "./images/chicken-wrap.jpg";
import chickenshawarma from "./images/chicken-shawarma.jpg";
import tenders from "./images/tenders.jpg";
import beefburger from "./images/beef-burger.jpg";
import shrimp from "./images/shrimp.jpg";
import chicken from "./images/chicken.jpg";
import sandwich from "./images/sandwich.jpg";

const MenuItems = () => {
  return (
    <div>
      <div>
        <section id="about">
            <div className="container">
              <header className="section-header aos-init">
                <h3>Our Menu</h3>
                <p>Try our mouth watering products prepared with fresh meat and natural ingredients infused with herbs and spices. </p>
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
              <div className="row about-cols">
                <div className="col-md-4">
                  <div className="about-col">
                    <img class="product-image" src={chickenshawarma} alt="Chicken Shawarma"/>
                    <h2 className="title"><a href="/">Chicken Shawarma</a></h2>
                    <p className="price">$10.99</p>
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-danger">Order Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-col">
                    <img class="product-image" src={tenders} alt="Tenders"/>
                    <h2 class="title"><a href="/">5pcs Tenders</a></h2>
                    <p className="price">$15.99</p>
                    <div class="d-flex justify-content-center">
                      <a href="/" class="btn btn-danger">Order Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-col">
                    <img class="product-image" src={beefburger} alt="Beef burger"/>
                    <h2 class="title"><a href="/">Classic Burger</a></h2>
                    <p className='price'>$13.99</p>
                    <div class="d-flex justify-content-center ">
                      <a href="/" class="btn btn-danger">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row about-cols">
                <div className="col-md-4">
                  <div className="about-col">
                    <img class="product-image" src={shrimp} alt="Shrimp"/>
                    <h2 className="title"><a href="/">Shrimp</a></h2>
                    <p className="price">$9.99</p>
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-danger">Order Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-col">
                    <img class="product-image" src={chicken} alt="Chicken"/>
                    <h2 class="title"><a href="/">5pcs Chicken</a></h2>
                    <p className="price">$14.99</p>
                    <div class="d-flex justify-content-center">
                      <a href="/" class="btn btn-danger">Order Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-col">
                    <img class="product-image" src={sandwich} alt="Chicken Sandwich"/>
                    <h2 class="title"><a href="/">Chicken Sandwich</a></h2>
                    <p className='price'>$7.99</p>
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

export default MenuItems;
