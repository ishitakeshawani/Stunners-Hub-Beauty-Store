import React from 'react';
import { Filter, ProductsList } from 'Components';
import "./products.css";


export default function Products() {
  return (
    <div className="product-page">
        <Filter />
        <ProductsList />
    </div>
  )
}
