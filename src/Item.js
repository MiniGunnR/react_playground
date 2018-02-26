import React, { Component } from 'react';


class AddToCart extends Component {
  render() {
    const atc_style = {
      color: 'red',
      width: 150,
    }

    const changeButtonStyle = {
      color: 'red',
      width: 30,
    }

    const inBagStyle = {
      color: 'red',
      width: 90,
    }

    const {id, inCart, handleDecreaseClick, handleIncreaseClick} = this.props

    if (this.props.inCart > 0) {
      return (
        <div>
          <button
            onClick={this.props.handleDecreaseClick}
            style={ changeButtonStyle }> - </button>

          <button style={ inBagStyle }>{inCart} in bag</button>

          <button
            onClick={this.props.handleIncreaseClick}
            style={ changeButtonStyle }> + </button>
        </div>
      )
    } else {
      return (
        <div>
          <button style={ atc_style }>Add to Cart</button>
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
        <img src={imgSrc}/>
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

    const {imgSrc, name, quantity, unit, price, inCart} = this.props

    return (
      <div style={ style }>
        <ItemImage imgSrc={imgSrc} />
        <ItemInfo name={name} quantity={quantity} unit={unit} price={price} />
        <AddToCart
          id={this.props.id}
          inCart={inCart}
          handleDecreaseClick={this.props.handleDecreaseClick}
          handleIncreaseClick={this.props.handleIncreaseClick} />
      </div>
    )
  }
}

export default Item;
