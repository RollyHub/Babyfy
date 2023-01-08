import React from 'react'
import "./Home.css";
import Trees from "./video/Trees - 24540.mp4"
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
     {   <video 
          autoPlay 
          loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }} 
          >
          <source src={Trees} type="video/mp4" />
        </video>}

        <div className="home__row">
            <Product />
        </div>

        <div className="home__row">


        </div>

        <div className="home__row">

          
        </div>
      </div>
    </div>
  );
}

export default Home;