/* 
Suparno Karmakar 
Mohmed Sajid
*/
import React from "react";
import "./css/HomeDIshPromotion.css";


function HomeDishPromotion(){
    return(
        <section className="home-dish-promotion">
            <div className="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h1>Classic Big Burger</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p className="bold">Energy: <span class="red">498 kkal</span></p>
                        <p className="bold">Protein: <span class="green">26 g</span></p>
                        <p className="bold">Fat: <span class="green">8 g</span></p>
                        <p className="bold">Carbohydrates: <span class="green">49 g</span></p>
                        <p className="bold red price">$7.99</p>
                        <button type="button" class="btn btn-danger">Order Now</button>
                    </div>
                    <div class="col-12 col-md-6">
                        
                        <img className="product-image" src="./images/burger.png" alt="Classic burger"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        
                        <img className="product-image" src="./images/Shawarma.png" alt="Lamb shawarma"/>
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>Lamb Shawarma</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p className="bold">Energy: <span class="red">498 kkal</span></p>
                        <p className="bold">Protein: <span class="green">26 g</span></p>
                        <p className="bold">Fat: <span class="green">8 g</span></p>
                        <p className="bold">Carbohydrates: <span class="green">49 g</span></p>
                        <p className="bold red price">$17.99</p>
                        <button type="button" class="btn btn-danger">Order Now</button>
                    </div>
                    
                </div>
            </div>
        </section>   
    )
}

export default HomeDishPromotion