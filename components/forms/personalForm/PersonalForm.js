//A form component to gather personal info from user

import classes from "./PersonalForm.module.css";

//This child component receives the props form and setForm from MainPattern.js.

export default function PersonalForm({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={classes.container}>

      {/* <pre>{JSON.stringify(form)}</pre> || useful command to preview form data*/}

      <form id="form1">

        {/* Input that gathers user's name */}
        
        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>Nome</label>
          <input
            className={classes.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input that gathers user's e-mail */}

        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>E-mail</label>
          <input
            className={classes.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input that gathers user's phone*/}

        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>Telefone</label>
          <input
            className={classes.input}
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input that gathers user's personal document*/}

        <div className={classes.inputContainer}>
          <label className={classes.inputLabel}>CPF</label>
          <input
            className={classes.input}
            type="text"
            name="personalDoc"
            value={form.personalDoc}
            onChange={handleChange}
            required
          />
        </div>

        {/* A button to point input error when there is any. It triggers the "required" placed on inputs*/}

        <div className={classes.buttonContainer}>
          <button className={classes.validateButton}>
            Validar informações
          </button>
        </div>
      </form>
    </div>
  );
}
