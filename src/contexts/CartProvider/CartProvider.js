import { React, useContext, createContext, useState, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { TotalCartPrice, TotalProductDiscount } from "../../utils/cartUtils";
const cartContext = createContext();

function CartProvider({ children }) {
  const [name, setName] = useState();
  const initialState = {
    cartProductList: [],
  };
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = TotalCartPrice(cartState.cartProductList);
  const totalDiscount = TotalProductDiscount(
    cartState.cartProductList,
    totalPrice
  );
  const totalAmount = (totalPrice - totalDiscount).toFixed(2);
  const totalSave = (totalPrice - totalAmount).toFixed(2);
  return (
    <cartContext.Provider
      value={{
        cartState,
        dispatch,
        totalPrice,
        totalDiscount,
        totalAmount,
        totalSave,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
