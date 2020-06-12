import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectUser = state => state.user || initialState;
const makeSelectUser = ()=>
  createSelector( selectUser , x => x );

export {
  makeSelectUser
}
