import { produce } from "immer";
import { FETCH_HOT_MOVIE,FETCH_HOT_MOVIE_ERROR,FETCH_HOT_MOVIE_SUCCESS,FETCH_HOT_CURRENTMOVIE,FETCH_HOT_CURRENTMOVIE_ERROR,FETCH_HOT_CURRENTMOVIE_SUCCESS,FETCH_HOT_UPCOMMINGMOVIE,FETCH_HOT_UPCOMMINGMOVIE_ERROR,FETCH_HOT_UPCOMMINGMOVIE_SUCCESS } from "./constans";
export const initialState = {
  loading:false,
  hotMovie:[],
  currentMovie:[],
  upcomingMovie:[],
  error:false
}

const reducer =  (state = initialState, action) =>
  produce( state , draff =>{
      switch (action.type) {
        case FETCH_HOT_MOVIE:
            draff.loading = true;
            draff.error = false;
          break;
        case FETCH_HOT_MOVIE_SUCCESS:
          draff.hotMovie = action.data;
          draff.loading= false;
          break;
        case FETCH_HOT_MOVIE_ERROR:
          draff.error = true;
          draff.loading=false;
          case FETCH_HOT_CURRENTMOVIE:
            draff.loading = true;
            draff.error = false;
          break;
        case FETCH_HOT_CURRENTMOVIE_SUCCESS:
          draff.currentMovie = action.data;
          draff.loading= false;
          break;
        case FETCH_HOT_CURRENTMOVIE_ERROR:
          draff.error = true;
          draff.loading=false;
          case FETCH_HOT_UPCOMMINGMOVIE:
            draff.loading = true;
            draff.error = false;
          break;
        case FETCH_HOT_UPCOMMINGMOVIE_SUCCESS:
          draff.upcomingMovie = action.data;
          draff.loading= false;
          break;
        case FETCH_HOT_UPCOMMINGMOVIE_ERROR:
          draff.error = true;
          draff.loading=false;
        default:
          break;
      }

  } )

export default reducer;
