/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const Searchfilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (eve) => {
    eve.preventDefault();
    setSearch(eve.target.value);
  };
  const onselectChange = (e) =>{
    e.preventDefault();
    setFilter(e.target.value)
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />
      <div>
        <button onClick={() => sortCountries('asc')}>ASC</button>
      </div>
      <div>
        <button onClick={() => sortCountries('dsc')}>DSC</button>
      </div>
      <div>
        <select className="select-section" value={filter} onChange={onselectChange}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
