import React from "react";
import MyProduct from "./components/MyProduct";
import products from "./ProductData";

function ProductTab() {
  return (
    <div className="card-container">
      {products.map((product, index) => (
        <MyProduct
          key={index}
          title={product.title}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
          features={product.features}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductTab;
