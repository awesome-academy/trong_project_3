import { FETCH_HOT_MOVIE,FETCH_HOT_MOVIE_ERROR,FETCH_HOT_MOVIE_SUCCESS,FETCH_HOT_CURRENTMOVIE,FETCH_HOT_CURRENTMOVIE_ERROR,FETCH_HOT_CURRENTMOVIE_SUCCESS,FETCH_HOT_UPCOMMINGMOVIE,FETCH_HOT_UPCOMMINGMOVIE_ERROR,FETCH_HOT_UPCOMMINGMOVIE_SUCCESS } from "./constans";

export const fetchHotMovie = () =>{
  return{
    type:FETCH_HOT_MOVIE,
  }
}
export const fetchHotMovieSuccess = data =>{
  return{
    type:FETCH_HOT_MOVIE_SUCCESS,
    data
  }
}
export const fetchHotMovieError = error =>{
  return{
    type:FETCH_HOT_MOVIE_ERROR,
    error
  }
}
export const fetchCurrentMovie = () =>{
  return{
    type:FETCH_HOT_CURRENTMOVIE,
  }
}
export const fetchCurrentMovieSuccess = data =>{
  return{
    type:FETCH_HOT_CURRENTMOVIE_SUCCESS,
    data
  }
}
export const fetchCurrentMovieError = error =>{
  return{
    type:FETCH_HOT_CURRENTMOVIE_ERROR,
    error
  }
}
export const fetchUpComingMovie = () =>{
  return{
    type:FETCH_HOT_UPCOMMINGMOVIE,
  }
}
export const fetchUpComingMovieSuccess = data =>{
  return{
    type:FETCH_HOT_UPCOMMINGMOVIE_SUCCESS,
    data
  }
}
export const fetchUpComingMovieError = error =>{
  return{
    type:FETCH_HOT_UPCOMMINGMOVIE_ERROR,
    error
  }
}
