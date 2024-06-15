import { useState } from "react";
import "./FinanceStyling.css";
import FinanceReturnList from "./FinanceReturnList";

function FinanceDashboard() {
  const [items, setItems] = useState([]);
  const [stock, setStock] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = () => {
    const newItem = { stock, price, qty: quantity };
    setItems([...items, newItem]);
    setStock("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="FinanceDashboardDesign">
      <div className="inputBox">
        <input
          type="text"
          id="symbol"
          placeholder="Stock Symbol"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="number"
          id="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          id="price"
          placeholder="Purchase Price"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button id="button" onClick={handleAddItem}>
          Add Stock
        </button>
      </div>

      {items.length === 0 ? (
        <p>No stocks added yet</p>
      ) : (
        <FinanceReturnList items={items} stock={stock} />
      )}
    </div>
  );
}

export default FinanceDashboard;
