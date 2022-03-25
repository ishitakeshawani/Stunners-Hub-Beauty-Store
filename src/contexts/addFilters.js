export const addFilters = (state, { type, payload }) => {
  switch (type) {
    case "CALL_API":
      return { ...state, productList: payload };
    case "SORT": {
      if (payload === "PRICE_HIGH_TO_LOW") {
        console.log("1star", state);
        return { ...state, sortBy: "PRICE_HIGH_TO_LOW" };
      }
      if (payload === "PRICE_LOW_TO_HIGH") {
        return { ...state, sortBy: "PRICE_LOW_TO_HIGH" };
      }
      return { ...state, sortBy: "" };
    }
    case "FILTER_BY_RATE": {
      if (payload === "1STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
      if (payload === "2STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
      if (payload === "3STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
      if (payload === "4STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
    }

    case "FILTER_BY_CATEGORY": {
      return state.FilterData.filterByCategories.includes(payload)
        ? {
            ...state,
            FilterData: {
              ...state.FilterData,
              filterByCategories: state.FilterData.filterByCategories.filter(
                (item) => item !== payload
              ),
            },
          }
        : {
            ...state,
            FilterData: {
              ...state.FilterData,
              filterByCategories:
                state.FilterData.filterByCategories.concat(payload),
            },
          };
    }

    //   // case "Perfumes":
    //   //   return {
    //   //     ...state,
    //   //     productList: state.productList.filter(
    //   //       (product) => product.categoryName === "perfumes"
    //   //     ),
    //   //     // getFilteredProducts("perfumes", action.payload),
    //   //     // [...new Set([
    //   //     //   ...action.payload.filter(
    //   //     //    (product) => product.categoryName == "perfumes"
    //   //     //  ), ...state.productList])]
    //   //   };
    //   // case "Dedorants":
    //   return {
    //     // ...state,
    //     // productList: state.productList.filter(
    //     //   (product) => product !== action.payload
    //     // ),
    //     // [...new Set([
    //     //   ...action.payload.filter(
    //     //    (product) => product.categoryName == "deodorants"
    //     //  ),...state.productList])]
    //   };
    default:
      return { ...state };
  }
};
