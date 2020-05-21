import React from 'react';
import { Title } from './Title';
import Movie from './Movie';


const ListMovies = ( {listMovies} )=>{

  return (
    <div>
      <Title content="Resultados" type="is-2" modifier="subtitle"/>
        <div className="MoviesList">
          {listMovies.length === 0 ? 'No Hay Resultados'
              : listMovies.map( (movie)=>{
              return <Movie data={movie} />
            })
          }
        </div>
    </div>
  );
}

export default ListMovies;