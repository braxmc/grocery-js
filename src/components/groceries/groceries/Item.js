import React, { Component } from 'react';
import ItemForm from './ItemForm';
import { Modal, Header, Button } from 'semantic-ui-react';

class Item extends Component {
  state = { editing: false }

  open = () => this.setState({ editing: true })
  close = () => this.setState({ editing: false })

  render() {
    const { id, itemName, price, complete, updateComplete, deleteItem, updateItem } = this.props
    const { editing } = this.state

    return(

        <>
            <Header
              style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
              onClick={() => updateComplete(id)}
            >
                ${price} - {itemName}
            </Header>

            <Button color='red' onClick={() => deleteItem(id)}>Delete</Button>
          
            <Modal
              onOpen={() => this.open()}
              open={editing}
              trigger={<Button>Edit</Button>}
            >
              <Modal.Content>
                <ItemForm
                  updateItem={updateItem}
                  close={this.close}
                  id={id}
                  itemName={itemName}
                  price={price}
                  complete={complete}
                />
              </Modal.Content>
            </Modal>
        </>
      )
    }
  }

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
    }
  


export default Item;