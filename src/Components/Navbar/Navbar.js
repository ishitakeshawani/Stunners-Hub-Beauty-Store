import { React, useState } from "react";
import "./navbar.css";
import logo from "../../assets/Images/Stunners.png";
import { Link } from "react-router-dom";
import { useProduct, useCart } from "../../contexts";

export function Navbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [IsItemActive,setIsItemActive] = useState(false);
  const {cartState} = useCart();
  const {state} = useProduct();

  const showMenu = () => {
    setIsMenuShow(true);
  };
  const closeMenu = () => {
    setIsMenuShow(false);
  };
  const activeItem = () =>{
    setIsItemActive(true);
  }

  return (
    <nav className="navbar semibold-font-weight">
      <div className="openMenu">
        <i className="fa fa-bars" onClick={showMenu}></i>
      </div>
      <Link className="nav-icon-link nav-link link-no-style hide-icon" to="/">
        <img className="logoimage" src={logo} alt="logo" />
        <span className="small-fontsize">Stunners Hub</span>
      </Link>
      <Link className="nav-link link-no-style nav-home" to="/">
        Home
      </Link>
      <Link
        className="nav-link link-no-style nav-products"
        to="/products"
      >
        Products
      </Link>

      <div className={isMenuShow ? "mainMenuShow" : "mainMenu"}>
        <div className="searchbar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search on Stunners Hub"
          />
        </div>
        <Link
          to="/login"
          className="link-no-style nav-link nav-icon-link"
        >
          <i className="fas fa-user hide-icon"></i>
          <span className="small-fontsize">Login</span>
        </Link>
        <Link
          to="/wishlist"
          className="link-no-style nav-link nav-icon-link"
        >
          <i className="fas fa-heart hide-icon">
            <span className="number-badge">{state.wishListData.length}</span>
          </i>
          <span className="small-fontsize">Wishlist</span>
        </Link>
        <Link
         to="/cart"
          className="link-no-style nav-link nav-icon-link"
        >
          <i className="fas fa-cart-shopping hide-icon">
            <span className="number-badge">{cartState.cartProductList.length}</span>
          </i>
          <span className="small-fontsize">Cart</span>
        </Link>

        <div className="closeMenu">
          <i className="fa fa-times" onClick={closeMenu}></i>
        </div>
      </div>
    </nav>
  );
}
