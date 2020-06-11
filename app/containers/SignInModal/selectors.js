import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectRouter = state => state.router;
const selectFormModal = state => state.formModal ||initialState;
const makeSelectAction = ()=>
  createSelector( selectRouter , x => x.location.search );
const makeSelectFormModal = ()=>
  createSelector( selectFormModal , x => x);


export {
  makeSelectAction,
  makeSelectFormModal
}
