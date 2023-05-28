import React, { useEffect, useState } from "react";

const Transaction = () => {
  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/getExpenseDetailDemo") // API to fetch the data
      .then((response) => response.json()) //API promise.
      .then((data) => {
        setExpenseData(data.data); //Setting data using setData function.
        console.log(data.data);
      })
      .catch((error) => console.error(error)); //error handling
  }, []);

  return (
    <div className="transactionContainer border">
      <div className="transactionHeading ">
        <span>Transaction</span>
      </div>
      <div className="transactionFilter border">
        <ul>
          <li className="filterOption">
            <select>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
            </select>
          </li>
          <li className="filterOption">
            <select>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
            </select>
          </li>
        </ul>
        <div className="filterButton">
          <button>Apply</button>
        </div>
      </div>
      <div className="transactionList border">
        {expenseData.map((exp) => (
          <div className="transactionRow border" key={exp._id}>
            <div className="col ">{exp.date}</div>
            <div className="col ">{exp.title}</div>
            <div className="col ">{exp.amount}</div>
            <div className="col ">{exp.mode}</div>
            <div className="col ">{exp.category}</div>
            <div className="remark">
              <span>{exp.remark}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
