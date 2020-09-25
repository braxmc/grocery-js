import React, { Component } from 'react';
import List from './components/groceries/List';
import ItemForm from './components/groceries/ItemForm';


class App extends Component {
  state = { items: [
    { id: 1, itemName: 'Chips', price: 3, complete: true },
    { id: 2, itemName: 'Monster', price: 5, complete: false},
    { id: 3, itemName: 'Soap', price: 2, complete: false},
  ]}

  visibleItems = () => {
    const { items } = this.state
    return items
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (incomingItem) => {
    const { items } = this.state
    const newItem = { id: this.getUniqId(), ...incomingItem }
    this.setState({ items: [...items, newItem]})
  }

  updateComplete = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( i => {
        if (i.id === id) {
          return { ...i, complete: !i.complete}
        }
        return i
      })
    })
  }

  render() {
    return(
      <div>
        <header>S & B United</header>
        <ul>
          <ItemForm addItem={this.addItem} />
          <List 
            items={this.visibleItems()}
            updateComplete={this.updateComplete}
          />  
        </ul>
      </div>
    )
  }
}

export default App;