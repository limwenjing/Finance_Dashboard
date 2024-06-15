/* eslint-disable react/prop-types */
import "./FinanceStyling.css";
import FinanceReturnItem from "./FinanceReturnItem.jsx";

function FinanceReturnList(props) {
  return (
    <div className="FinanceReturnListDesign">
      <h2> Stock List </h2>
      {props.items.map((item, index) => (
        <FinanceReturnItem item={item} key={index} />
      ))}
    </div>
  );
}

export default FinanceReturnList;
