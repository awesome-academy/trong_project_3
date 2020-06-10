import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectRouter = state => state.router ;
const selectMovie = state => state.movieDetail || initialState;

const makeSelectPath = ()=>
  createSelector( selectRouter , x => x.location.pathname );
const makeSelectMovie = ()=>
  createSelector( selectMovie , x => x.data );

export {
  makeSelectPath,
  makeSelectMovie
}
