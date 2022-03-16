import React, { Component } from 'react';
import './Cart.css';
import PropTypes from 'prop-types';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
      priceState: 0,
      // quantityState: 0,
    };

    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
  }

  componentDidMount() {
    // const { quantity } = this.state;
    const { price } = this.props;
    this.setState({
      priceState: price,
    });

    this.retrieveQuantity();
    // this.getSavedProducts();
  }

  componentDidUpdate() {
    const { quantity } = this.state;
    const { id } = this.props;

    localStorage.setItem(`${id}`, JSON.stringify(quantity));
  }

  handleIncreaseQuantity() {
    // const { className } = target;
    const { quantity } = this.state;
    const { price, sumQuantity } = this.props;
    console.log('Quantity antes do setState', quantity);
    console.log('Preço', price);

    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }), () => console.log('Quantity depois do setState', quantity));

    this.setState((prevState) => ({
      priceState: price * prevState.quantity,
    }));

    sumQuantity();

    // const productAdd = {
    //   id: '',
    //   quantity: '',
    // };

    // this.calculatePrice();
  }

  handleDecreaseQuantity() {
    const { quantity } = this.state;
    // const { className } = target;
    const { price, decreaseQuantity } = this.props;
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

    this.setState((prevState) => ({
      priceState: price * prevState.quantity,
    }));

    decreaseQuantity();
  }

  retrieveQuantity = () => {
    const { id } = this.props;

    if (JSON.parse(localStorage.getItem(id)) === null) {
      this.setState({
        quantity: 1,
      });
    } else {
      this.setState({
        quantity: JSON.parse(localStorage.getItem(id)),
      });
    }
  }

  render() {
    const { quantity, priceState } = this.state;
    const { title, image, avaibility } = this.props;
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
            {/* { firstClick ? newQuantity : priceState } */}
            {priceState}
            {' '}
          </p>
          <img src={ image } alt={ title } />
          <div data-testid="shopping-cart-product-quantity" className="product-quantity">
            <p>
              Disponibilidade:
              {' '}
              {avaibility}
            </p>
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
              // value=
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
              disabled={ avaibility <= quantity }
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
  id: PropTypes.string.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  sumQuantity: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  avaibility: PropTypes.number.isRequired,
};

export default Cart;
