import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl" id="work">
      <div className="pl-texts">
        <h1 className="pl-title">Projekte</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            subject={item.subject}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
