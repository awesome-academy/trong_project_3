import React,{memo,useEffect,useState,useMemo,useCallback} from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import bg from "../../images/bgs1.jpg";
import Container from "components/Container";
import message from "./message";
import { FormattedMessage } from "react-intl";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import saga from "./saga";
import reducer from "./reducer";
import PropTypes from "prop-types";
import {  fetchHotMovie,fetchCurrentMovie, fetchUpComingMovie } from "./actions";
import { makeSelectTopMovie,makeSelectCurrentMovie,makeSelectUpcomingMovie } from "./selectors";
import {hostImg} from "utils/host";
import SubMenu from "components/SubMenu";
import ListMovie from "components/ListMovie";

const key="home"
const index = ({
  getHotMovie ,
  topMovies,
  getCurrentMovie,
  getUpcomingMovie,
  currentMovie,
  upcomingMovie
}) => {
  useInjectReducer({key,reducer})
  useInjectSaga({key,saga})
  const [listMovie, setListMovie] = useState([]);
  const [check, setCheck] = useState(0);
  useEffect(() => {
    getHotMovie();
    getCurrentMovie();
    getUpcomingMovie();
  }, [])
  useEffect(() => {
    if(listMovie.length === 0 ){
      setListMovie(currentMovie);
    }
  }, [currentMovie,message])
  const showImage = () =>{
    return topMovies.map( item =>
      <div key={item.id} className="home-page__img-item">
        <img  src={hostImg+item.poster_path} alt={item.overview}  />
      </div>
    )
  }
  const showCurrentMovie = () =>{
    setListMovie(currentMovie);
    setCheck(0);
  }
  const showUpComingtMovie = () =>{
    setListMovie(upcomingMovie);
    setCheck(1);
  }
  // const showCurrentMovie = useCallback(
  //   () => {
  //     setListMovie(currentMovie);
  //   },
  //   [currentMovie],
  // )
  // const showUpComingtMovie = useCallback(
  //   () => {
  //     setListMovie(upcomingMovie);
  //   },
  //   [upcomingMovie],
  // )


  return (
    <>
      <section className="home-page" style={{
        backgroundImage: `url(${bg})`,
      }}>
        <Container>
          <div className="home-page__box">
            <div className="home-page__introduce">
              <h2>
                <FormattedMessage {...message.what}/>
                <FormattedMessage {...message.today}/>
              </h2>
              <p className="home-page__introduce-subtitle">
                <FormattedMessage {...message.atMV}/>
              </p>
              <p className="home-page__introduce-text">
                <FormattedMessage {...message.all}/>
              </p>
              <p className="home-page__introduce-btn">
                <a href="/">
                  <FormattedMessage {...message.discover}/>
                </a>
              </p>
            </div>
            <div className="home-page__img">
                {showImage()}
            </div>
          </div>
        </Container>
      </section>
      <section className="list-movie">
        <Container>
          <SubMenu
          listMessage={[
            {
              message:{...message.currentMovie},
              action:showCurrentMovie
            },
            {
              message:{...message.upcomingMovie},
              action:showUpComingtMovie
            }
          ]}
          check={check}
          />
          <ListMovie listMovie={listMovie} />
        </Container>
      </section>
    </>
  );
}
index.propTypes = {
  getHotMovie : PropTypes.func,
  getCurrentMovie : PropTypes.func,
  getUpcomingMovie : PropTypes.func,
}
const mapStateToProps = createStructuredSelector({
  topMovies:makeSelectTopMovie(),
  currentMovie:makeSelectCurrentMovie(),
  upcomingMovie:makeSelectUpcomingMovie()
})
const mapDispatchToProps = (dispatch) => {
  return {
    getHotMovie: () => {
      dispatch(fetchHotMovie())
    },
    getCurrentMovie: () => {
      dispatch(fetchCurrentMovie())
    },
    getUpcomingMovie: () => {
      dispatch(fetchUpComingMovie())
    }
  }
}
const withConnect = connect(mapStateToProps,mapDispatchToProps);
export default compose( withConnect,memo)(index);
