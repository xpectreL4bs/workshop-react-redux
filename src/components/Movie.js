import React from 'react';
import {Link} from '@reach/router';

const Movies = ( props ) => {

  const {data} = props;

  const { Title, Year, Poster, imdbID:id } = data;

  return (
    <Link to={`/detail/${id}`} className="card" key={id}>
      <div className="media">
        <figure className="media-left is-64x64">
          <img 
            alt={Title}
            src={Poster}
            width="64"
            />
        </figure>

        <div className="media-content">
          <p className="title is-4">{Title}</p>
          <p className="subtitle is-6">{Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default Movies;
