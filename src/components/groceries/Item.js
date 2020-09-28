import React from 'react';

const Item = ({ id, itemName, price, complete, updateComplete, deleteItem}) => (
  <li>
    <h2 
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={() => updateComplete(id)}>${price} - {itemName}
    </h2>
    <button onClick={() => deleteItem(id)}>Delete</button>
  </li>
)
const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Item;