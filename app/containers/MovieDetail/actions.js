import {FETCH_MOVIE_DETAIL,FETCH_MOVIE_DETAIL_SUCCESS,FETCH_MOVIE_DETAIL_ERROR } from "./constans";

export const fetchMovieDetail = id =>{
  return{
    type:FETCH_MOVIE_DETAIL,
    id
  }
}
export const fetchMovieDetailSuccess = movie =>{
  return{
    type:FETCH_MOVIE_DETAIL_SUCCESS,
    movie
  }
}
export const fetchMovieDetailError = () =>{
  return{
    type:FETCH_MOVIE_DETAIL,
  }
}
