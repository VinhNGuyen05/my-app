import React from "react";
import "./list.css";

function List(props) {
  return (
    <table class="fixed_header ">
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {props.product.products.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
