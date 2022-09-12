import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [defaultFilterSelection, setDefaultFilterSelection] = useState("2020");

  function filterChangeHandler(selectedYear) {
    console.log(selectedYear);
    setDefaultFilterSelection(selectedYear);
  }


  return (
    <Card className="expenses">
      <ExpensesFilter
        filterSelection={defaultFilterSelection}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesList expenses={props.expenses} defaultFilterSelection={defaultFilterSelection}></ExpensesList>
    </Card>
  );
}

export default Expenses;
