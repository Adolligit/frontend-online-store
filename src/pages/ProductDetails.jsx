import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import AddCartButton from '../components/AddCartButton';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      contentProduct: [],
      emailComment: '',
      comments: '',
      rating: '',
      evaluations: [],
      // cartSize: [],
      quantity: 0,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.searchProductById(id);
    const recover = JSON.parse(localStorage.getItem('evaluations'));
    const recover2 = JSON.parse(localStorage.getItem('email'));
    const recover3 = JSON.parse(localStorage.getItem('rating'));
    const recover4 = JSON.parse(localStorage.getItem('comment'));
    if (recover !== null) {
      this.setState({
        evaluations: recover,
      });
    }
    this.setState({
      emailComment: recover2,
      comments: recover4,
      rating: recover3,
    });

    this.getSavedProducts();
  }

  componentDidUpdate() {
    const { evaluations, emailComment, comments, rating } = this.state;
    if (evaluations.length !== 0) {
      localStorage.setItem('evaluations', JSON.stringify(evaluations));
    }
    localStorage.setItem('email', JSON.stringify(emailComment));
    localStorage.setItem('comment', JSON.stringify(comments));
    localStorage.setItem('rating', JSON.stringify(rating));
  }

  // getSavedProducts = async () => {
  //   this.setState({
  //     cartSize: JSON.parse(localStorage.savedProducts),
  //   });
  // }

  getSavedProducts = async () => {
    this.setState({
      quantity: JSON.parse(localStorage.getItem('totalQuantity')),
    });

    // console.log(this.state.cartSize);
  }

  handleForm = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { emailComment, comments, rating } = this.state;
    const { match: { params: { id } } } = this.props;
    const evaluation = {
      id,
      emailComment,
      comments,
      rating,
    };
    this.setState((prevState) => ({
      evaluations: [...prevState.evaluations, evaluation],
      emailComment: '',
      comments: '',
      rating: '',
    }));
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
    const { contentProduct, emailComment, comments,
      evaluations, rating, quantity } = this.state;
    const { title, thumbnail, price, condition, warranty } = contentProduct;
    const { match: { params: { id } } } = this.props;
    return (
      <>
        <Link
          to="/product-cart"
          className="btn btn-primary"
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Carrinho de compras
          </button>
        </Link>
        <br />
        <span data-testid="shopping-cart-size">
          Quantidade de produtos:
          {' '}
          { quantity }
        </span>
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
          <AddCartButton
            product={ contentProduct }
            testId="product-detail-add-to-cart"
          />
        </section>
        <section>
          <form>
            <label htmlFor="commentEmail">
              Email:
              <input
                data-testid="product-detail-email"
                name="emailComment"
                value={ emailComment }
                id="commentEmail"
                onChange={ this.handleForm }
              />
            </label>
            <label htmlFor="rating">
              Avaliação:
              <input
                type="radio"
                name="rating"
                value="1"
                data-testid="1-rating"
                onChange={ this.handleForm }
                checked={ rating === '1' }
              />
              <input
                type="radio"
                name="rating"
                value="2"
                data-testid="2-rating"
                onChange={ this.handleForm }
                checked={ rating === '2' }
              />
              <input
                type="radio"
                name="rating"
                value="3"
                data-testid="3-rating"
                onChange={ this.handleForm }
                checked={ rating === '3' }
              />
              <input
                type="radio"
                name="rating"
                value="4"
                data-testid="4-rating"
                onChange={ this.handleForm }
                checked={ rating === '4' }
              />
              <input
                type="radio"
                name="rating"
                value="5"
                data-testid="5-rating"
                onChange={ this.handleForm }
                checked={ rating === '5' }
              />
            </label>
            <label htmlFor="commentArea">
              <textarea
                data-testid="product-detail-evaluation"
                name="comments"
                value={ comments }
                onChange={ this.handleForm }
              />
            </label>
            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.handleClick }
            >
              Avaliar
            </button>
          </form>
        </section>
        <section>
          {
            evaluations.filter((evale) => evale.id === id)
              .map((evaluation, index) => (
                <div key={ index }>
                  <p>{evaluation.emailComment}</p>
                  <p>{evaluation.comments}</p>
                  <p>{evaluation.rating}</p>
                </div>
              ))
          }
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
