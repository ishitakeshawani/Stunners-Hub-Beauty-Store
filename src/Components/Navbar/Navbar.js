import { React, useState } from "react";
import "./navbar.css";
import logo from "../../assets/Images/Stunners.png";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";

export function Navbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [IsItemActive,setIsItemActive] = useState(false);
  const {cartState} = useCart();

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
    <nav class="navbar semibold-font-weight">
      <div class="openMenu">
        <i class="fa fa-bars" onClick={showMenu}></i>
      </div>
      <Link class="nav-icon-link nav-link link-no-style hide-icon" to="/">
        <img class="logoimage" src={logo} alt="logo" />
        <span class="small-fontsize">Stunners Hub</span>
      </Link>
      <Link class="nav-link link-no-style nav-home" to="/">
        Home
      </Link>
      <Link
        class="nav-link link-no-style nav-products"
        to="/products"
      >
        Products
      </Link>

      <div class={isMenuShow ? "mainMenuShow" : "mainMenu"}>
        <div class="searchbar">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            class="search-input"
            placeholder="Search on Stunners Hub"
          />
        </div>
        <Link
          to="/login"
          class="link-no-style nav-link nav-icon-link"
        >
          <i class="fas fa-user hide-icon"></i>
          <span class="small-fontsize">Login</span>
        </Link>
        <a
          href="/pages/wishlist/wishlist.html"
          class="link-no-style nav-link nav-icon-link"
        >
          <i class="fas fa-heart hide-icon">
            <span class="number-badge">0</span>
          </i>
          <span class="small-fontsize">Wishlist</span>
        </a>
        <Link
         to="/cart"
          class="link-no-style nav-link nav-icon-link"
        >
          <i class="fas fa-cart-shopping hide-icon">
            <span class="number-badge">{cartState.cartProductList.length}</span>
          </i>
          <span class="small-fontsize">Cart</span>
        </Link>

        <div class="closeMenu">
          <i class="fa fa-times" onClick={closeMenu}></i>
        </div>
      </div>
    </nav>
  );
}
