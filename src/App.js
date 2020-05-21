import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import './App.css';

// import the pages
import Home from './pages/Home';
import Detail from './pages/Detail';

//import components
import {Title} from './components/Title';

import 'bulma/css/bulma.css';

class App extends Component {

  render () {

    return (
      <div className="App">

        <Link to="/">
          <Title content="Buscar Películas" type="is-1" modifier="title"/>
        </Link>
        <Router>
          <Home path="/" />
          <Detail path="/detail/:movieId" /> 
        </Router>
        
      </div>
    );
  }

}

export default App;
