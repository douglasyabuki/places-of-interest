import classes from "./PersonalForm.module.css";
import { useState } from "react";


export default function PersonalForm() {
  const initialValues = { name: "", email: "", phone:"", personalDoc:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
    setSubmit(true);
  };

  return (
    <div className="container">
      {submit ? (
        console.log("Formulário enviado!")
      ) : (
        null
      )}

      <form onSubmit={handleSubmit} id="form1">
        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>Nome</label>
          <input 
            className={classes.input}
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>E-mail</label>
          <input 
            className={classes.input}
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>Telefone</label>
          <input 
            className={classes.input}
            type="text"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>CPF</label>
          <input 
            className={classes.input}
            type="text"
            name="personalDoc"
            value={formValues.personalDoc}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
