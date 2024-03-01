import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./utils/ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <>
      <div className="mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Expense Tracker</h1>
            </div>
            <div className="col-md-6 col-12">
              <ExpenseForm setExpenses={setExpenses} />
            </div>
            <div className="col-md-6 col-12 mt-4">
              <ExpenseTable expenses={expenses} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
