import { produce } from "immer";
import *as types from "./constans";
export const initialState = {
  status:false,
  data:{}
}
const reducer =  (state = initialState, action) =>
  produce( state , draff =>{
      switch (action.type) {
        case types.CHECK_LOGIN:
            draff.status=false;
          break;
        case types.LOGIN_SUCCESS:
          draff.status=true;
          draff.data=action.user
          break;
        case types.LOGIN_FAIL:
          draff.status=false;
          draff.data={};
        case types.LOGOUT:
          draff.status=false;
          draff.data={};
          break;
        default:
          break;
      }

  } )

export default reducer;
