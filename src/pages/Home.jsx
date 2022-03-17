import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from '../components/AddCartButton';
import Card from '../components/Card';
import CategoriesList from '../components/CategoriesList';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      contentProduct: [],
      cartSize: [],
      // quantity: 0,
      // loading: false,
    };
  }

  componentDidMount() {
    if (!localStorage.savedProducts) localStorage.savedProducts = JSON.stringify([]);
    this.getSavedProducts();
  }

  // componentDidUpdate() {
  //   // this.getSavedProducts();
  //   // this.handleUpdateSize();
  // }

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  // getSavedProducts = async () => {
  //   this.setState({
  //     cartSize: JSON.parse(localStorage.savedProducts),
  //   });
  // }

  getSavedProducts = async () => {
    // this.setState({
    //   quantity: JSON.parse(localStorage.getItem('totalQuantity')),
    // });

    this.setState({
      cartSize: JSON.parse(localStorage.savedProducts),
    });

    // console.log(this.state.cartSize);
  }

  searchProduct = async (categorieId) => {
    const { search } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(categorieId, search);

    this.setState({ contentProduct: results });
  }

  render() {
    const { search, contentProduct, cartSize } = this.state;

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
        <br />
        <span
          data-testid="shopping-cart-size"
          className="cart-size-span"
        >
          Quantidade de produtos:
          {' '}
          { cartSize.length }
        </span>
        <CategoriesList searchProduct={ this.searchProduct } />
        {
          contentProduct.map((product) => (
            <React.Fragment
              key={ product.id }
            >
              <Card
                product={ product }
              />
              <AddCartButton
                product={ product }
                cartSize={ cartSize }
                testId="product-add-to-cart"
                cartSizeUpdate={ this.getSavedProducts }
              />
            </React.Fragment>
          ))
        }
      </>
    );
  }
}

export default Home;
