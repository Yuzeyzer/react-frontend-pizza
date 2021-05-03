import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Cart from './pages/cart';
import './scss/app.scss';
import { Route } from 'react-router-dom';
import SideBar from './components/sideBar';
import Admin from './pages/admin';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <div className='wrapper'>
        {/* <Header /> */}
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/admin' component={Admin} />
      </div>
    </div>
  );
}

export default App;
