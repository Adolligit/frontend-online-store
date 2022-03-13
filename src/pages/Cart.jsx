import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.getSavedProducts();
  }

  getSavedProducts = () => {
    this.setState({
      cartItems: JSON.parse(localStorage.savedProducts),
    });
  }

  createProduct = (product) => {
    const { title } = product;
    return (
      <fieldset key={ title } data-testid="shopping-cart-product-name">
        <span>{ title }</span>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </fieldset>
    );
  };

  render() {
    const { cartItems } = this.state;
    return (
      <>
        {
          cartItems.map((product) => this.createProduct(product))
        }
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      </>
    );
  }
}

export default Cart;
