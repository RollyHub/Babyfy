import React from 'react'
import "./Product.css";
import Snuttefilt from "./Pictuers/snuttefilt.webp";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Organisk Snuttefilt</p>
        <p className="product__price">
           <small>$</small>
           <strong>19.99</strong>
        </p>
      
      </div>

      <img src={Snuttefilt} width="100" height="70" />

      <button>Add to Basket</button>
    </div>
  );
}
  
export default Product