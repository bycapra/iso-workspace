import React, { useState } from "react";
import "../css/currency.css";
import { TbArrowBigRight } from "react-icons/tb";
import axios from "axios";

//url
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let APIKEY = "fca_live_KRdzKjw1bKF5wAmr553zv7lpitpEvNmNywcXZp2y";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  //api fonksiyonu
  const getExchange = async () => {
    var response = await axios.get(
      `${BASE_URL}?apikey=${APIKEY}&base_currency=${fromCurrency}`,
    );

    const rate = response.data?.data[toCurrency];
    const totalAmount = (amount * rate).toFixed(2);
    
    setResult(totalAmount)

  };

  return (
    <div className="currency-div">
      <input
        type="number"
        className="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="from-currency-option"
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>
      <TbArrowBigRight
        style={{
          fontSize: "25px",
          marginRight: "10px",
          backgroundColor: "white",
        }}
      />
      <select
        className="to-currency-option"
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
      <input type="number" className="result" value={result} />
      <div>
        <button className="cevirButon" onClick={()=>getExchange()}>Çevir</button>
      </div>
    </div>
  );
}

export default Currency;
