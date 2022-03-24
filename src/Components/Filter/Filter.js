import React from "react";
import { products } from "../../backend/db/products";
import { useProduct } from "../../contexts/ProductProvider";

export const getSortedData = (state, productList) => {
  if (state.sortBy === "PRICE_HIGH_TO_LOW") {
    return [...productList].sort((a, b) => b.price - a.price);
  }
  if (state.sortBy === "PRICE_LOW_TO_HIGH") {
    return [...productList].sort((a, b) => a.price - b.price);
  }
  return productList;
};

export const getFilteredData = (state, productList) => {
  let data = [...productList];
  if (state.FilterData.filterByRate.length !== 0) {
    return state.FilterData.filterByRate;
  }
  return data;
};

export function Filter() {
  const { state, dispatch } = useProduct();

  return (
    <div className="filter">
      <div className="filter-heading">
        <div className="semibold-font-weight">FILTERS</div>
        <button className="clear-all-btn bold-font-weight">CLEAR</button>
      </div>
      <div className="price-section">
        <div className="price semibold-font-weight price-title">Price</div>
        <div className="range">
          <span>200</span>
          <span>2500</span>
          <span>5000</span>
        </div>
        <input
          type="range"
          min="200"
          max="5000"
          value="2500"
          className="slider"
        />
      </div>
      <div className="filter-category">
        <div className="semibold-font-weight category-title">Category</div>
        <div className="category-item">
          Makeup
          <img
            className="cat-img"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-7.png"
          />
          <div className="category-item-list">
            <div className="list">
              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Eyes</label>
              </div>
              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Face</label>
              </div>
              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Lips</label>
              </div>
              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Nails</label>
              </div>
            </div>
          </div>
        </div>
        <div className="category-item">
          Skincare
          <img
            className="cat-img"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-7.png"
          />
          <div className="category-item-list">
            <div className="list">
              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Cleaners</label>
              </div>

              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Body care</label>
              </div>
            </div>
          </div>
        </div>
        <div className="category-item">
          Haircare
          <img
            className="cat-img"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-7.png"
          />
          <div className="category-item-list">
            <div className="list">
              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Shampoo</label>
              </div>

              <div className="inline-category-item">
                <input type="checkbox" />
                <label htmlFor="input">Hair Serum</label>
              </div>
            </div>
          </div>
        </div>
        <div className="category-item">
          Fragrances
          <img
            className="cat-img"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-7.png"
          />
          <div className="category-item-list">
            <div className="list">
              <div className="inline-category-item">
                <input
                  type="checkbox"
                  onChange={() => {
                    dispatch({
                      type: "Perfumes",
                      payload: products,
                    });
                  }}
                />
                <label htmlFor="input">Perfumes</label>
              </div>
              <div className="inline-category-item">
                <input
                  type="checkbox"
                  onChange={() => {
                    dispatch({
                      type: "Dedorants",
                      payload: products,
                    });
                  }}
                />
                <label htmlFor="input">Deodorants</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rating-section">
        <div className="rating-title semibold-font-weight">Rating</div>
        <div className="inline-category-item">
          <input
            type="radio"
            name="radio"
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
