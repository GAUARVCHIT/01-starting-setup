import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  const filteredExpenses = props.expenses.filter((expenses) => {
    return (
      expenses.date.getFullYear().toString() === props.defaultFilterSelection
    );
  });

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">It constains no list Items</h2>;
  }

  //   if (filteredExpenses.length > 0) {
  //   }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
