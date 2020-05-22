import React, {Component} from 'react';
import { Title } from '../components/Title';
import API_KEY from '../config/api';

import { connect } from 'react-redux';

import Counter from '../components/Contador';

class Detail extends Component {
  state = {movie: {}};

  _getMovieDetailsById({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res)=> res.json())
      .then((movie)=>{
        console.log('Detalle de la película ===> ', movie)
        this.setState({movie});
      })
      .catch(e=>console.log('An error occur: ', e));
  }

  componentDidMount() {
    const {movieId} = this.props;
    this._getMovieDetailsById( {id: movieId});
  }


  render(){
    
    const  {Title:MovieTitle, Poster, Metascore, Plot, Year, Actors}= this.state.movie;
  return(
    <div>
      <Counter></Counter>
      <Title content={MovieTitle} type="is-3"/>
      <img src={Poster} alt={Title} />
      <Title content={Actors} type="is-4" />
      <span>{Metascore} {this.props.movieId} <strong>{this.props.contador}</strong></span>
      <p>{Plot}</p>
    </div>)
  }
}


export default Detail;
