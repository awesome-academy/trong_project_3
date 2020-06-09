import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectMovie = state => state.home || initialState;

const makeSelectTopMovie = ()=>
  createSelector( selectMovie , movies => movies.hotMovie.slice(0,5) );
const makeSelectCurrentMovie = ()=>
  createSelector( selectMovie , movies => movies.currentMovie );
const makeSelectUpcomingMovie = ()=>
  createSelector( selectMovie , movies => movies.upcomingMovie );

export {
  makeSelectTopMovie,
  makeSelectCurrentMovie,
  makeSelectUpcomingMovie
}
