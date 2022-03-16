import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      // totalQuantity: 0,
    };
  }

  // componentDidUpdate() {
  //   const { totalQuantity } = this.state;

  //   // this.getSavedProducts();
  //   localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
  // }

  addCart = () => {
    const { product, cartSizeUpdate } = this.props;
    const savedProducts = JSON.parse(localStorage.savedProducts);
    const contains = savedProducts.some(({ id }) => id === product.id);

    localStorage.savedProducts = JSON.stringify(
      (contains)
        ? [...savedProducts]
        : [...savedProducts, product],
    );

    if (cartSizeUpdate) {
      cartSizeUpdate();
    }

    localStorage.setItem(`${product.id}`, JSON.stringify(1));

    if (JSON.parse(localStorage.getItem('totalQuantity'))) {
      const num = JSON.parse(localStorage.getItem('totalQuantity'));
      localStorage.setItem('totalQuantity', JSON.stringify(num + 1));
    } else {
      localStorage.setItem('totalQuantity', JSON.stringify(1));
    }

    this.getSavedProducts();

    // this.updateCartSize();
  }

  getSavedProducts = () => {
    console.log('Entrou aqui');
    // const { quantityObj } = this.state;
    const { cartItems } = this.state;

    this.setState({
      cartItems: JSON.parse(localStorage.savedProducts),
    }, () => console.log(cartItems));

    // this.initialElements();
  }

  //  initialElements = () => {
  //    const { totalQuantity } = this.state;

  //    this.setState((prevState) => ({
  //      totalQuantity: totalQuantity + prevState.cartItems.length,
  //    }), () => console.log(this.state.totalQuantity));
  //  }

  render() {
    const { testId } = this.props;

    return (
      <button
        onClick={ this.addCart }
        type="button"
        name="btnAddCart"
        data-testid={ `${testId}` }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default AddCartButton;
