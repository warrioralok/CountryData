/* eslint-disable no-unused-vars */
import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/PostApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "./CountryCard";
import { Searchfilter } from "../Components/UI/Searchfilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(()=>{
    startTransition( async ()=>{
        const res = await getCountryData();
        setCountries(res.data);
    }) 
},[])  

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <Searchfilter search={search} setSearch={setSearch} filter={filter} countries={countries} setCountries={setCountries} setFilter={setFilter} />
      <ul className="grid grid-four-cols">
      {countries
          .filter((currCountry) =>
            currCountry.name.common.toLowerCase().includes(search.toLowerCase()) && (filter === '' || currCountry.region === filter)
          )
          .map((currCountry, index) => (
            <CountryCard country={currCountry} key={index} />
          ))}
      </ul>
    </section>
  );
};
