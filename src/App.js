import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Cart from './pages/cart';
import './scss/app.scss';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

export default App;
