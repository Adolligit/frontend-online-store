import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  addCart = () => {
    const { name, image, price } = this.props;
//    const savedItems = JSON.parse(localStorage.getItem('list'));
    localStorage.setItem("list", JSON.stringify(`[{${name},${image},${price}}]`));
  }


  render() {
    const { image, name, price } = this.props;

    return (
      <div data-testid="product">
        <h3>{ name }</h3>
        <img src={ image } alt={ name } />
        <span>{ price }</span>
        <button
        onClick={this.addCart}
        type="button"
        name="btnAddCart"
        >
        Adicionar ao Carrinho
        </button>
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
