import React, { useEffect, useState } from "react";
import List from "./List";

const BASE_URL = "https://dummyjson.com/products";

const Product2 = () => {
  const [product, setProduct] = useState({ products: [] });

  const fetchData = () => {
    fetch(`${BASE_URL}?limit=0&skip=5`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      }
    );
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <List product={product} />
    </div>
  );
};

export default Product2;