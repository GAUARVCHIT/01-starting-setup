import "./ExpenseForm"
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
function NewExpense(props){

    function saveExpenseFormHandler(enteredExpenseData){

        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;