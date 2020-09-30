import React, { Component } from 'react';
import ItemForm from './ItemForm';

class Item extends Component {
  state = {editing: false}

  open = () => this.setState({ editing: true })
  close = () => this.setState({ editing: false })

  render() {
const { id, itemName, price, complete, updateComplete, deleteItem, editItem} = this.props
const { editing } = this.state

return(
<div>
    <header
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={() => updateComplete(id)}>${price} - {itemName}
    <button onClick={() => deleteItem(id)}>Delete</button>
    <button onClick={() => updateComplete(id)}>Cross Out</button>
    </header>
  
    <modal
      onOpen={() => this.open()}
      open={editing}
      trigger={<button>Edit</button>}
    >
      
    <ItemForm
        updateComplete={updateComplete}
        close={this.close}
        id={id}
        itemName={itemName}
        complete={complete}
      />
      
    </modal>
</div>
      )
    }
  }

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
    }
  


export default Item;