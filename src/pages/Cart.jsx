import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      quantity: 1,
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
    const { quantity } = this.state;

    return (
      <fieldset key={ title } data-testid="shopping-cart-product-name">
        <h3>{ title }</h3>
        <span data-testid="shopping-cart-product-quantity">{`Quantidade: ${quantity}`}</span>
      </fieldset>
    );
  };

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {
          (cartItems.length > 0)
            ? cartItems.map((product) => this.createProduct(product))
            : (
              <span data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </span>
            )
        }
      </div>
    );
  }
}

export default Cart;
