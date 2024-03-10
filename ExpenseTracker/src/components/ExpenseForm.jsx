import React, { useState } from "react";
import Inputfields from "./forms/Inputfields";
import SelectField from "./forms/SelectField";

function ExpenseForm({ setExpenses }) {
  const data = {};

  const initialState = {
    title: "",
    category: "",
    price: "",
    status: "",
    phone: "",
    email: "",
    password: "",
    confpassword: "",
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
    console.log("validate result ", validateResult);

    console.log("error key length", Object.keys(validateResult).length);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...formData, id: crypto.randomUUID() },
    ]);

    console.log("formdata =", formData);

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
              <Inputfields
                label="Title"
                id="title"
                name="title"
                value={formData.title}
                onChangeHandle={onChangeHandler}
                errorMessg={formError.title}
              />

              {/* <div className="input-container">
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
              </div> */}

              <SelectField
                label="Category"
                id="category"
                name="category"
                value={formData.category}
                onChangeHandle={onChangeHandler}
                options={[
                  "Grocery",
                  "Education",
                  "Bills",
                  "Clothes",
                  "Medicine",
                ]}
                errorMessg={formError.category}
              />

              <Inputfields
                label="Amount"
                id="amount"
                name="price"
                value={formData.price}
                onChangeHandle={onChangeHandler}
                errorMessg={formError.price}
              />

              <SelectField
                label="Status"
                id="status"
                name="status"
                value={formData.status}
                onChangeHandle={onChangeHandler}
                options={["Paid", "Unpaid"]}
                errorMessg={formError.status}
              />

              <Inputfields
                label="Contact Number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChangeHandle={onChangeHandler}
                errorMessg={formError.phone}
              />

              <Inputfields
                label="Email"
                id="email"
                name="email"
                value={formData.email}
                onChangeHandle={onChangeHandler}
                errorMessg={formError.email}
              />

              <Inputfields
                label="Password"
                id="password"
                name="password"
                value={formData.password}
                onChangeHandle={onChangeHandler}
                errorMessg={formError.password}
              />

              <Inputfields
                label="Confirm Password"
                id="confpassword"
                name="confpassword"
                value={formData.confpassword}
                onChangeHandle={onChangeHandler}
                errorMessg={formError.confpassword}
              />

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
