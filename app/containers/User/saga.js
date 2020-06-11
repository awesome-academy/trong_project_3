import { takeLatest,put } from "redux-saga/effects";
import {CHECK_LOGIN,LOGOUT} from "./constans";
import {onLoginFail,onLoginSuccess} from "./actions";

function* checkLogin() {
  try {
    const user = localStorage.getItem("user");
    if(typeof user === undefined){
      yield put(onLoginFail());
    }else if(user === ""){
      yield put(onLoginFail());
    }else{
      yield put(onLoginSuccess(JSON.parse(user)));
    }
  } catch (error) {
  }
}
function* setLogout() {
  localStorage.setItem("user","");
  yield put(onLoginFail());
}
export default function* () {
  yield takeLatest(CHECK_LOGIN,checkLogin);
  yield takeLatest(LOGOUT,setLogout);
}
