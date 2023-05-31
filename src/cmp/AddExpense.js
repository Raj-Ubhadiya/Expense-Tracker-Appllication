// import func from "joi/lib/types/func";
import React, { useState } from "react";

function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("");
  const [category, setCategory] = useState("");
  const [remark, setRemark] = useState("");

  const currentDate = new Date();

  const options = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    day: "numeric",
    month: "long",
  };

  const formattedTime = currentDate.toLocaleTimeString("en-US", options);
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });

  const formattedDateTime = `${formattedTime}`;

  // console.log(formattedDateTime);

  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:5000/addExpenseDemo", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        date: formattedDateTime,
        title,
        amount,
        mode,
        category,
        remark,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="AddExpensePage">
      <div className="AddExpenseheader">
        <h2>ADD Expense</h2>
      </div>
      <div className="addexpenseform">
        <div className="titleinput">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="amountinput">
          <input
            type="text"
            placeholder="Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="modeinput">
          <select
            name="Mode"
            id="addExpensemode"
            onChange={(e) => {
              setMode(e.target.value);
            }}
          >
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
        </div>
        <div className="categoryinput">
          <select
            name="catagory"
            id="addexpensecatagory"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Grocery">Grocery</option>
            <option value="Academic">Academic</option>
            <option value="miscellaneous">miscellaneous</option>
          </select>
        </div>
        <div className="remarkinput">
          <textarea
            type="text"
            placeholder="Remark"
            onChange={(e) => {
              setRemark(e.target.value);
            }}
          />
        </div>
        <div className="submitButton">
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
      <div className="newaddexpensebutton">
        <button>+</button>
      </div>
    </div>
  );
}

export default AddExpense;
