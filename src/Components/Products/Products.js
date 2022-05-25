import React from "react";
import { Filter, ProductsList } from "Components";
import "./products.css";
import { setDocumentTitle } from "hooks";

export default function Products() {
  setDocumentTitle("Stunners Hub | Products");
  return (
    <div className="product-page">
      <Filter />
      <ProductsList />
    </div>
  );
}
