import React, { Component } from 'react';
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
            >
              { name }
            </button>
          ))
        }
      </header>
    );
  }
}

export default CategoriesList;
