import React from 'react'
import './Header.css'
import logo from "./Pictuers/Pink and Purple Minimalist Baby and Toys Logo .png" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
      <div className="header">
       <div className="logo">
          <img src={logo} width="100" height="70" />
        </div>
        
        <div className="header__search">
            <input
            className="header__searchInput" 
            type="text" />
            <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
           
            </div>
        
        <div className="header__nav">
          <div className="header__option">
          <span className="header__optionLineOne
            ">Guest
            </span>
            <span className="header__optionLine
            ">Sign in
            </span>
          </div>

        <div className="header__option">
        <span className="header__optionLineOne
            ">Your
            </span>
            <span className="header__optionLine
            ">Orders
            </span>
          </div>

          <div className="header__option">
          <span className="header__optionLine
            ">Register
            </span>
            <span className="header__optionLine
            ">Now
            </span>
        </div>

        <div className="header__optionBasket">
        <span><FontAwesomeIcon className="basket__opt header__basketCount" 
        icon={faCartShopping}></FontAwesomeIcon>{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header