import React,{useRef} from 'react';
import { FormattedMessage } from "react-intl";
import Header from "./Header";
import Cotainer from "components/Container";
import Brand from "./Brand";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import userImg from "../../images/user.png";
import message from "./message";
import { injectIntl } from "react-intl";

const index = ({
  intl,
  user,
  logout,
  children
}) => {
  const scope='boilerplate.containers.header';
  const toggleNav = useRef();
  const onHandleCick = () =>{
    toggleNav.current.classList.toggle('active');
  }
  const onShowModal = () =>{
    document.getElementById('SignInForm').classList.add('active');
  }
  return (
    <Header>
        <Cotainer>
          <Brand/>
          <Nav   ref={toggleNav} />
          <div className="left__header">
            <div className="left__children">
                {children}
            </div>
            {
              !user.status ?
              <div className="left__header-link">
              <Link to="?action=login" onClick={onShowModal} >
                  <FormattedMessage {...message.SignIn} />
              </Link>
              <Link to="?action=signup" onClick={onShowModal} >
                <FormattedMessage {...message.SignUp} />
              </Link>
            </div>
            :
            <div className="left__header-user">
                <div className="left__header-img">
                  <img src={userImg} alt="" />
                </div>
                <div className="left__header-dropdown">
                  <Link to="/">
                    {intl.messages[`${scope}.profile`]}
                  </Link>
                  <Link to="/">
                    {intl.messages[`${scope}.order`]}
                  </Link>
                  <button onClick={()=> logout()}>
                    {intl.messages[`${scope}.logout`]}
                  </button>
                </div>
            </div>
            }
            <i className="fas fa-bars" onClick={onHandleCick}></i>
          </div>
        </Cotainer>
    </Header>
  );
}

export default injectIntl(index);
