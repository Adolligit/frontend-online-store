import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { image, name, price } = this.props;

    return (
      <div data-testid="product">
        <h3>{ name }</h3>
        <img src={ image } alt={ name } />
        <span>{ price }</span>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
