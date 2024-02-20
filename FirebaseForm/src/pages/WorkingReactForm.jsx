import React from "react";
import { useState } from "react";

function WorkingReactForm() {
  const [formData, setFormData] = useState({
    email: "",
    gender: "",
    stream: "Science",
    age: 18,
    date: "",
    sports: [],
  });

  const onChangeHandler = (e) => {
    if (e.target.name === "sports") {
      let copy = { ...formData };
      if (e.target.checked) {
        copy.sports.push(e.target.value);
      } else {
        copy.sports = copy.sports.filter((val) => val !== e.target.value);
      }
      setFormData(copy);
    } else {
      console.log(e.target.value);
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);

    const inputDate = formData.date;
    // console.log("inputdate", inputDate);
    const convDate = new Date(inputDate).getDate();
    const convMonth = new Date(inputDate).getMonth() + 1;
    const convYear = new Date(inputDate).getFullYear();
    console.log(`${convDate}/${convMonth}/${convYear} `);

    // console.log("Selected sports", selectedSports);
    console.log("Final Form Data", formData);
  };

  return (
    <>
      <div className="text-white">
        <div
          className="container rounded mt-3 p-3"
          style={{ backgroundColor: "#262626" }}
        >
          <h1 className="mt-4 text-center">React Form Handling</h1>
          <div className="mt-4">
            <form action="">
              <div className="mb-3">
                <label htmlFor="emailInput" className="fs-4 fw-bold form-label">
                  Enter Student Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  type="email"
                  required
                  className="form-control fs-5"
                  id="emailInput"
                  placeholder="sample@gmail.com"
                />

                <label className=" mt-4 fs-4 fw-bold form-label">
                  Select Gender
                </label>
                <div className="form-check">
                  <input
                    required
                    className="form-check-input "
                    type="radio"
                    name="gender"
                    value="male"
                    id="maleCheckbox"
                    onChange={onChangeHandler}
                  />
                  <label
                    className="form-check-label fs-4"
                    htmlFor="maleCheckbox"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    onChange={onChangeHandler}
                    className="form-check-input"
                    type="radio"
                    value="female"
                    name="gender"
                    id="femaleCheckbox"
                  />
                  <label
                    className="form-check-label fs-4"
                    htmlFor="femaleCheckbox"
                  >
                    Female
                  </label>
                </div>

                <div className="select-wrap mt-4">
                  <label className=" fs-4 fw-bold form-label">
                    Select Stream
                  </label>
                  <select
                    required
                    onChange={onChangeHandler}
                    name="stream"
                    className="form-select fs-5"
                    aria-label="Default select example"
                  >
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>

                <div className="date-wrap mt-4">
                  <label
                    htmlFor="dateInput"
                    className=" fs-4 fw-bold form-label"
                  >
                    Select Admission Date
                  </label>
                  <input
                    required
                    type="date"
                    className="form-control fs-5"
                    name="date"
                    id="dateInput"
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="range-wrap mt-4">
                  <label
                    htmlFor="ageInput"
                    className=" fs-4 fw-bold form-label"
                  >
                    Select Student age
                  </label>
                  <br />
                  <div className="d-flex">
                    <div
                      className="py-3 px-3 rounded"
                      style={{ backgroundColor: "#fff", width: "80%" }}
                    >
                      <input
                        required
                        min="18"
                        max="22"
                        value={formData.age}
                        type="range"
                        className=" fs-5 w-100"
                        name="age"
                        id="ageInput"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="bg-white p-3 rounded mx-2 fs-4 fw-bold">
                      <span className="text-black fs-5"> {formData.age}</span>
                    </div>
                  </div>
                </div>

                <div className="checkbox-wrap mt-4">
                  <label
                    htmlFor="checkboxInput"
                    className=" fs-4 fw-bold form-label"
                  >
                    Select Student Sports
                  </label>
                  <div className="row">
                    <div className="col-4 px-3">
                      <div className="form-check">
                        <input
                          name="sports"
                          className="form-check-input "
                          type="checkbox"
                          value="chess"
                          id="chessInput"
                          onChange={onChangeHandler}
                        />
                        <label
                          className="fs-4 form-check-label"
                          htmlFor="chessInput"
                        >
                          Chess
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          name="sports"
                          className="form-check-input "
                          type="checkbox"
                          value="cricket"
                          id="cricketInput"
                          onChange={onChangeHandler}
                        />
                        <label
                          className="fs-4 form-check-label"
                          htmlFor="cricketInput"
                        >
                          Cricket
                        </label>
                      </div>
                    </div>
                    <div className="col-4 px-3">
                      <div className="form-check">
                        <input
                          name="sports"
                          className="form-check-input "
                          type="checkbox"
                          value="Football"
                          id="footballInput"
                          onChange={onChangeHandler}
                        />
                        <label
                          className="fs-4 form-check-label"
                          htmlFor="footballInput"
                        >
                          Football
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          name="sports"
                          className="form-check-input "
                          type="checkbox"
                          value="Hockey"
                          id="hockeyInput"
                          onChange={onChangeHandler}
                        />
                        <label
                          className="fs-4 form-check-label"
                          htmlFor="hockeyInput"
                        >
                          Hockey
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    className="btn btn-primary  fs-6 text-uppercase"
                    type="submit"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkingReactForm;
