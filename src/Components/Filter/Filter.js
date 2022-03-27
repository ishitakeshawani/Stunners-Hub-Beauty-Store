import React from "react";
import { categories } from "../../backend/db/categories";
import { products } from "../../backend/db/products";
import { useProduct } from "../../contexts/ProductProvider/ProductProvider";

export const getSortedData = (state, productList) => {
  if (state.sortBy === "PRICE_HIGH_TO_LOW") {
    return [...productList].sort((a, b) => b.price - a.price);
  }
  if (state.sortBy === "PRICE_LOW_TO_HIGH") {
    return [...productList].sort((a, b) => a.price - b.price);
  }
  return productList;
};

export const filterByRate = (state, productList) => {
  let data = [...productList];
  if (state.filterBy === "1STAR_AND_ABOVE") {
    data = [...productList].filter((product) => product.rate >= 1);
  }
  if (state.filterBy === "2STAR_AND_ABOVE") {
    data = [...productList].filter((product) => product.rate >= 2);
  }
  if (state.filterBy === "3STAR_AND_ABOVE") {
    data = [...productList].filter((product) => product.rate >= 3);
  }
  if (state.filterBy === "4STAR_AND_ABOVE") {
    data = [...productList].filter((product) => product.rate >= 4);
  }
  return data;
};

export const getFilteredData = (state, productList) => {
  let data = [...productList];
  if (state.FilterData.filterByCategories.length !== 0) {
    data = data.filter((product) =>
      state.FilterData.filterByCategories.includes(product.categoryName)
    );
  }

  return data;
};

export const getFilterByPrice = (state, productList) => {
  let data = [...productList];
  data = data.filter((product) => product.price >= state.getByPrice);
  return data;
};

export function Filter() {
  const { state, dispatch } = useProduct();

  return (
    <div className="filter">
      <div className="filter-heading">
        <div className="semibold-font-weight">FILTERS</div>
        <button className="clear-all-btn bold-font-weight" onClick={() =>
          {
            dispatch({
              type:"CLEAR"
            })
          }
        }>CLEAR</button>
      </div>
      <div className="price-section">
        <div className="price semibold-font-weight price-title">Price</div>
        <div className="range">
          <span>100</span>
          <span>500</span>
          <span>1000</span>
        </div>
        <input
          type="range"
          min="100"
          max="1000"
          onChange={(e) => {
            dispatch({
              type: "FILTER_BY_PRICE",
              payload: e.target.value,
            });
          }}
          className="slider"
        />
      </div>
      <div className="filter-category">
        <div className="semibold-font-weight category-title">Category</div>
        {categories.map((category) => {
          return (
            <div className="inline-category-item">
              <input
                type="checkbox"
                checked={state.FilterData.filterByCategories.includes(
                  category.categoryName
                )}
                className="filter-input"
                onChange={() =>
                  dispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: category.categoryName,
                  })
                }
              />
              <label>{category.categoryName}</label>
            </div>
          );
        })}
      </div>

      <div className="rating-section">
        <div className="rating-title semibold-font-weight">Rating</div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="radio"
            className="filter-input"
            value="4STAR_AND_ABOVE"
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_RATE",
                payload: e.target.value,
              });
            }}
          />
          <label htmlFor="rate">4 star & above</label>
        </div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="radio"
            className="filter-input"
            value="3STAR_AND_ABOVE"
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_RATE",
                payload: e.target.value,
              });
            }}
          />
          <label htmlFor="rate">3 star & above</label>
        </div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="radio"
            className="filter-input"
            value="2STAR_AND_ABOVE"
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_RATE",
                payload: e.target.value,
              });
            }}
          />
          <label htmlFor="rate">2 star & above</label>
        </div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="radio"
            className="filter-input"
            value="1STAR_AND_ABOVE"
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_RATE",
                payload: e.target.value,
              });
            }}
          />
          <label htmlFor="rate">1 star & above</label>
        </div>
      </div>

      <div className="sort-by">
        <div className="sort-by-title semibold-font-weight">Sort by</div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="sort_by_price"
            className="filter-input"
            value="PRICE_HIGH_TO_LOW"
            onChange={(e) =>
              dispatch({
                type: "SORT",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="sort">Price - High to Low</label>
        </div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="sort_by_price"
            className="filter-input"
            value="PRICE_LOW_TO_HIGH"
            onChange={(e) =>
              dispatch({
                type: "SORT",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="sort">Price - Low to High</label>
        </div>
      </div>
    </div>
  );
}
