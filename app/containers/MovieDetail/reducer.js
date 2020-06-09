import { produce } from "immer";
import *as types from "./constans";
export const initialState = {
  loading:false,
  data:{
    adult: false,
    genres:[],
    id: 419704,
    original_title: "",
    overview: "",
    poster_path: "",
    production_countries:[],
    release_date: "",
    runtime: 0,
    title: "",
    video: [],
    vote_average: 0,
    vote_count: 0,
    key:"",
  },
  error:false
}
const reducer =  (state = initialState, action) =>
  produce( state , draff =>{
      switch (action.type) {
        case types.FETCH_MOVIE_DETAIL:
            draff.loading=true;
            draff.error=false;
          break;
        case types.FETCH_MOVIE_DETAIL_SUCCESS:
          draff.loading=false;
          draff.error=false
          draff.data=action.movie;
          break;
        case types.FETCH_MOVIE_DETAIL_ERROR:
          draff.loading=false;
          draff.error=true;
          break;
        default:
          break;
      }
  } )

export default reducer;
