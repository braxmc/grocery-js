import React from 'react';
const Item = ({ id, itemName, price, complete }) => (
  <li>
    <h2>${price} - {itemName}</h2>
  </li>
)

export default Item;