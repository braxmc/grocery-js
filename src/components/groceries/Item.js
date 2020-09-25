import React from 'react';
const Item = ({ id, itemName, price, complete, updateComplete }) => (
  <li 
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={() => updateComplete(id)}
  >
    <h2>${price} - {itemName}</h2>
  </li>
)
const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Item;