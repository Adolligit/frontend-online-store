import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CategoriesList from '../components/CategoriesList';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      contentProduct: [],
      // loading: false,
    };
  }

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  searchProduct = async (categorieId) => {
    // this.setState({ loading: true });
    const { search } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(categorieId, search);

    this.setState({ contentProduct: results });
  }

  render() {
    const { search, contentProduct } = this.state;

    return (
      <>
        <div>Home</div>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ search }
          onChange={ this.inputChange }
        />
        <Link
          to="/cart"
          className="btn btn-primary"
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Carrinho de compras
          </button>
        </Link>
        <button
          data-testid="query-button"
          type="button"
          name="btn"
          onClick={ this.searchProduct }
        >
          Pesquisar
        </button>
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CategoriesList searchProduct={ this.searchProduct } />
        {
          contentProduct.map((product) => (
            <Card
              key={ product.id }
              product={ product }
            />
          ))
        }
      </>
    );
  }
}

export default Home;
