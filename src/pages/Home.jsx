import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CategoriesList from '../components/CategoriesList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      categorieId: '',
      contentProduct: [],
      // loading: false,
    };
  }

  inputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonSearch = async () => {
    const { search, categorieId } = this.state;
    // this.setState({ loading: true });
    const products = await getProductsFromCategoryAndQuery(categorieId, search);

    this.setState({ contentProduct: products.results });
    // console.log(products.results);
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
          onClick={ this.buttonSearch }
        >
          Pesquisar
        </button>
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CategoriesList idCat="category" />
        {
          contentProduct.map(({ id, title, price, thumbnail }) => (
            <Card
              key={ id }
              image={ thumbnail }
              name={ title }
              price={ price }
            />))
        }
      </>
    );
  }
}

export default Home;
