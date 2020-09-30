import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = { itemName: '', price: 0, complete: false }

  componentDidMount() {
  if (this.props.id) {
    const { itemName, price, complete } = this.props
    this.setState({ itemName, price, complete })
  }
}

  handleChange = (f) => {
    const { name, value } = f.target
    this.setState({ [name]: value })
  }

  handleSubmit = (f) => {
    f.preventDefault()
    if (this.props.id) {
      const { updateComplete, close } = this.props
      updateComplete(this.state)
      close()
    } else {
    this.props.addItem(this.state)
    }
    this.setState({ itemName: '', price: 0, complete: false })
  }

  render() {
  const { itemName, price } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name='itemName'
          value={itemName}
          onChange={this.handleChange}
          required
          placeholder='Item Name'
        />
        <Form.Input 
          name='price'
          value={price}
          onChange={this.handleChange}
          required
          placeholder='Price'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ItemForm;