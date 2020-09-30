import React from 'react';
import Item from './Item';

const List = ({ itemName, items, updateComplete, deleteItem, updateItem }) => (
  <>
    <h2>{itemName}</h2>
    <ul>
      { items.map( i => <Item key={i.id} {...i} 
      updateComplete={updateComplete} 
      deleteItem={deleteItem} 
      updateItem={updateItem}/>)}
    </ul>
  </>
)


export default List;