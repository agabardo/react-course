import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: "", isValid: false };
};

const passwordReducer = (currentState, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.value, isValid: actions.value.length > 6 };
  }
  if (actions.type === "INPUT_BLUR") {
    return {
      value: currentState.value,
      isValid: currentState.value.length > 6,
    };
  }
  return { value: "", isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  
  const [formIsValid, setFormIsValid] = useState(false);

  const initialEmailState = { value: '', isValid: null };
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmailState);

  const initialPasswordState = { value: '', isValid: undefined };
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialPasswordState)

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    // Will run every time that the component mounts...
    const debouncerTimeout = setTimeout(() => {
      console.log('Validating the form...')
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      // Before the component unmount... and before every execution besides the first.
      clearTimeout(debouncerTimeout);
    };
  }, [emailIsValid, passwordIsValid]); // These are the dependencies, code executes if any changes..

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
