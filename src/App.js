import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductCart from './pages/ProductCart';
import './App.css';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        {/* <Route exact path="/cart" component={ Cart } /> */}
        <Route exact path="/product-details/:id" component={ ProductDetails } />
        <Route exact path="/product-cart" component={ ProductCart } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
