import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    const { product: { id, thumbnail, title, price } } = this.props;

    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          key={ id }
          to={ `/product-details/${id}` }
        >
          <h3>{ title }</h3>
        </Link>
        <img src={ thumbnail } alt={ title } />
        <span>{`R$${price}`}</span>
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
