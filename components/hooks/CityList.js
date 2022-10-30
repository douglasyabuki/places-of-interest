//Hook to fetch data from Amazon api into an array using axios

import { useEffect, useState } from "react";
import axios from "axios";

export default function useCityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("https://amazon-api.sellead.com/city")
      .then((res) => {
        console.log(res);
        setCities(res.data);
        console.log(cityOptions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//Maping fetched data into this array {value, label, code (code can be used to filter the city options)}

  const cityOptions = cities
    .filter((city) => city.name_ptbr !== null && city.name !== null)
    .map((city) => ({
      value: city.name_ptbr,
      label: city.name_ptbr,
      code: city.country_code,
    }));

  return cityOptions;
}
