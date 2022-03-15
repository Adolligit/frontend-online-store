import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

class ProductCart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      // totalPrice: 0,
    };
  }

  componentDidMount() {
    this.getSavedProducts();
    // this.renderProducts();
  }

  getSavedProducts = () => {
    this.setState({
      cartItems: JSON.parse(localStorage.savedProducts),
    });
  }

  // const { quantity } = this.state;

  renderProducts = (product, index) => (<Cart
    id={ index }
    key={ product.title }
    title={ product.title }
    image={ product.thumbnail }
    price={ product.price }
    sumPrice={ this.sumPrice }
  />)
  // this.sumPrice(product);

  // sumPrice = (product) => {
  //   const { totalPrice } = this.state;
  //   this.setState({
  //     totalPrice: product.price,
  //   });
  // }

  render() {
    // const { productsInCart } = this.props;
    const { cartItems } = this.state;
    console.log('Cart Items no render', cartItems);
    return (
      <div>
        { cartItems.length > 0
          ? cartItems.map((product, index) => this.renderProducts(product, index))
          : (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>
          )}
        <span>Valor total da compra: </span>
        <br />
        <Link to="/checkout">
          <button type="submit" data-testid="checkout-products">Finalizar compra</button>
        </Link>
      </div>
    );
  }
}

export default ProductCart;
