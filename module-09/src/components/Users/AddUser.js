import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnderedUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnderedUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    setEnderedUsername("");
    setEnteredAge("");
  };

  return (
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
  );
};

export default AddUser;
