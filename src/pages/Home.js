import React, { Component } from 'react';

// Importar componentes propios
import SearchForm from '../components/SearchForm';
import ListMovies from '../components/ListMovies';

class Home extends Component {
  state = { listMovies: []};

  _updateListMovies = ( items ) =>{
    console.log('Actualiza el listado de películas desde SearchForm: ', items)
    this.setState({ listMovies: items });
  }

  render() {
    return (
      <div>        
        <SearchForm onGetMovies={this._updateListMovies} />
  
        <ListMovies listMovies={ this.state.listMovies } />
  
      </div>

    );
  }
}

export default Home;
