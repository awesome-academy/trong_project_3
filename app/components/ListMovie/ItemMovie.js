import React from 'react';
import { FormattedMessage } from "react-intl";
import message from "./message";
import Movie from "./Movie";
import { hostImg } from "utils/host";
import { Link } from "react-router-dom";

const ItemMovie = ({movie}) => {
  return (
    <Movie>
      <div className="movie-img">
        <img src={ hostImg+movie.poster_path} alt={movie.overview} />
        <p>
          <Link to={`/movie/${movie.id}`}>
            <FormattedMessage {...message.buyTicket} />
          </Link>
        </p>
      </div>
      <h2>
        {movie.title}
      </h2>
    </Movie>
  );
}

export default ItemMovie;
