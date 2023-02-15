import React, { useEffect, useState } from "react";
import List from "./components/List";
import { Link } from "react-router-dom";
import "./index.css"
import data from "./mock-data.json";

const BASE_URL = "https://dummyjson.com/products";

const Product1 = () => {
  const [product, setProduct] = useState({ products: [] });

  const fetchData = () => {
    fetch(`${BASE_URL}?limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <List product={product} />
      <Link to="/product">
        <button class="button-link">View more...</button>
      </Link>
      <List product={data} />
    </div>
  );
};

export default Product1;
