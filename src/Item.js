import React, { Component } from 'react';
import Appbar from 'muicss/lib/react/appbar';


class AddToCart extends Component {
  render() {
    const atc_style = {
      width: 150,
    }

    const changeButtonStyle = {
      width: 30,
    }

    const inBagStyle = {
      width: 90,
    }

    const {id, price, inCart, handleDecreaseClick, handleIncreaseClick} = this.props

    if (this.props.inCart > 0) {
      return (
        <div>
          <button
            color="primary"
            id={id}
            onClick={() => {handleDecreaseClick(id)}}
            style={ changeButtonStyle }> - </button>

          <button
            color="primary"
            onClick={(e) => {handleIncreaseClick(id, price, e)}}
            style={ inBagStyle }>{inCart} in bag</button>

          <button
            color="primary"
            id={id}
            onClick={(e) => {handleIncreaseClick(id, price, e)}}
            style={ changeButtonStyle }> + </button>
        </div>
      )
    } else {
      return (
        <div>
          <button
            color="primary"
            onClick={() => {handleIncreaseClick(id)}}
            style={ atc_style }>Add to Cart</button>
        </div>
      )
    }
  }
}


class ItemInfo extends Component {
  render() {
    const {quantity, unit, price} = this.props

    return (
      <div>
        <p>{this.props.name}</p>
        <small>{quantity} {unit}</small> <br/>
        <small>৳ {price}</small>
      </div>
    )
  }
}

ItemInfo.defaultProps = {
  name: 'Unnamed Item',
  unit: 'kg',
}

class ItemImage extends Component {
  render() {
    const {imgSrc} = this.props

    return (
      <div>
        <img src={imgSrc} alt="Item"/>
      </div>
    )
  }
}

ItemImage.defaultProps = {
  imgSrc: 'http://imgquik.herokuapp.com/image/150x150/000/FFF/'
}


class Item extends Component {
  render() {
    const style = {
      textAlign: 'center',
      float: 'left',
      marginLeft: 10,
      marginTop: 10,
    }

    const {id, imgSrc, name, quantity, unit, price, inCart} = this.props

    return (
      <div style={ style }>
        <ItemImage imgSrc={imgSrc} />
        <ItemInfo name={name} quantity={quantity} unit={unit} price={price} />
        <AddToCart
          id={id}
          price={price}
          inCart={inCart}
          handleDecreaseClick={this.props.handleDecreaseClick}
          handleIncreaseClick={this.props.handleIncreaseClick} />
      </div>
    )
  }
}

export default Item;
