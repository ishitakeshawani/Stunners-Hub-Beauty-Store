import { act } from "@testing-library/react";
import {
  React,
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { addFilters } from "./addFilters";

const productContext = createContext();

function ProductProvider({ children }) {
  //   const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/products");
      const jsonData = await data.json();
      dispatch({ type: "CALL_API", payload: jsonData.products });
    };
    fetchData();
  }, []);

  // const getFilteredProducts = (category, payload) => {
  //   console.log(category, payload);
  //   return payload.filter((product) => product.categoryName == category);
  //   // .filter((pro) => pro.categoryName == "deodorants");
  // };

  const initialState = {
    productList: [],
    sortBy: "",
    filterBy: "",
    getByPrice: "",
    FilterData: {
      filterByCategories: [],
      filterByBrands: [],
    },
  };

  const [state, dispatch] = useReducer(addFilters, initialState);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
}

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
