import { React, useState, useEffect } from "react";
import { useCart, useProduct } from "../../contexts";
import "../Products/products.css";
import {
  getSortedData,
  getFilteredData,
  filterByRate,
  getFilterByPrice,
} from "../../utils";
import { addProductToCart } from "../../utils/";

export function ProductsList() {
  const { state } = useProduct();
  const { cartState, dispatch } = useCart();
  const filterByPriceData = getFilterByPrice(state, state.productList);
  const filterData = getFilteredData(state, filterByPriceData);
  const filterByRateData = filterByRate(state, filterData);
  const sortedData = getSortedData(state, filterByRateData);
  function ProductInCart(productId) {
    return cartState.cartProductList.some(
      (product) => product._id === productId
    );
  }

  return (
    <div className="cards-list">
      {sortedData.length > 0 ? (
        sortedData.map((val) => (
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
              <i className="card-footer-icon fa-regular fa-heart"></i>
              <button
                className="btn card-btn"
                onClick={() => {
                  ProductInCart(val._id)
                    ? console.log("already in cart")
                    : addProductToCart(val, dispatch, cartState);
                  console.log(ProductInCart(val._id));
                  console.log(cartState.cartProductList);
                }}
              >
                {ProductInCart(val._id) ? "Go To Cart" : "Add to cart"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-product">No products found</div>
      )}
    </div>
  );
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
