import React, { Component } from 'react';
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
