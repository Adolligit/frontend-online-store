import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';

class Home extends Component {
  render() {
    return (
      <header>
        <div>Home</div>
        <input
          type="text"
          name="search"
        />
        <Link to="/cart" className="btn btn-primary" data-testid="shopping-cart-button">
          <button
            type="button"
          >
            Carrinho de compras
          </button>
        </Link>

        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CategoriesList idCat="category" />
      </header>
    );
  }
}

export default Home;