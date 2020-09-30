import React from 'react';
import Item from './Item';

const List = ({ itemName, price, items, updateComplete, deleteItem }) => (
  <div>
    <h2>{itemName}</h2>
    <ul>
      { items.map( i => <Item key={i.id} {...i} 
      updateComplete={updateComplete} 
      deleteItem={deleteItem} />)}
    </ul>
  </div>
)


export default List;