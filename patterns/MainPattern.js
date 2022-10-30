//This pattern gathers all components to cleanly build the UI

import classes from "./MainPattern.module.css";
import PersonalForm from "../components/forms/personalForm/PersonalForm";
import PlacesForm from "../components/forms/placesForm/PlacesForm";
import SubmitButton from "../components/button/SubmitButton";
import { useState } from "react";

export default function MainPattern() {

//This parent component will pass these props [form,setForm] for the children components

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    personalDoc: "",
    countries: [],
    cities: [],
  });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.formsContainer}>
        <div className={classes.personalFormContainer}>
          <h1>Dados pessoais</h1>
          <PersonalForm form={form} setForm={setForm}></PersonalForm>
        </div>
        <div className={classes.placesFormContainer}>
          <h1>Destinos de interesse</h1>
          <PlacesForm form={form} setForm={setForm}></PlacesForm>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <SubmitButton form={form}></SubmitButton>
      </div>
    </div>
  );
}
