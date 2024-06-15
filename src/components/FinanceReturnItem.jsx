import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function FinanceReturnItem(props) {
  const item = props.item;
  const itemPriceFloat = parseFloat(item.price);
  const [currentPrice, setCurrentPrice] = useState(0);
  const profitLoss = (currentPrice - itemPriceFloat) * item.qty;
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
        //   TODO: Replace "IBM" with the stock symbol from the props.item.stock
        "IBM" +
        // TODO: Replace "demo" with your own API key
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

  //Applying inline style just for profit/losses
  const profitLossStyle = {
    color: profitLoss >= 0 ? "green" : "red",
  };

  return (
    <li className="listItem">
      <strong>Symbol: {item.stock} </strong>
      <br />
      Quantity: {item.qty} <br />
      Purchase Price: {item.price} <br />
      Current Price: {currentPrice} <br />
      <br />
      <span style={profitLossStyle}>Profit/Loss: {profitLoss.toFixed(2)}</span>
    </li>
  );
}
export default FinanceReturnItem;
