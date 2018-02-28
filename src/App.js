import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';

import Item from './Item.js';


class App extends Component {
  state = {cart: {}, total_items: 0, total_price: 0}
  render() {
    console.log(this.state.cart, this.state.total_price)

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

    const handleDecreaseClick = (id, price) => (e) => {
      let cart = {...this.state.cart}
      if (cart[id] === 1) {
        delete cart[id]
      } else {
        cart[id] = cart[id] - 1
      }
      let total_items = Object.keys(cart).length
      let total_price = this.state.total_price - Number(price)
      this.setState({cart, total_items, total_price})
    }

    const handleIncreaseClick = (id, price) => (e) => {
      let cart = {...this.state.cart}
      cart[id] = (cart[id] || 0) + 1
      let total_items = Object.keys(cart).length
      let total_price = this.state.total_price + Number(price)
      this.setState({cart, total_items, total_price})
    }

    const comps = []
    items.forEach((item) => {
      comps.push(<Item
                    id={item.id}
                    name={item.name}
                    inCart={this.state.cart[item.id]}
                    quantity={item.quantity}
                    unit={item.unit}
                    price={item.price}
                    handleDecreaseClick={handleDecreaseClick(item.id, item.price)}
                    handleIncreaseClick={handleIncreaseClick(item.id, item.price)}
                    key={item.id} />)
    })

    const sidebarStyle = {
      backgroundColor: 'lightblue',
      height: 'calc(100vh - 64px)',
      width: 200,
      margin: 0,
      padding: 0,
      float: 'left',
    }

    const smallCartStyle = {
      // backgroundColor: 'lightgreen',
      height: 75,
      width: 75,
      position: 'fixed',
      right: 0,
      top: '45vh',
      cursor: 'pointer',
      boxShadow: '0px 0px 6px 0px rgba(0,0,0,1)',
    }

    const smallCartTopStyle = {
      backgroundColor: 'white',
      height: 50,
      // * * *
      opacity: 0.9,
      textAlign: 'center',
      lineHeight: 1.8,
      fontWeight: 'bold',
    }

    const smallCartBottomStyle = {
      backgroundColor: 'coral',
      height: 25,
      // * * *
      opacity: 0.9,
      textAlign: 'center',
      lineHeight: 1.8,
      fontWeight: 'bold',
    }

    return (
      <div>
        <Appbar>
          <table width="100%">
           <tbody>
             <tr>
               <td className="mui--appbar-height">Left Side</td>
               <td className="mui--appbar-height" style={{textAlign: 'right'}}>Right Side</td>
             </tr>
           </tbody>
          </table>
        </Appbar>

        <div style={ sidebarStyle }></div>

        {comps}

        <div
          id="small_cart"
          style={ smallCartStyle }>
            <div
              id="small_cart_top"
              style={ smallCartTopStyle}>
                ICON <br/>
                {this.state.total_items} ITEMS
            </div>
            <div
              id="small_cart_bottom"
              style={ smallCartBottomStyle }>
              ৳ {this.state.total_price}
            </div>
        </div>
      </div>
    )
  }
}

export default App;
