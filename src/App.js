import React, { Component } from 'react';
import List from './components/groceries/groceries/List';
import ItemForm from './components/groceries/groceries/ItemForm';
import Footer from './components/groceries/groceries/Footer';
import { Container, Header } from 'semantic-ui-react';


class App extends Component {
  state = { items: [
    { id: 1, itemName: 'Chips', price: 3, complete: false },
    { id: 2, itemName: 'Monster', price: 5, complete: false},
    { id: 3, itemName: 'Soap', price: 2, complete: false},
  ],
    filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

   visibleItems = () => {
    const { items, filter } = this.state
    switch(filter) {
      case 'Active':
        return items.filter( i => !i.complete)
      case 'Complete':
        return items.filter( i => i.complete)
      default: 
        return items
    }
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

  deleteItem = (id) => {
    this.setState({ items: [...this.state.items.filter(item => item.id !== id)] });
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
    const { filter } = this.state
    return(
      <Container>
        <Header>S & B United</Header>
          <ItemForm addItem={this.addItem} />
          <Footer filter={filter} setFilter={this.setFilter} />
          <List 
            items={this.visibleItems()}
            updateComplete={this.updateComplete}
            deleteItem={this.deleteItem}
          />
      </Container>
    )
  }
}

export default App;