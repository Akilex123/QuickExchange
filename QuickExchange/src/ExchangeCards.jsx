import "./ExchangeCards.css";
import { useState, useEffect } from "react";
import React from "react";

function ExchangeCards() {
  // useEffect nam sluzi da se ovo odmah ucita kada se stranica pokrene
  const [rates, setRates] = useState(null); // stanje za kurs

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/EUR");
        const data = await response.json();
        setRates(data.rates); // odmah postavljamo taj kurs na nas useState
      } catch (error) {
        console.error("Greska pri hvatanju kursa", error);
      }
    };
    fetchRates(); // zovemo funkciju odmah da se izvrsi kada se ucita stranica
  }, []); // stavljamo [] da bi se ovo izvrsavalo samo kada se ucita stranica

  if (!rates) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="heading-container">
        <h2 className="heading">QuickExchange</h2>
      </div>

      <div className="exchange-rates">
        <div className={`rate-card`}>
          <h3 className="currency">EUR</h3>
          <p className="number">{rates.EUR}</p>
        </div>
        <div className={`rate-card`}>
          <h3 className="currency">USD</h3>
          <p className="number">{rates.USD}</p>
        </div>
        <div className={`rate-card`}>
          <h3 className="currency">RSD</h3>
          <p className="number">{rates.RSD}</p>
        </div>
      </div>
    </>
  );
}

export default ExchangeCards;
