import countryFacts from "../Api/Countrydata.json";
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting Facts
        <br />
        we&apos;re proud of.
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((currElem) => {
          const { name, capital, population, flag, details, id } = currElem;
          return (
            <>
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className="card-title">
                    <img src={flag} />
                  </p>
                  <p className="card-title">{name}</p>
                  <p className="factsCapital">
                    <span className="card-description ">Capital:</span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description">Population:</span>
                    {population}
                  </p>
                  <p className="facts">
                    <span className="card-description ">Interesting Facts:</span>
                    {details}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
