import React, { useState } from 'react';
import LoginCss from '../Css/LoginPageCss.module.css';



export default function LoginPage() {

  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const errorMsg = {
    email: 'Please enter a valid email',
    password: 'Password cannot be blank'
  }

  const emailChangeHandler = (e) =>{
    console.log(e.target.value);
    let x = e.target.value;
    let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
    if(x.match(pattern)){
      setCheckEmail(true);
      setErrorEmail(false);
    }
    else{
      setCheckEmail(false);
    }
  }

  const passwordChangeHandler = (e) =>{
    let x = e.target.value;
    let y = x.trim();
    if(y !== ''){
      setCheckPassword(true);
      setErrorPassword(false);
    }else{
      setCheckPassword(false);
    }
  }

  const onSubmitHandler = (e) => {
    if(!checkEmail){
      setErrorEmail(true);
    }
    if(!checkPassword){
      setErrorPassword(true);
    }
    
    e.preventDefault();
  }


  // console.log(checkEmail);
  return (
    <div className={LoginCss.container}>
    <form action='/dashboard' method='POST' className={LoginCss.login}>
      <div className={LoginCss.email}>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={emailChangeHandler}  className={checkEmail ? LoginCss.inputemail : LoginCss.error} autoFocus placeholder='email' name='email'/>
        {errorEmail ? <span className={LoginCss.span}>{errorMsg.email}</span> : ''}
      </div>


      <div className={LoginCss.password}> 
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='password' onChange={passwordChangeHandler} className={checkPassword ? LoginCss.inputpassword : LoginCss.error}  name="password" id="password" />
        {errorPassword ? <span className={LoginCss.span}>{errorMsg.password}</span> : ''}
      </div>

      <div className={LoginCss.submit}>
        <input onClick={onSubmitHandler} type="submit" value="Login" />
      </div>
    </form>
  </div>
  )
}
