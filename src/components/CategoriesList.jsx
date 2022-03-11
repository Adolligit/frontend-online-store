import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      listCategories: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = async () => {
    const list = await getCategories();

    this.setState({ listCategories: list });
  }

  clickOnCategory = async (categorieId) => {
    const { searchProduct } = this.props;

    searchProduct(categorieId);
  }

  render() {
    const { listCategories } = this.state;

    return (
      <header>
        {
          listCategories.map(({ id, name }) => (
            <button
              key={ id }
              data-testid="category"
              type="button"
              onClick={ () => this.clickOnCategory(id) }
            >
              { name }
            </button>
          ))
        }
      </header>
    );
  }
}

CategoriesList.propTypes = {
  searchProduct: PropTypes.func,
}.isRequired;

export default CategoriesList;
