// Accueil.js
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Accueil = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        return response.json();
      })
      .then((data) => setCountries(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>Page d'accueil</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {countries.map((country) => (
          <li key={country.cca3} style={{ marginBottom: '10px' }}>
            <Link to={`/details/${country.cca3}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={country.flags.svg} alt={`Drapeau de ${country.name.common}`} width="30" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accueil;
