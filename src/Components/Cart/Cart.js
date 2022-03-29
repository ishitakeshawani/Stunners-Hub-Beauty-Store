import React from "react";
import { useCart } from "../../contexts/CartProvider/CartProvider";
import "./cart.css";
import { RemoveProductFromCart, handleQuantity } from "../../utils/cartUtils";
import { useProduct } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { addProductToWishlist } from "../../utils";

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
          <div class="address">
            <div class="address-sec">
              <div class="address-title">Deliver to: Richard Mason</div>
              <div class="detail-address">
                3, Sec 22, 361, A Jerbai Wadi Road, Near Post Office,
                Parel,Mumbai Maharashtra
              </div>
            </div>
            <button id="myBtn" class="btn click-btn">
              change
            </button>
            <div id="myModal" class="modal">
              <div class="modal-content">
                <form action="">
                  <h6 class="center-text">Add Address</h6>
                  <div>
                    <label for="" class="name-label">
                      Full Name
                    </label>
                  </div>
                  <input type="text" class="input" />
                  <div>
                    <label for="" class="name-label">
                      Contact Number
                    </label>
                  </div>
                  <input
                    class="input"
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                  <div>
                    <label for="" class="name-label">
                      Address
                    </label>
                  </div>
                  <input type="address" class="input-address" />
                </form>
                <div class="flex">
                  <button class="btn save-btn">save</button>
                  <button class="btn close-btn cancel-btn">cancel</button>
                </div>
              </div>
            </div>
          </div>
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
