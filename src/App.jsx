import React from 'react';
import { Link,Route} from 'react-router-dom';
import {Router} from 'react-router';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Link to='/' />
      </Router>
    </div>
  );
};

export default App;