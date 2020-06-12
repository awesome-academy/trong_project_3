import React,{memo} from 'react';
import { FormattedMessage } from "react-intl";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { NavLink, Link } from "react-router-dom";
import message from "./message";
import { makeSelectAction,makeSelectFormModal } from "./selectors";
import { injectIntl, } from "react-intl";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import reducer from "./reducer";
import saga from "./saga";
import { onSignUp,onStatusFalse,onSignIn } from "./actions";
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Modal,{closeNotification} from "components/Modal";

const key = "formModal"
const index = ({
  action,
  intl,
  signUp,
  formModal,
  setStatus,
  signIn
}) => {
  useInjectReducer({key,reducer});
  useInjectSaga({key,saga})
  const scope = 'boilerplate.containers.SignInMoDal';
  const onCloseModal = ()=>{
    document.getElementById('SignInForm').classList.remove('active')
  }
  return (
    <>
      <div id ="SignInForm" className="modal-signin" onClick={onCloseModal}>
        <div className="modal-signin__content" onClick={ e => e.stopPropagation()}>
          <div className="modal-signin__close" onClick={onCloseModal}>
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-signin__action">
            <NavLink to="?action=login" className = { action === "?action=login" ? "active" : "" }>
                <FormattedMessage {...message.SignIn} />
            </NavLink>
            <p>/</p>
            <NavLink to="?action=signup" className = { action === "?action=signup" ? "active" : "" }>
              <FormattedMessage {...message.SignUp} />
            </NavLink>
          </div>
          <div className="modal-signin__form">
              {
                action === "?action=signup" ?<SignUpForm intl={intl} signUp={signUp} formModal={formModal} scope={scope} setStatus={  setStatus}/> : <SignInForm intl={intl} signIn={signIn} setStatus={setStatus}  formModal={formModal} scope={scope} onCloseModal={onCloseModal} />
              }
          </div>
        </div>
      </div>
      <Modal>
        <h1 className="modal-signin__title">
          <FormattedMessage {...message.SignUpSuccess}/>
        </h1>
        <div className="modal-signin__button">
          <Link to="?action=login" className="modal-signin__login-now" onClick={()=> closeNotification()}>
            <FormattedMessage {...message.LoginNow} />
          </Link>
          <button onClick = {()=> { onCloseModal(); closeNotification(); }}>
            <FormattedMessage {...message.No} />
          </button>
        </div>
      </Modal>
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  action:makeSelectAction(),
  formModal:makeSelectFormModal()
})
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: user => {
      dispatch(onSignUp(user));
    },
    signIn: user => {
      dispatch(onSignIn(user));
    },
    setStatus: () =>{
      dispatch(onStatusFalse());
    }
  }
}
const withConnect = connect( mapStateToProps,mapDispatchToProps) ;
export default compose(injectIntl,withConnect,memo)(index);
