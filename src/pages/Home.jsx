import React, { Component } from 'react';

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
      </header>
    );
  }
}

export default Home;
