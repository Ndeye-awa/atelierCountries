import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors du chargement des données');
          }
          return response.json();
        })
        .then((data) => setCountry(data[0]))
        .catch((err) => setError(err.message));
    }, [id]);
  
    if (error) {
      return <div>Erreur : {error}</div>;
    }
  
    return (
      <div>
        <Link to="/">Accueil</Link>
        {country ? (
          <div>
            <h1>{country.name.common}</h1>
            <p>Capitale : {country.capital}</p>
            <p>Région : {country.region}</p>
            <p>Population : {country.population}</p>
            {/* Ajoute d'autres informations si nécessaire */}
          </div>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    );
  }


export default Details


// const Details = () => {
//     return (
//       <div>
//         <Link to="/">Accueil</Link>
//         <h1>Page de details</h1>
//       </div>
//     )
//   }