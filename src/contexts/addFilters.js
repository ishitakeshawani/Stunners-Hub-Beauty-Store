export const addFilters = (state, { type, payload }) => {
  switch (type) {
    case "CALL_API":
      return { ...state, productList: payload };
    case "SORT":
      if (payload === "PRICE_HIGH_TO_LOW") {
        return { ...state, sortBy: "PRICE_HIGH_TO_LOW" };
      }
      if (payload === "PRICE_LOW_TO_HIGH") {
        return { ...state, sortBy: "PRICE_LOW_TO_HIGH" };
      }

      // case "SORT_BY_4STAR_AND_ABOVE":
      //   return {
      //     ...state,
      //     productList: action.payload.filter((product) => product.rate >= 4),
      //   };
      // case "SORT_BY_3STAR_AND_ABOVE":
      //   return {
      //     ...state,
      //     productList: action.payload.filter((product) => product.rate >= 3),
      //   };
      // case "SORT_BY_2STAR_AND_ABOVE":
      //   return {
      //     ...state,
      //     productList: action.payload.filter((product) => product.rate >= 2),
      //   };
      // case "SORT_BY_1STAR_AND_ABOVE":
      //   return {
      //     ...state,
      //     productList: action.payload.filter((product) => product.rate >= 1),
      //   };
      // case "Perfumes":
      //   return {
      //     ...state,
      //     productList: state.productList.filter(
      //       (product) => product.categoryName === "perfumes"
      //     ),
      //     // getFilteredProducts("perfumes", action.payload),
      //     // [...new Set([
      //     //   ...action.payload.filter(
      //     //    (product) => product.categoryName == "perfumes"
      //     //  ), ...state.productList])]
      //   };
      // case "Dedorants":
      return {
        // ...state,
        // productList: state.productList.filter(
        //   (product) => product !== action.payload
        // ),
        // [...new Set([
        //   ...action.payload.filter(
        //    (product) => product.categoryName == "deodorants"
        //  ),...state.productList])]
      };
    default:
      return { ...state };
  }
};
