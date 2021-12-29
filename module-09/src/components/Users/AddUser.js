import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnderedUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errors, setErrors] = useState();

  const usernameChangeHandler = (event) => {
    setEnderedUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clearErrorState = () => {
    setErrors(null);
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length < 2 || enteredAge.trim().length < 1) {
      setErrors({
          title: "Validation error occourred",
          message: "Please inform name and age"
        });
      return;
    } 

    props.onAddUser(enteredUsername, enteredAge);
    setEnderedUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      { errors && <ErrorModal onClearErrors={clearErrorState} title={errors.title} message={errors.message} /> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
