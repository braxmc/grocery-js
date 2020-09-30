import React, { Component } from 'react';
class ItemForm extends Component {
  state = { itemName: '', price: 0, complete: false }

  componentDidMount() {
  if (this.props.id) {
    const { itemName, price } = this.props
    this.setState({ itemName, price })
  }
}

  handleChange = (f) => {
    const { name, value } = f.target
    this.setState({ [name]: value })
  }

  handleSubmit = (f) => {
    f.preventDefault()
    if (this.props.id) {
      const {updateComplete} = this.props
      updateComplete(this.state)
    } else {
    this.props.addItem(this.state)
    this.setState({ itemName: '', price: 0 })
    }
  }

  render() {
  const { itemName, price } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          name='itemName'
          value={itemName}
          onChange={this.handleChange}
          required
          placeholder='Item Name'
        />
        <input 
          name='price'
          value={price}
          onChange={this.handleChange}
          required
          placeholder='Price'
        />
        <input type='submit' />
      </form>
    )
  }
}

export default ItemForm;