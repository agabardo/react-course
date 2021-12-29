import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClearErrors}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.message}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.footer}>
          <Button onClick={props.onClearErrors}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
