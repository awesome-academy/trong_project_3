import React,{useState,useEffect} from 'react';
import checkForm from "../../common/form/checkForm";
import Form from "components/Form";

export default function SignInForm({
  intl,
  formModal,
  scope,
  signIn,
  onCloseModal,
  setStatus
}) {
  const [loginForm, setLoginForm] = useState({
    Email:"",
    Password:""
  });
  const [errorSignIn, setErrorSignIn] = useState("");
  const onLoginFormChange = e =>{
    const target = e.target;
    setLoginForm({
      ...loginForm,
      [target.name]:target.value
    })
  }
  useEffect(() => {
    if(formModal.errorSignIn){
      setErrorSignIn(formModal.message);
    }else if(formModal.status){
      setErrorSignIn("");
      setStatus();
      onCloseModal();
    }
  }, [formModal.errorSignIn,formModal.status]);
  const onHandleSubmitLoginForm  = (e) =>{
    e.preventDefault();
    const check = checkForm(loginForm)
    if(check !== true){
      setErrorSignIn(check);
    }else{
      signIn({...loginForm});
      setErrorSignIn("");
    }
  }
  return (
    <>
      <Form action={onHandleSubmitLoginForm}>
        <input type="text" name="Email" placeholder = {intl.messages[`${scope}.Email`]} value={loginForm.Email} onChange={onLoginFormChange}  />
        <input type="password" name="Password" placeholder = {intl.messages[`${scope}.Password`]} value={loginForm.Passowrd} onChange={onLoginFormChange} />
        <p>{errorSignIn ==="" ?"":"! "+errorSignIn}</p>
        <input type="submit" value={ intl.messages[`${scope}.SignIn`]}/>
      </Form>
    </>
  )
}
