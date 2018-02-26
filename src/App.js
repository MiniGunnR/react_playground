import React, { Component } from 'react';
import logo from './logo.svg';
import Item from './Item.js';


class App extends Component {
  state = {cart: {2: 4}}
  render() {
    const items = [
      {
        name: 'Item One',
        inCart: 2,
        quantity: 1,
        unit: 'kg',
        price: 50,
      },
      {
        name: 'Item Two',
        inCart: 0,
        quantity: 1,
        unit: 'dozen',
        price: 100,
      },
    ]
    
    return (
      <div>
        <Item name='Item One' inCart={this.state.cart[1]} quantity={1} price={50} />
        <Item name='Item Two' inCart={this.state.cart[2]} quantity={1} price={50} />
      </div>
    )
  }
}

export default App;
