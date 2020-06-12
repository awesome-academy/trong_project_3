import { produce } from "immer";
import *as types from "./constans";
export const initialState = {
  message:"",
  errorSignUp:false,
  status:false,
  errorSignIn:false,
}
const SignUp = (draff,message,error,status)=>{
  draff.message = message;
  draff.errorSignUp = error;
  draff.status=status;
}
const SignIn = (draff,message,error,status)=>{
  draff.message = message;
  draff.errorSignIn = error;
  draff.status=status;
}
const reducer =  (state = initialState, action) =>
  produce( state , draff =>{
      switch (action.type) {
        case types.SIGN_UP:
            SignUp(draff,"",false,false)
          break;
        case types.SIGN_UP_SUCCESS:
          SignUp(draff,"",false,true)
          break;
        case types.SIGN_UP_ERROR:
          SignUp(draff,action.error,true,false)
          break;
        case types.STATUS_FALSE:
          draff.status=false;
          break;
        case types.SIGN_IN:
          SignIn(draff,"",false,false);
          break;
        case types.SIGN_IN_SUCCESS:
          SignIn(draff,"",false,true);
          break;
        case types.SIGN_IN_ERROR:
          SignIn(draff,action.error,true,false);
          break;
        default:
          break;
      }
  } )

export default reducer;
