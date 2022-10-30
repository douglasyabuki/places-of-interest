//A button component to submit the forms.

import classes from "./SubmitButton.module.css";
import { useState } from "react";

//This child component receives the props form to print on console

export default function SubmitButton({ form }) {
  const [submitted, setSubmitted] = useState(false);

  //A function to handle the event of click on the button

  function onClickHandler(e) {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    console.log(`Form submitted: ${submitted}`);
  }

  return (
    <div className={classes.buttonContainer}>
      <button className={classes.submitButton} onClick={onClickHandler}>
        ENVIAR
      </button>
    </div>
  );
}
