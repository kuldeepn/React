import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
// import React, { useState } from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // // const EventHandler = () => {
  // //   setTitle("Updated by Kuldeep!");
  // //   // console.log("clicked");
  // // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount} </div>
        </div>
        {/* <button onClick={EventHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
