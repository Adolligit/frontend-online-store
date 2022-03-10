import React, { Component } from 'react';
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

  inputChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonSearch = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const categories = await ;
      this.setState({
        // conteudo da pesquisa
        loading: false,
      });
    });
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ search }
          onChange={ this.inputChange }
        />
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
      </div>
    );
  }
}

export default Home;
