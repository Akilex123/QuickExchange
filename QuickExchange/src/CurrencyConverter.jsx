import React from "react";
import { useState } from "react";
import "./CurrencyConverter.css";

function CurrencyConverter({ rates }) {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("RSD");
  const [result, setResult] = useState(null);
  const popularCurrencies = ["EUR", "USD", "RSD", "GBP", "CHF", "CAD"];

  const convert = () => {
    if (!amount || isNaN(amount)) return; // proveravamo da li je dobar unos

    const fromRate = rates[fromCurrency]; // iz rates objekta uzimamo vrednost sa kljucem fromCurrency (npr "USD")
    const toRate = rates[toCurrency];
    const converted = (amount / fromRate) * toRate;
    setResult(converted.toFixed(2));
  };

  const reset = () => {
    setAmount("");
    setFromCurrency("EUR");
    setToCurrency("RSD");
    setResult(null);
  };

  return (
    <>
      <div className="converter-box">
        <input
          type="number"
          placeholder="Unesi iznos"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="dropdown-row">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {popularCurrencies.map(
              (
                currency // Object.keys je funkcija koja iterira kroz sve kljuceve
              ) => (
                <option key={currency}>{currency}</option> // za svaki kljuc u rates pravimo jednu opciju
              )
            )}
          </select>

          <span className="arrow">→</span>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {popularCurrencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>

        <div className="buttons">
          <button onClick={convert}>Konvertuj</button>
          <button onClick={reset} className="secondary">
            Preuzmi
          </button>
        </div>
        {result && (
          <div className="result">
            Dobijeno: {result} {toCurrency}
          </div>
        )}
      </div>
    </>
  );
}

export default CurrencyConverter;
