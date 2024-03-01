import React, { useEffect, useState } from "react";

function ExpenseTable({ expenses }) {
  // console.log("Complet Expenditure table ", expenses);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  console.log("Cateory", categoryFilter, "status", statusFilter);

  let filterCategoryList = expenses.filter(
    (item) => item.category == categoryFilter
  );
  console.log("Filter Category List =", filterCategoryList);

  let filterStatusList = expenses.filter((item) => item.status == statusFilter);
  console.log("Filter Status List =", filterStatusList);

  let expenseListDisplay;

  if (!categoryFilter && !statusFilter) {
    expenseListDisplay = [...expenses];
  }
  if (categoryFilter) {
    expenseListDisplay = [...filterCategoryList];
  }
  if (statusFilter) {
    expenseListDisplay = [...filterStatusList];
  }
  if (categoryFilter && statusFilter) {
    let newFilterList = filterCategoryList.filter(
      (item) => item.status == statusFilter
    );
    console.log("Filter Category List =", newFilterList);

    expenseListDisplay = [...newFilterList];
  }

  // Calculate total Expense
  let sum = 0;
  for (let k of expenses) {
    sum = sum + parseInt(k.price);
  }

  return (
    <>
      <div className="table-wrapper">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <select
                  value={categoryFilter}
                  name="category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Loan">Loan</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Bills">Bills</option>
                  <option value="Education">Education</option>
                  <option value="Medicine">Medicine</option>
                </select>
              </th>
              <th className="amount-column">
                <div>
                  <span>Amount</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                  >
                    <title>Ascending</title>
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                  >
                    <title>Descending</title>
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              </th>
              <th>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  name="status"
                >
                  <option value="" hidden>
                    Select Status
                  </option>
                  <option value="">Both</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {expenseListDisplay.map((expenseItem) => (
              <tr key={expenseItem.id}>
                <td> {expenseItem.title} </td>
                <td>{expenseItem.category}</td>
                <td>₹{expenseItem.price} </td>
                <td>{expenseItem.status}</td>
              </tr>
            ))}

            <tr>
              <th>Total</th>
              <th></th>
              <th>₹{sum}</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ExpenseTable;
