import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      // ufs: [],
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  /* handleClick = (event) => {
    event.preventDefault();
    const { emailComment, comments, rating } = this.state;
    const { match: { params: { id } } } = this.props;
    const evaluation = {
      id,
      emailComment,
      comments,
      rating,
    };
    this.setState((prevState) => ({
      evaluations: [...prevState.evaluations, evaluation],
      emailComment: '',
      comments: '',
      rating: '',
    }));
  } */

  render() {
    return (
      <>
        <section>
          <h1>Revise seus Produtos</h1>
          <span>Total:</span>
        </section>
        <h1>Informações do Comprador</h1>
        <input placeholder="Nome Completo" data-testid="checkout-fullname" />
        <input placeholder="CPF" data-testid="checkout-cpf" />
        <input placeholder="Email" data-testid="checkout-email" />
        <input placeholder="Telefone" data-testid="checkout-phone" />
        <input placeholder="CEP" data-testid="checkout-cep" />
        <input placeholder="Endereço" data-testid="checkout-address" />
        <input placeholder="Número" />
        <input placeholder="Complemento" />
        <input placeholder="Cidade" />
        <select>
          <option>SP</option>
        </select>
        <section>
          <h1>Método de Pagamento</h1>
        </section>
        <section>
          <label htmlFor="Boleto">
            Boleto
            <input
              type="radio"
              name="payment-method"
              value="boleto"
              onChange={ this.handleForm }
            />
          </label>
          <div>
            <p>Cartão</p>
            <label htmlFor="MasterCard">
              MasterCard
              <input
                type="radio"
                name="payment-method"
                value="card-master"
                onChange={ this.handleForm }
              />
            </label>
            <label htmlFor="Visa">
              Visa
              <input
                type="radio"
                name="payment-method"
                value="card-visa"
                onChange={ this.handleForm }
              />
            </label>
            <label htmlFor="Elo">
              Elo
              <input
                type="radio"
                name="payment-method"
                value="card-elo"
                onChange={ this.handleForm }
              />
            </label>
          </div>
        </section>
        <button type="button">Comprar</button>
      </>);
  }
}

Checkout.propTypes = {

};

export default Checkout;
