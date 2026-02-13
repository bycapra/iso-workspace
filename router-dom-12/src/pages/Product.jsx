import React from "react";
import SingleProduct from "../components/SingleProduct";
import { products } from "../data/ProductData";

function Product() {

  return (
    <div>
      {products && products.map((p) => <SingleProduct key={p.id} product={p} />)}
    </div>
  );
}

export default Product;
