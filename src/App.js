import React, { Component } from 'react';
import Item from './Item.js';


class App extends Component {
  state = {cart: {}}
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
      {
        id: 3,
        name: 'Item Three',
        quantity: 1,
        unit: 'dozen',
        price: 75,
      },
    ]

    const handleDecreaseClick = (id, e) => {
      let cart = {...this.state.cart}
      if (cart[id] === 1) {
        delete cart[id]
      } else {
        cart[id] = cart[id] - 1
      }
      this.setState({cart})
    }

    const handleIncreaseClick = (id, e) => {
      let cart = {...this.state.cart}
      cart[id] = (cart[id] || 0) + 1
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
                    handleIncreaseClick={handleIncreaseClick}
                    key={item.id} />)
    })
    console.log(this.state.cart)

    return (
      <div>
        {comps}
      </div>
    )
  }
}

export default App;
