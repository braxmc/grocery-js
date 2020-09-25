import React from 'react';
import Item from './Item';

const List = ({ itemName, price, items, updateComplete }) => (
  <div>
    <h2>{itemName}</h2>
    <ul>
      { items.map( i => <Item key={i.id} {...i} updateComplete={updateComplete} />)}
    </ul>
  </div>
)


export default List;