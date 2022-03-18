import { React, useState } from "react";
import logo from "./Images/Stunners.png";
import "./navbar.css";

export function Navbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const showMenu = () => {
    setIsMenuShow(true);
  };
  const closeMenu = () => {
    setIsMenuShow(false);
  };

  return (
    <nav class="navbar semibold-font-weight">
      <div class="openMenu">
        <i class="fa fa-bars" onClick={showMenu}></i>
      </div>
      <a class="nav-icon-link nav-link link-no-style hide-icon" href="/">
        <img class="logoimage" src={logo} alt="logo" />
        <span class="small-fontsize">Stunners Hub</span>
      </a>
      <a class="nav-link link-no-style active nav-home" href="/">
        Home
      </a>
      <a
        class="nav-link link-no-style nav-products"
        href="/pages/products/products.html"
      >
        Products
      </a>

      <div class={isMenuShow ? "mainMenuShow" : "mainMenu"}>
        <div class="searchbar">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            class="search-input"
            placeholder="Search on Stunners Hub"
          />
        </div>
        <a
          href="/pages/Authentication/login/login.html"
          class="link-no-style nav-link nav-icon-link"
        >
          <i class="fas fa-user hide-icon"></i>
          <span class="small-fontsize">Login</span>
        </a>
        <a
          href="/pages/wishlist/wishlist.html"
          class="link-no-style nav-link nav-icon-link"
        >
          <i class="fas fa-heart hide-icon">
            <span class="number-badge">0</span>
          </i>
          <span class="small-fontsize">Wishlist</span>
        </a>
        <a
          href="/pages/cart/cart.html"
          class="link-no-style nav-link nav-icon-link"
        >
          <i class="fas fa-cart-shopping hide-icon">
            <span class="number-badge">0</span>
          </i>
          <span class="small-fontsize">Cart</span>
        </a>

        <div class="closeMenu">
          <i class="fa fa-times" onClick={closeMenu}></i>
        </div>
      </div>
    </nav>
  );
}
