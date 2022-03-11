import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    }
  }
  componentDidMount(){
    const savedItems = JSON.parse(localStorage.getItem('list'));
    this.setState ((prevState) => ({
      cartItems: [...prevState.cartItems, prevState.cartItems + savedItems],
    }));
  }
  
  render() {
    const { cartItems } = this.state;
    return ( 
      <>
      {cartItems.map(({name})=> name)}
     
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
      </>
    );
  }
}

export default Cart;
