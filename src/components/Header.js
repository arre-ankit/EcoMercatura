import React from "react";
import "../styles/Header.css";
import logo from "../images/amazon-logo.png";
import AmericaFlag from "../images/america-flag.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);
  return (
    <div className="header">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="amazon" className="header__logo" />
      </Link>

      {/* Search */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">
          <AiOutlineSearch />
        </div>
      </div>

      {/* Navigation */}
      <nav className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">English</span>
          <span className="header__optionTwo header__optionImg"><img src={AmericaFlag} alt="English" /></span>
        </div>

        <Link to="/login">
          <div className="header__option">
            <span className="header__optionOne">Hello, Sign In</span>
            <span className="header__optionTwo">Account & Lists</span>
          </div>
        </Link>

          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__basketCount">{cart?.length}</span>
            <CgShoppingCart className="header__basket" />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
