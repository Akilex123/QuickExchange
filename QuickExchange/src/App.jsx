import "./App.css";
import ExchangeCards from "./ExchangeCards";
import CurrencyConverter from "./CurrencyConverter";
import { useState, useEffect } from "react";

function App() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      const res = await fetch("https://open.er-api.com/v6/latest/EUR");
      const data = await res.json();
      setRates(data.rates);
    };
    fetchRates();
  }, []);

  if (!rates) return <p>Loading...</p>;

  return (
    <>
      {" "}
      <div className="page-container">
        <ExchangeCards rates={rates}></ExchangeCards>
        <CurrencyConverter rates={rates}></CurrencyConverter>
      </div>
    </>
  );
}

export default App;
