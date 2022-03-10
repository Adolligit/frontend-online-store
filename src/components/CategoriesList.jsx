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
    this.setState({
      listCategories: list,
    });
  }

  render() {
    const { listCategories } = this.state;
    const { idCat } = this.props;
    return (
      <header>
        {listCategories.map(({ id, name }) => (
          <button
            key={ id }
            data-testid={ idCat }
            type="button"
          >
            { name }
          </button>))}
      </header>
    );
  }
}

CategoriesList.propTypes = {
  idCat: PropTypes.string.isRequired,
};
export default CategoriesList;