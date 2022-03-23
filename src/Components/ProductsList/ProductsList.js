import { React, useState, useEffect } from "react";
import { useProduct } from "../../contexts/ProductProvider";
import "../Products/products.css";
import { getSortedData } from "../Filter/Filter";

export function ProductsList() {
  const { state } = useProduct();
  const sortedData = getSortedData(state, state.productList);

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
              </div>
              <Rate rate={val.rate} />
            </div>
            <div className="product-card-footer pink-color">
              <i className="card-footer-icon fa-regular fa-heart"></i>
              <button className="btn card-btn">Add to Cart</button>
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
