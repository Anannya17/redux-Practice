import React from "react";
import addToCartImg from '../add-to-cart.png'
import '../App.css';
function Header(props){
    return(
        <>
        <div className="add-to-cart">
            <span className="cart-count">{props.cardData.length}</span>
           <img src={addToCartImg}/>
        </div>
        </>
    )
}
export default Header;