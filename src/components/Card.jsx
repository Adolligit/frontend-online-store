import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
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
