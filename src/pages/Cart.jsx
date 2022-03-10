import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );
  }
}

export default Cart;
