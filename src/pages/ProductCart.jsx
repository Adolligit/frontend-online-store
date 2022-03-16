import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

class ProductCart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      totalQuantity: 0,
    };
  }

  componentDidMount() {
    this.getSavedProducts();
    this.initialElements();
  }

  componentDidUpdate() {
    const { totalQuantity } = this.state;
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
  }

  getSavedProducts = () => {
    // const { quantityObj } = this.state;
    // const { cartItems } = this.state;

    this.setState({
      cartItems: JSON.parse(localStorage.savedProducts),
    });
  }

  initialElements = () => {
    // const { cartItems } = this.state;
    // const { totalQuantity } = this.state;

    this.setState({
      totalQuantity: JSON.parse(localStorage.getItem('totalQuantity')),
    });
  }

  sumQuantity = () => {
    // const { totalQuantity } = this.state;
    // this.setState((prevState) => ({
    //   totalQuantity: totalQuantity + prevState.cartItems.length,
    // }));

    this.setState((prevState) => ({
      totalQuantity: prevState.totalQuantity + 1,
    }));

    this.getSavedProducts();
  }

  // getSavedProducts = async () => {
  //   this.setState({
  //     quantity: JSON.parse(localStorage.getItem('totalQuantity')),
  //   });
  // }

  decreaseQuantity = () => {
    // const { totalQuantity } = this.state;
    // this.setState((prevState) => ({
    //   totalQuantity: totalQuantity + prevState.cartItems.length,
    // }));

    this.setState((prevState) => ({
      totalQuantity: prevState.totalQuantity - 1,
    }));
  }

  renderProducts = (product) => (<Cart
    id={ product.id }
    key={ product.title }
    title={ product.title }
    image={ product.thumbnail }
    price={ product.price }
    avaibility={ product.available_quantity }
    sumPrice={ this.sumPrice }
    sumQuantity={ this.sumQuantity }
    decreaseQuantity={ this.decreaseQuantity }
  />)

  render() {
    // const { productsInCart } = this.props;
    const { cartItems, totalQuantity } = this.state;
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
        <div>
          Quantidade total de produtos:
          {' '}
          { totalQuantity }
        </div>
        <br />
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
