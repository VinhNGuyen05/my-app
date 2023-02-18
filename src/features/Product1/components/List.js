import React from "react";
import "./list.css";

function List(props) {
  return (
    <div class="grid-container">
      {props.product.products.map((item) => (
        <div class="grid-item">
          <img src={item.thumbnail} alt={item.title} class="center"/>
          <div >
            <p id="category">{item.category}</p>
            <p id="title">{item.title}</p>
            <p id="price">${item.price}</p>
          </div>
          <button className="button">Add to ...</button>
        </div>
      ))}
    </div>
  );
}

export default List;
