import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Cart.css';
import PropTypes from 'prop-types';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
      priceState: 0,
    };

    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
  }

  // handleIncreaseQuantity({ target }) {
  //   const { className } = target;
  //   // const newArray = [];
  //   // const { className } = target;
  //   const { quantity } = this.props;
  //   const { firstClick, newQuantity } = this.state;
  //   // console.log('Cart items', cartItems);

  //   if (!firstClick) {
  //     if (className === 'product-increase') {
  //       this.setState({
  //         firstClick: true,
  //         newQuantity: quantity + 1,
  //       });
  //     } else if (quantity >= 1 && className === 'product-decrease') {
  //       this.setState({
  //         firstClick: true,
  //         newQuantity: quantity - 1,
  //       });
  //     }
  //   } else if (className === 'product-increase') {
  //     this.setState({
  //       firstClick: true,
  //       newQuantity: quantity + 1,
  //     });
  //   } else if (newQuantity >= 1 && className === 'product-decrease') {
  //     this.setState({
  //       firstClick: true,
  //       newQuantity: quantity - 1,
  //     });
  //   }
  // }

  componentDidMount() {
    // const { quantity } = this.state;
    const { price } = this.props;
    this.setState({
      quantity: 1,
      priceState: price,
    });
  }

  handleIncreaseQuantity() {
    // const { className } = target;
    const { quantity } = this.state;
    console.log('Quantity', quantity);
    const { price } = this.props;
    console.log('Preço', price);
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
      priceState: price * quantity,
    }));
    /* this.setState({
      quantity: quantity + 1,
    }); */
    // const { firstClick, newQuantity } = this.state;
    /* this.setState({
      priceState: price * quantity,
    }); */

    // sumPrice(quantity * priceState);
  }

  handleDecreaseQuantity() {
    // const { className } = target;
    const { quantity } = this.state;
    const { price } = this.props;
    // const { price } = this.props;
    if (quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
        priceState: price * quantity,
      }));
      /* this.setState({
        // quantity: quantity - 1,
        priceState: price * quantity,
      }); */
    }

    // const { firstClick, newQuantity } = this.state;
  }

  render() {
    const { quantity, priceState } = this.state;
    const { title, image } = this.props;
    return (
      <>
        {/* <h1>TEste</h1> */}
        <fieldset data-testid="shopping-cart-product-name">
          <button type="button" className="product-remove">
            X
          </button>
          <h3>{ title }</h3>
          <p>
            R$
            {' '}
            {priceState}
            {' '}
          </p>
          <img src={ image } alt={ title } />
          <div data-testid="shopping-cart-product-quantity" className="product-quantity">
            <button
              type="button"
              data-testid="product-decrease-quantity"
              // name={ index }
              className="product-decrease"
              onClick={ this.handleDecreaseQuantity }
            >
              -
            </button>
            {/* {`Quantidade: ${quantity}`} */}
            <label htmlFor="input-number">
              {/* <input
                type="number"
                min="1"
                id="input-number"
                // value={ firstClick ? newQuantity : quantity }
                value={ quantity }
              /> */}
              <p className="quantity-value">
                { quantity }
                {' '}
              </p>
            </label>
            <button
              type="button"
              data-testid="product-increase-quantity"
              // name={ index }
              className="product-increase"
              onClick={ this.handleIncreaseQuantity }
            >
              +
            </button>

          </div>
        </fieldset>
      </>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Cart;
