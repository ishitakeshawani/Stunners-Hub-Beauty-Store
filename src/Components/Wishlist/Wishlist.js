import React from 'react';
import { useProduct, useCart } from '../../contexts';
import { addProductToCart, removeProductFromWishlist } from '../../utils';
import { useNavigate } from 'react-router-dom';
import "./wishlist.css";

export function Wishlist() {
  const { state, productDispatch } = useProduct();
  const { cartState, dispatch } = useCart();
  const wishList = state.wishListData;
  const navigate = useNavigate();
  function ProductInWishlist(productId) {
    return state.wishListData.some(
      (product) => product._id === productId
    )
  }
  function ProductInCart(productId) {
    return cartState.cartProductList.some(
      (product) => product._id === productId
    );
  }

  return (
    <div class="wishlist">
        {wishList.length > 0 ? 
        wishList.map((val) => (
          <div className="card product-card">
          <div className="card-padding">
            <img className="product-img" src={val.image} alt="" />
            <div className="product-card-title">{val.name}</div>
            <div className="card-mrp">
              <span className="gray-color">MRP:</span> ₹{val.price}
              <span className="product-discount">{val.discount}% off</span>
            </div>
            <Rate rate={val.rate} />
          </div>
          <div className="product-card-footer pink-color">
            <i className={`card-footer-icon ${ProductInWishlist(val._id) ? "fas fa-heart" : "fa-regular fa-heart"}`}  onClick={() =>
                  ProductInWishlist(val._id)
                    ? removeProductFromWishlist(val._id, productDispatch)
                    : addProductToWishlist(val, productDispatch)
                }></i>
            <button
              className="btn card-btn"
              onClick={() => {
                ProductInCart(val._id)
                  ? navigate("/cart")
                  : addProductToCart(val, dispatch, cartState);
              }}
            >
              {ProductInCart(val._id) ? "Go To Cart" : "Add to cart"}
            </button>
          </div>
        </div>
        ))
      : "Your wishlist is empty."}
        </div>
  )
}


const Rate = ({ rate }) => {
  return (
    <div className="rating small-fontsize">
      {[...Array(rate)].map(() => {
        return <i className="fas fa-star"></i>;
      })}
      {[...Array(5 - rate)].map(() => {
        return <i className="far fa-star"></i>;
      })}
    </div>
  );
};
