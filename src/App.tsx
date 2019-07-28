import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Navigator from './components/Navigator';
import { fetchProducts } from './store/product/actions';
import ProductPage from './components/ProductPage';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());

  return (
    <div className="App">
      <Router>
        <Navigator />
        <Route path="/" exact component={Home} />
        <Route path="/catalog/" component={Home} />
        <Route path="/product/:id" component={ProductPage} />
      </Router>
    </div>
  );
}

export default App;
