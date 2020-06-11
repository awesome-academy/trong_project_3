import { CHECK_LOGIN,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT} from "./constans";

export const onLogin = () =>{
  return{
    type:CHECK_LOGIN,
  }
}
export const onLoginSuccess = (user) =>{
  return{
    type:LOGIN_SUCCESS,
    user
  }
}
export const onLoginFail = () =>{
  return{
    type: LOGIN_FAIL,
  }
}
export const onLogOut = () =>{
  return{
    type: LOGOUT,
  }
}
