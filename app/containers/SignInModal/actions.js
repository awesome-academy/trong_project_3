import { SIGN_UP,SIGN_UP_SUCCESS,SIGN_UP_ERROR ,STATUS_FALSE,SIGN_IN,SIGN_IN_SUCCESS,SIGN_IN_ERROR} from "./constans";

export const onSignUp = (user) =>{
  return{
    type:SIGN_UP,
    user
  }
}
export const onSignUpSuccess = () =>{
  return{
    type:SIGN_UP_SUCCESS
  }
}
export const onSignUpError = error =>{
  return{
    type: SIGN_UP_ERROR,
    error
  }
}
export const onStatusFalse = () =>{
  return{
    type:STATUS_FALSE,
  }
}
export const onSignIn = (user) =>{
  return{
    type:SIGN_IN,
    user
  }
}
export const onSignInSuccess = () =>{
  return{
    type:SIGN_IN_SUCCESS
  }
}
export const onSignInError = error =>{
  return{
    type: SIGN_IN_ERROR,
    error
  }
}
