import { takeLatest,call,put } from "redux-saga/effects";
import request from "utils/request";
import {SIGN_UP,SIGN_IN} from "./constans";
import {onSignUpError,onSignUpSuccess,onSignInSuccess,onSignInError} from "./actions";
import { EMAIL_EXIT,EMAIL_PASSOWRD_INCORRECT } from "../../common/form/message";
import { onLoginSuccess } from "../User/actions";
const host1 = 'http://localhost:3000/user';

function* checkSignUp({user}) {
  try {
    const url = `${host1}?Email=${user.Email}`
    const data =  yield call(request,url);
    if(data.length === 0){
      const result = {...user};
      delete result.ConfirmPassword;
      yield call(request,host1,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(result)
      })
      yield put(onSignUpSuccess());
    }else{
      yield put(onSignUpError(EMAIL_EXIT))
    }
  } catch (error) {
    yield put(onSignUpError(error));
  }
}
function* checkSignIn({user}) {
  try {
    const url = `${host1}?Email=${user.Email}&Password=${user.Password}`
    const data =  yield call(request,url);
    if(data.length > 0){
      yield put(onSignInSuccess());
      localStorage.setItem("user",JSON.stringify(data));
      yield put(onLoginSuccess(data));
    }else{
      yield put(onSignInError(EMAIL_PASSOWRD_INCORRECT));
    }
  } catch (error) {
    yield put(onSignInError(error));
  }
}
export default function* () {
  yield takeLatest(SIGN_UP,checkSignUp);
  yield takeLatest(SIGN_IN,checkSignIn);
}
