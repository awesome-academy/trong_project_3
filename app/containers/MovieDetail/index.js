import React,{memo,useEffect} from 'react';
import { createStructuredSelector } from "reselect";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchMovieDetail } from "./actions";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import { makeSelectPath,makeSelectMovie } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Wrapper from "./Wrapper";
import { hostImg } from "utils/host";
import Container  from "components/Container";
import Ratting from "components/Ratting";
import message from "./message";

const key="movieDetail"
const index = ({
  getMovie,
  path,
  movie
}) => {
  useInjectReducer({key,reducer});
  useInjectSaga({key,saga});
  useEffect(() => {
    window.scrollTo(0, 0);
    const array =  path.split("/");
    if(array.length >1){
      const  item = array[array.length -1];
      if(item){
        getMovie(item);
      }
    }

  }, [path])
  return (
    <Wrapper>
      <Container>
        <div className="movie">
          <div className="movie__box">
            <div className="movie__img">
              <img src={movie.poster_path === "" ? "":`${hostImg}${movie.poster_path}`} />
            </div>
            <div className="movie__infor">
              <h1> {movie.title} </h1>
              <div className="movie__infor-star">
                <span>
                  {movie.vote_average.toFixed(1)}
                </span>
                {Ratting(movie.vote_average)}
                <span> {movie.vote_count}
                  <FormattedMessage {...message.reviews} />
                </span>
              </div>
              <p>
                <FormattedMessage {...message.movieDuration} />
                : <span> {movie.runtime} <FormattedMessage {...message.minutes} /> </span>
              </p>
              <p>
                <FormattedMessage {...message.type} />
                : <span> {movie.genres.map(x => x.name).toString()}  </span>
              </p>
              <p>
                <FormattedMessage {...message.country} />
                : <span> {movie.production_countries.map(x => x.name).toString()}  </span>
              </p>
              <p>
                <FormattedMessage {...message.date} />
                : <span> {movie.release_date}  </span>
              </p>
              <Link to="/">
                <FormattedMessage {...message.movieSchedule} />
              </Link>
            </div>
          </div>
          <div className="movie__description">
            <h1>
              <FormattedMessage {...message.movieContent} />
            </h1>
            <p>{movie.overview}</p>
          </div>
          <div className="movie__description">
            <h1>
              <FormattedMessage {...message.trailer} />
            </h1>
            <iframe src={movie.key === "" ? "#":`https://www.youtube.com/embed/${movie.video.key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
const mapDispatchToProps = (dispatch ) => {
  return {
    getMovie: id => {
      dispatch(fetchMovieDetail(id))
    }
  }
}
const mapStateToProps = createStructuredSelector({
  path:makeSelectPath(),
  movie:makeSelectMovie()
})
const withConnect =  connect(mapStateToProps,mapDispatchToProps);
export default compose(withConnect,memo)(index);
