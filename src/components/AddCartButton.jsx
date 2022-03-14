import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends Component {
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
