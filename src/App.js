import React, { Component } from 'react';
import List from './components/groceries/List';


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

  render() {
    return(
      <div>
        <header>S & B United</header>
        <ul>
          <List 
            items={this.visibleItems()}
          />  
        </ul>
      </div>
    )
  }
}

export default App;