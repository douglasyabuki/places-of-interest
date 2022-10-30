import CountryList from "../locations/CountryList";
import CityList from "../locations/CityList";
import classes from "./PlacesForm.module.css";
import Select from "react-select";
import { useState } from "react";

export default function PlacesForm() {
  const cityOptions = CityList();
  const countryOptions = CountryList();
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCountries);
    console.log(selectedCities);
    setSubmit(true);
  };

  return (
    <form
      className={classes.placesFormContainer}
      onSubmit={handleSubmit}
      id="form2"
    >
      <div className={classes.selectContainer}>
        <label className={classes.selectLabel}>País</label>
        <Select
          className={classes.select}
          isMulti
          options={countryOptions}
          name="country"
          onChange={(item) => setSelectedCountries(item)}
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
        />
      </div>
      <div className={classes.selectContainer}>
        <label className={classes.selectLabel}>Cidade</label>
        <Select
          className={classes.select}
          isMulti
          options={cityOptions}
          name="city"
          onChange={(item) => setSelectedCities(item)}
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
        />
      </div>
    </form>
  );
}
