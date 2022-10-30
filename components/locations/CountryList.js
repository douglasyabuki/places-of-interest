import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryList() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://amazon-api.sellead.com/country")
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const countryOptions = countries.map(country => ({value:country.name_ptbr, label:country.name_ptbr, code:country.code}))

  return countryOptions;

}
