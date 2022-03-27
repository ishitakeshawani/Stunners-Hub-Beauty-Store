import axios from "axios";

export const addProductToCart = async (product, dispatch) => {
  const encodedToken = localStorage.getItem("token");
  console.log(product);
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response);
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    console.log(cartState.cartProductList);
  } catch (error) {
    console.log(error);
  }
};

export const RemoveProductFromCart = async (productId, dispatch) => {
  try {
    const response = await axios.delete(`api/user/cart/${productId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    console.log(response);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  } catch (error) {
    console.log(error());
  }
};

export const handleQuantity = async (product, getType, dispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: getType,
        },
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    if (product.quantity === 1 && getType === "decrement") {
      RemoveProductFromCart(product._id, dispatch);
    }

    dispatch({
      type:
        getType === "increment" ? "INCREMENT_QUANTITY" : "DECREMENT_QUANTITY",
      payload: product,
    });
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const TotalCartPrice = (cartProductList) => {
  return cartProductList.reduce(
    (totalPrice, product) =>
      totalPrice + Number(product.price) * product.quantity,
    0
  );
};

export const TotalProductDiscount = (cartProductList, totalPrice) => {
  return cartProductList.length > 0
    ? cartProductList.reduce(
        (total, product) =>
          total +
         ( Number(product.price) *
            Number(product.quantity) *
            (Number(product.quantity) * Number(product.discount)))/100,
        0
      )
    : 0;
};