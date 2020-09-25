import React from 'react';
import Item from './Item';

const List = ({ itemName, price, items }) => (
  <div>
    <h2>{itemName}</h2>
    <ul>
      { items.map( i => <Item key={i.id} {...i} />)}
    </ul>
  </div>
)


export default List;