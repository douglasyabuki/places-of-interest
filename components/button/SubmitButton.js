import classes from "./SubmitButton.module.css";
import { useState } from "react";

export default function SubmitButton() {
  const [submitted, setSubmitted] = useState(false);

  function onClickHandler(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log(`Submitted: ${submitted}`);
  }
  return (
    <div className={classes.buttonContainer}>
      <button className={classes.submitButton} onClick={onClickHandler}>
        ENVIAR
      </button>
    </div>
  );
}
