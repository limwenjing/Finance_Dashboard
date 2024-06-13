import React, { useState, useEffect } from "react";
import "./FinanceStyling.css";

function FinanceReturnList(props) {
  const [currentPrice, setCurrentPrice] = useState([]);


  console.log(props.stock)
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + 
      "IBM" + 
      "&apikey=demo"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data["Global Quote"]["05. price"]); //log the price and check
        const Current_Price = parseFloat(data["Global Quote"]["05. price"]); //retrive price and set var to the price for ease of access
        setCurrentPrice(Current_Price.toFixed(2));
      })
      .catch((error) => console.log("Error:", error));
  }, [props.stock]);

  return (
    <div className="FinanceReturnListDesign">
      <h2> Stock List </h2>

      {props.items.map((item, index) => {
        const currentPriceFloat = currentPrice; //already in float
        const itemPriceFloat = parseFloat(item.price);
        const profitLoss = currentPriceFloat - itemPriceFloat;

      //Applying inline style just for profit/losses
      const profitLossStyle = {
        color: profitLoss >= 0 ? 'green' : 'red'
        };

        return (

          <li key={index} className="listItem">
            <strong>Symbol: {item.stock} </strong>
            <br />
            Quantity: {item.qty} <br />
            Purchase Price: {item.price} <br />
            Current Price: {currentPrice} <br />
            <br />
            <span style = {profitLossStyle}>
            Profit/Loss: {profitLoss.toFixed(2)}
            </span>
          </li>
        );
      })}
    </div>
  );
}

export default FinanceReturnList;
