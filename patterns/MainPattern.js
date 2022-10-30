import classes from "./MainPattern.module.css";
import PersonalForm from "../components/forms/PersonalForm";
import SubmitButton from "../components/button/SubmitButton";
import PlacesForm from "../components/forms/PlacesForm";

export default function MainPattern() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.formsContainer}>
        <div className={classes.personalFormContainer}>
          <h1>Dados pessoais</h1>
          <PersonalForm></PersonalForm>
        </div>
        <div className={classes.placesFormContainer}>
          <h1>Destinos de interesse</h1>
          <PlacesForm></PlacesForm>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <SubmitButton></SubmitButton>
      </div>
    </div>
  );
}
