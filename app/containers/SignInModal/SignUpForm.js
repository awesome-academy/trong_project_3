import React,{useState,useEffect} from 'react';
import *as ms from "../../common/form/message";
import checkForm from "../../common/form/checkForm";
import Form from "components/Form";
import {showNotification} from "components/Modal";

export default function SignUpForm({
  intl,
  signUp,
  formModal,
  scope,
  setStatus
}) {
  const [signUpForm, setSignUpForm] = useState({
    Email:"",
    Password:"",
    ConfirmPassword:"",
    Address:"",
    Phone:"",
    Name:"",
    Type:"user"
  });
  useEffect(() => {
    if(formModal.errorSignUp){
      setErrorSignUp(formModal.message);
    }else if(formModal.status){
      console.log("dsaaaaaas")
      setErrorSignUp("");
      showNotification();
      setStatus();
    }
  }, [formModal.errorSignUp,formModal.status]);
  const [errorSignUp, setErrorSignUp] = useState("");
  const onSignUpFormChange = e =>{
    const target = e.target;
    setSignUpForm({
      ...signUpForm,
      [target.name]:target.value
    })
  }
  const onHandleSubmitSignUpForm = (e) =>{
    e.preventDefault();
    const check = checkForm(signUpForm)
    if(check !== true){
      setErrorSignUp(check);
    }else if (signUpForm.Password !== signUpForm.ConfirmPassword){
      setErrorSignUp(ms.RE_PASSWORD);
    }else{
      signUp({...signUpForm});
      setErrorSignUp("");
    }
  }
  return (
    <>
      <Form action={onHandleSubmitSignUpForm}>
        <input type="text" name="Name" placeholder = {intl.messages[`${scope}.Name`]} value={signUpForm.Name} onChange={onSignUpFormChange}  />
        <input type="text" name="Phone" placeholder = {intl.messages[`${scope}.Phone`]} value={signUpForm.Phone} onChange={onSignUpFormChange} />
        <input type="text" name="Address" placeholder = {intl.messages[`${scope}.Address`]} value={signUpForm.Address} onChange={onSignUpFormChange} />
        <input type="text" name="Email" placeholder = {intl.messages[`${scope}.Email`]} value={signUpForm.Email} onChange={onSignUpFormChange} />
        <input type="password" name="Password" placeholder = {intl.messages[`${scope}.Password`]} value={signUpForm.Password} onChange={onSignUpFormChange} />
        <input type="password" name="ConfirmPassword" placeholder = {intl.messages[`${scope}.ConfirmPassword`]} value={signUpForm.ConfirmPassword} onChange={onSignUpFormChange} />
        <select name="Type" onChange={onSignUpFormChange} value={signUpForm.Type} >
            <option value="user" > {intl.messages[`${scope}.User`]} </option>
            <option value="guess" > {intl.messages[`${scope}.Guess`]}  </option>
        </select>
          <p>{errorSignUp ==="" ?"":"! "+errorSignUp}</p>
        <input type="submit" value={ intl.messages[`${scope}.SignIn`]}/>
      </Form>
    </>
  )
}
