import React, { Component } from 'react';
//Components

import API_KEY from '../config/api';

class SearchForm extends Component {

  state = { inputMovie: ''};

  _onChangeHandle = (e) => {
    this.setState({ inputMovie: e.target.value})
  }

  _onHandleSubmit = (e)=>{
    e.preventDefault();
    let { inputMovie } = this.state;
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`;
    

    fetch( url)
      .then( (res) => {
        return res.json();
      })
      .then( (results)=>{
        this.props.onGetMovies(results.Search);
      })
      .catch((e)=>{
        console.log('Algo ha salido mal: ', e.message);
      })
      
  }

  render() {

    return (
      <div className="SearchForm-wrapper">
          <form onSubmit={this._onHandleSubmit}>
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this._onChangeHandle}
                  className="input"
                  type="text"
                  placeholder="Buscar película..."
                  ></input>
              </div>
              <div className="control">
                <button className="button is-info">Buscar</button>
              </div>
            </div>
          </form>
          
        </div>
    )
  }

};

export default SearchForm;