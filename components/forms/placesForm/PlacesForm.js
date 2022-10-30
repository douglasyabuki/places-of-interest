//A form component to gather user's places of interest

import useCityList from "../../hooks/CityList";
import useCountryList from "../../hooks/CountryList";
import classes from "./PlacesForm.module.css";
import Select from "react-select";

//This child component receives the props form and setForm from MainPattern.js.

export default function PlacesForm({ form, setForm }) {
  const cityOptions = useCityList();
  const countryOptions = useCountryList();

  return (
    <div className={classes.container}>

      {/* <pre>{JSON.stringify(form)}</pre> || useful command to preview form data*/}

      <form className={classes.placesFormContainer} id="form2">

        {/* Country select code */}

        <div className={classes.selectContainer}>
          <label className={classes.selectLabel}>País</label>
          <Select
            className={classes.select}
            isMulti
            options={countryOptions}
            name="countries"
            onChange={(item) => setForm(item)}
            isClearable={true}
            isSearchable={true}
            isDisabled={false}
          />
        </div>

        {/* City select code */}

        <div className={classes.selectContainer}>
          <label className={classes.selectLabel}>Cidade</label>
          <Select
            className={classes.select}
            isMulti
            options={cityOptions}
            name="cities"
            onChange={(item) => setForm(item)}
            isClearable={true}
            isSearchable={true}
            isDisabled={false}
          />
        </div>
      </form>
    </div>
  );
}
