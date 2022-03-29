export const getSortedData = ({ sortBy }, productList) => {
  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return [...productList].sort((a, b) => b.price - a.price);
  }
  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return [...productList].sort((a, b) => a.price - b.price);
  }
  return productList;
};

export const filterByRate = ({ filterBy }, productList) => {
  let data = productList;

  if (filterBy === "1STAR_AND_ABOVE") {
    data = productList.filter((product) => product.rate >= 1);
  }
  if (filterBy === "2STAR_AND_ABOVE") {
    data = productList.filter((product) => product.rate >= 2);
  }
  if (filterBy === "3STAR_AND_ABOVE") {
    data = productList.filter((product) => product.rate >= 3);
  }
  if (filterBy === "4STAR_AND_ABOVE") {
    data = productList.filter((product) => product.rate >= 4);
  }
  return data;
};

export const getFilteredData = ({ FilterData }, productList) => {
  let data = productList;
  if (FilterData.filterByCategories.length !== 0) {
    data = data.filter((product) =>
      FilterData.filterByCategories.includes(product.categoryName)
    );
  }

  return data;
};

export const getFilterByPrice = ({ getByPrice }, productList) => {
  let data = productList;
  data = data.filter((product) => product.price >= getByPrice);
  return data;
};
