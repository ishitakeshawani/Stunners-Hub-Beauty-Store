import React from "react";
import { useCart } from "../../contexts/CartProvider/CartProvider";
import "./cart.css";
import { RemoveProductFromCart, handleQuantity } from "../../utils/cartUtils";
import { useProduct } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { addProductToWishlist } from "../../utils";
import { Address } from "../../Components";

export function Cart() {
  const {
    cartState,
    dispatch,
    totalPrice,
    totalDiscount,
    totalAmount,
    totalSave,
  } = useCart();
  const { state, productDispatch } = useProduct();
  let navigate = useNavigate();
  function ProductInWishlist(productId) {
    return state.wishListData.some((product) => product._id === productId);
  }
  return (
    <div class="cart-page">
      {cartState.cartProductList.length > 0 ? (
        <div>
          <div class="cart-page-title semibold-font-weight">My Cart</div>
          <Address />
          <div class="cart-page-item">
            <div>
              {cartState.cartProductList.map((product) => (
                <div class="cart-product-card">
                  <div class="cart-product-img">
                    <img
                      src={product.image}
                      alt="product-img"
                      className="cart-image"
                    />
                  </div>
                  <div class="cart-product-details">
                    <div class="cart-product-name bold-font-weight">
                      {product.name}
                    </div>
                    <div class="cart-product-price bold-font-weight">
                      ₹{product.price}
                      <span class="cart-product-off">
                        {product.discount}% off
                      </span>
                    </div>
                    <div class="product-quantity flex">
                      <div class="product-quantity-label">Quantity :</div>
                      <button
                        class="cart-product-btn"
                        onClick={() =>
                          handleQuantity(product, "increment", dispatch)
                        }
                      >
                        +
                      </button>
                      <div class="cart-product-number">{product.quantity}</div>
                      <button
                        class="cart-product-btn"
                        onClick={() =>
                          handleQuantity(product, "decrement", dispatch)
                        }
                      >
                        -
                      </button>
                    </div>
                    <button
                      class="btn cart-remove-btn"
                      onClick={() =>
                        RemoveProductFromCart(product._id, dispatch)
                      }
                    >
                      Remove from cart
                    </button>
                    <button
                      class="btn cart-wishlist-btn"
                      onClick={() => {
                        ProductInWishlist(product._id)
                          ? navigate("/wishlist")
                          : addProductToWishlist(product, productDispatch);
                      }}
                    >
                      {ProductInWishlist(product._id)
                        ? "Go to wishlist"
                        : "Add to wishlist"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div class="price-details-card">
              <div class="price-details-title bold-font-weight">
                PRICE DETAILS
              </div>
              <hr />
              <div class="price-details-first-section">
                <div class="flex-row">
                  <div>Price({cartState.cartProductList.length})</div>
                  <div>₹{totalPrice}</div>
                </div>
                <div class="flex-row">
                  <div>Discount</div>
                  <div>₹{totalDiscount}</div>
                </div>
                <div class="flex-row">
                  <div>Delivery charges</div>
                  <div>₹50</div>
                </div>
              </div>
              <hr />
              <div class="flex-row">
                <div class="bold-font-weight">Total Amount</div>
                <div class="bold-font-weight">₹{totalAmount}</div>
              </div>
              <hr />
              <div>You will be save ₹{totalSave} in this order.</div>
              <button class="btn place-order">Place order</button>
            </div>
          </div>{" "}
        </div>
      ) : (
        <h3>Your cart is empty.</h3>
      )}
    </div>
  );
}

