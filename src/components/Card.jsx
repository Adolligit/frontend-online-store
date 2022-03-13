import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  addCart = () => {
    const { product } = this.props;
    const savedProducts = JSON.parse(localStorage.savedProducts);
    const contains = savedProducts.some(({ id }) => id === product.id);

    localStorage.savedProducts = JSON.stringify(
      (contains)
        ? [...savedProducts]
        : [...savedProducts, product],
    );
  }

  render() {
    const { product: { thumbnail, name, price } } = this.props;

    return (
      <div data-testid="product">
        <h3>{ name }</h3>
        <img src={ thumbnail } alt={ name } />
        <span>{ price }</span>
        <button
          onClick={ this.addCart }
          type="button"
          name="btnAddCart"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default Card;
