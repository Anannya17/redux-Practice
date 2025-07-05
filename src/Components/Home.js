import React from "react";
import '../App.css';
import mobileImg from '../mobile.png'
function Home(props){
    return(
        <>
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
                <button onClick={()=>
                    props.addToCartHandler({price:10000,name:'iphone 16'})
                    }>Add to cart</button>
                <button className="remove-cart-btn" onClick={() =>
                    props.removeToCartHandler()
                    }>Remove to cart</button>
            </div>
        </div>
        </>
    )
}
export default Home;