import React from "react";

function AddExpense() {
  return (
    <div className="AddExpensePage">
      <div className="AddExpenseheader">
        <h2>ADD Expense</h2>
      </div>
      <div className="addexpenseform">
        <div className="titleinput"><input type="text" placeholder="Title" /></div>
        <div className="amountinput"><input type="text" placeholder="Amount" /></div>
        <div className="modeinput"><select name="Mode" id="addExpensemode"><option value="a">mode</option></select></div>
        <div className="categoryinput"><select name="catagory" id="addexpensecatagory"><option value="b">catagory</option></select></div>
        <div className="remarkinput"><textarea type="text" placeholder="Remark" /></div>
        <div className="submitButton"><button type="submit">Submit</button></div>
      </div>
      <div className="newaddexpensebutton">
        <button>+</button>
      </div>
    </div>
  );
}

export default AddExpense;
