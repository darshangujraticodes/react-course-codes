import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const data = {};

  const initialState = {
    title: "",
    category: "",
    price: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [formError, setFormError] = useState({});

  const validateForm = (formDataValue) => {
    const errorData = {};

    if (!formDataValue.title) {
      errorData.title = "Title is Required";
    }
    if (!formDataValue.category) {
      errorData.category = "Select Expense Category";
    }
    if (!formDataValue.price) {
      errorData.price = "Expense Amount is Required !";
    }
    if (!formDataValue.status) {
      errorData.status = "Select your Expense Status";
    }

    setFormError(errorData);

    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData((prevstate) => console.log(prevstate));

    const validateResult = validateForm(formData);
    console.log(validateResult);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...formData, id: crypto.randomUUID() },
    ]);

    setFormData(initialState);

    // handle submit close
  };

  const onChangeHandler = (e) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
    setFormError({});
  };

  return (
    <>
      <div>
        <main>
          <div className="expense-tracker">
            <form onSubmit={handleSubmit} className="expense-form">
              <div className="input-container">
                <label className="inputlabel" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  value={formData.title}
                  name="title"
                  // onChange={(e) =>
                  //   setFormData((prevState) => ({
                  //     ...prevState,
                  //     title: e.target.value,
                  //   }))
                  // }
                  onChange={onChangeHandler}
                />
                <p className="errorDisplay">{formError.title}</p>
              </div>
              <div className="input-container">
                <label className="inputlabel" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={onChangeHandler}
                >
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="Grocery">Grocery</option>
                  <option value="Loan">Loan</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Bills">Bills</option>
                  <option value="Education">Education</option>
                  <option value="Medicine">Medicine</option>
                </select>
                <p className="errorDisplay">{formError.category}</p>
              </div>
              <div className="input-container">
                <label className="inputlabel" htmlFor="amount">
                  Amount
                </label>
                <input
                  id="amount"
                  name="price"
                  value={formData.price}
                  onChange={onChangeHandler}
                />
                <p className="errorDisplay">{formError.price}</p>
              </div>
              <div className="input-container">
                <label className="inputlabel mt-2" htmlFor="category">
                  Select Expense Status (Paid, Unpaid or Both)
                </label>
                <select
                  id="expensestatus"
                  name="status"
                  value={formData.status}
                  onChange={onChangeHandler}
                >
                  <option value="" hidden>
                    Select Status
                  </option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
                <p className="errorDisplay">{formError.status}</p>
              </div>

              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default ExpenseForm;
