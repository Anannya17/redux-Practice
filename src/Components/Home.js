import React from "react";
import addToCartImg from '../add-to-cart.png'
import mobileImg from '../mobile.png'
function Home(){
    return(
        <>
        <div className="add-to-cart">
           <img src={addToCartImg}/>
           <h3>image added</h3>

        </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                 <img src={mobileImg}/>
            </div>
             <div className="text-wrapper item">
                 <span>
                    I-phone
                 </span>
                 <span>
                    Price: $1000
                 </span>
            </div>
            <div className="btn-wrapper item">
                <button>Add to cart</button>
                 
            </div>
        </div>
        </>
    )
}
export default Home;