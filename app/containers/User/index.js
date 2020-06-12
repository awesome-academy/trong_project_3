import React,{memo,useEffect} from 'react'
import saga from "./saga";
import { compose } from "redux";
import { connect } from "react-redux";
import { onLogin } from "./actions";
import { useInjectSaga } from "utils/injectSaga";

const key="user"
function index({
  checkLogin
}) {
  useInjectSaga({key,saga})
  useEffect(() => {
    checkLogin();
  }, [checkLogin]);
  return (
    <>
    </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => {
      dispatch(onLogin())
    }
  }
}
const withConnect = connect( null,mapDispatchToProps) ;
export default compose(withConnect,memo)(index);
