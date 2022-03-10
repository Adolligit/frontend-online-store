import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
// import {  } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      contentProduct: [],
      loading: false,
    };
  }

  // inputChange = ({ target }) => {
  //   const { name } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // buttonSearch = async () => {
  //   this.setState({
  //     loading: true,
  //   }, async () => {
  //     const categories = await ;
  //     this.setState({
  //       // conteudo da pesquisa
  //       loading: false,
  //     });
  //   });
  // }

  render() {
    return (
      <>
        <div>Home</div>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          // value={ search }
          // onChange={ this.inputChange }
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
      </>
    );
  }
}

export default Home;
