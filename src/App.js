import React, { Component } from 'react';
import logo from './logo.svg';
import Item from './Item.js';


class App extends Component {
  state = {cart: {2: 4}}
  render() {
    const items = [
      {
        id: 1,
        name: 'Item One',
        quantity: 1,
        unit: 'kg',
        price: 50,
      },
      {
        id: 2,
        name: 'Item Two',
        quantity: 1,
        unit: 'dozen',
        price: 100,
      },
    ]

    const handleDecreaseClick = (event) => {
      let cart = {...this.state.cart}
      cart[2] = cart[2] - 1
      this.setState({cart})
    }

    const handleIncreaseClick = (event) => {
      let cart = {...this.state.cart}
      cart[2] = cart[2] + 1
      this.setState({cart})
    }

    const comps = []
    items.forEach((item) => {
      comps.push(<Item
                    id={item.id}
                    name={item.name}
                    inCart={this.state.cart[item.id]}
                    quantity={item.quantity}
                    price={item.price}
                    handleDecreaseClick={handleDecreaseClick}
                    handleIncreaseClick={handleIncreaseClick} />)
    })

    return (
      <div>
        {comps}
      </div>
    )
  }
}

export default App;
