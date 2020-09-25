import React, { Component } from 'react';


class App extends Component {
  state = { items: [
    { id: 1, itemName: 'Chips', complete: true },
    { id: 2, itemName: 'Monster', complete: false},
    { id: 3, itemName: 'Soap', complete: false},
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
          
        </ul>
      </div>
    )
  }
}

export default App;