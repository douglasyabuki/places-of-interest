//Hook to fetch data from Amazon api into an array using axios

import { useEffect, useState } from "react";
import axios from "axios";

export default function useCountryList() {
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

//Maping fetched data into this array {value, label, code (code can be used to filter the city options)}

  const countryOptions = countries.map((country) => ({
    value: country.name_ptbr,
    label: country.name_ptbr,
    code: country.code,
  }));

  return countryOptions;
}
