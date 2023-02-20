import React from 'react';
import "./list.css";

function List(props) {
  return (
    <div className="grid-container">
      {props.product.products.map(item => (
        <div className="grid-item">
          <img  alt={item.title} src={item.thumbnail} className="center" />
          <div>
            <p id="category"> {item.category} </p>
            <p id="title"> {item.title} </p>
            <p id="price"> ${item.price} </p>
          </div>
          <button className="button">Add to...</button>
        </div>
      ))}
    </div>
  );
}

export default List;
