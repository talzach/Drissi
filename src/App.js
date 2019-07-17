import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import useGlobal from './store';
import Home from './components/Home';
import Navigator from './components/Navigator';

function App() {
  const [globalState, globalActions] = useGlobal();
  globalActions.product.getAll();

  return (
    <div className="App">
      <Router>
        <Navigator />
        <Home />
        <Route path="/" exact component={Home} />
        <Route path="/catalog/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
