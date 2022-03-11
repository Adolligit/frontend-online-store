import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      contentProduct: [],
      // loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.searchProductById(id);
    // console.log(this.state.contentProduct);
  }

  searchProductById = async (productId) => {
    // this.setState({ loading: true });
    const results = await api.getProductsFromId(productId);

    this.setState({
      contentProduct: results,
      // loading: false });
    });
  }

  render() {
    const { contentProduct } = this.state;
    const { title, thumbnail, price, condition, warranty } = contentProduct;
    return (
      <>
        <h1 data-testid="product-detail-name">
          { title }
          {' '}
          {`R$ ${price}`}
        </h1>
        <img src={ thumbnail } alt="" />
        <section>
          <h3>Especificações Técnicas</h3>
          <ol>
            <li>
              Condição do produto:
              {' '}
              {condition}
            </li>
            <li>
              {' '}
              {warranty}
            </li>
            <li>
              Quantidade vendida:
              {' '}
              {contentProduct.sold_quantity}
            </li>
          </ol>
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
