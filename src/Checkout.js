import React from 'react';
import "./Checkout.css";
import baby from "./Pictuers/checkoutpicture.jpeg";

function Checkout() {
return (
  <div className="checkout">
    <div className="cheackout__left">
      <img className="checkout__ad"
      src={baby}
      alt="" 
      />
    
  <div>
    <h2 className="checkout__title">check
    out</h2>
      </div>
  </div>
<div className="checkout__right">

</div>
</div>
  );
}

export default Checkout