import React, { useEffect, useState } from "react";
import CurrencyOption from "./CurrencyOption";
import { CURRENCY_SIGNS,CONVERSION_API_URL } from './constants.js'




const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchConversionRate = async (amount, fromCur, toCur) => {
    try {
      const res = await fetch(
        `${CONVERSION_API_URL}?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();
      return data.rates[toCur];
    } catch (error) {
      throw new Error('Error, Try again!');
    }
  };

  useEffect(() => {
    const convert = async () => {
      setIsLoading(true);
      try {
        if (fromCur === toCur) {
          setConverted(amount);
        } else {
          const rate = await fetchConversionRate(amount, fromCur, toCur);
          setConverted(rate);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    convert();
  }, [amount, fromCur, toCur]);

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleFromCurChange = (e) => {
    setFromCur(e.target.value);
  };

  const handleToCurChange = (e) => {
    setToCur(e.target.value);
  };

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        disabled={isLoading}
      />
      <select value={fromCur} onChange={handleFromCurChange} disabled={isLoading}>
        {Object.keys(CURRENCY_SIGNS).map((currency) => (
          <CurrencyOption key={currency} currency={currency} />
        ))}
      </select>
      <select value={toCur} onChange={handleToCurChange} disabled={isLoading}>
        {Object.keys(CURRENCY_SIGNS).map((currency) => (
          <CurrencyOption key={currency} currency={currency} />
        ))}
      </select>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <p>
          {amount}
          {CURRENCY_SIGNS[fromCur]} = {converted} {CURRENCY_SIGNS[toCur]}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
