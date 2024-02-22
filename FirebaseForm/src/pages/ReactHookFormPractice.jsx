import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

function ReactHookFormPractice() {
  const initialState = {
    email: "",
    password: "",
    confPassword: "",
    contact: "",
    dobDate: "",
    stream: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is Required !")
      .email("Invalid Email Address"),
    // .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email (Invalid format)"),

    password: yup
      .string()
      .required("Password  is Required !")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password Must be AlphaNumeric with symbols"
      ),

    confPassword: yup
      .string()
      .required("Confirm Password is Required !")
      .oneOf([yup.ref("password")], "Confirm Passwords has not match"),

    contact: yup
      .string()
      .required("Contact Number is Required !")
      .matches(/^[6-9]\d{9}$/, "Invalid Contact Number"),

    dobDate: yup.string().required("Date of Birth is Required !"),

    stream: yup
      .string()
      .oneOf(["science", "commerce", "arts", "diploma"])
      .label("Course Stream"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      initialState,
    },
    resolver: yupResolver(validationSchema),
  });

  const [formData, setFormData] = useState(initialState);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSelectHandler = (e) => {
    console.log("selected value", e.target.value);
    console.log(e.target.value);
  };

  const formSubmitHandler = (e) => {
    // e.preventDefault();
    try {
      console.log("Final Form data", formData);
      reset();
    } catch (errors) {
      console.log("Unable to Submit Data !!");
    } finally {
    }
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
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <div className="mb-3">
                <label htmlFor="emailInput" className="fs-4 fw-bold form-label">
                  Enter Student Email
                </label>
                <input
                  {...register("email")}
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  type="text"
                  className="form-control fs-5"
                  id="emailInput"
                  placeholder="sample@gmail.com"
                />
                <p className="mt-2 mb-0">{errors.email?.message}</p>
                {/* <ErrorMessage
                    errors={errors}
                    name={"email"}
                    render={(m) => <p>{m.message}</p>}
                  /> */}

                <div className="password-wrap mt-3">
                  <label
                    htmlFor="passwordInput"
                    className="fs-4 fw-bold form-label"
                  >
                    Enter Student Password
                  </label>
                  <input
                    {...register("password")}
                    autoComplete="on"
                    name="password"
                    value={formData.password}
                    onChange={onChangeHandler}
                    type="password"
                    className="form-control fs-5"
                    id="passwordInput"
                    placeholder="Password@12345"
                  />
                  <p className="mt-2 mb-0">{errors.password?.message}</p>

                  <label
                    htmlFor="confPasswordInput"
                    className="fs-4 fw-bold form-label mt-3"
                  >
                    Confirm Student Password
                  </label>
                  <input
                    {...register("confPassword")}
                    value={formData.confPassword}
                    onChange={onChangeHandler}
                    name="confPassword"
                    autoComplete="on"
                    type="password"
                    className="form-control fs-5"
                    id="confPasswordInput"
                    placeholder="It Should Match With Password"
                  />
                  <p className="mt-2 mb-0">{errors.confPassword?.message}</p>

                  <label
                    htmlFor="contactInput"
                    className="fs-4 fw-bold form-label mt-3"
                  >
                    Contact Number
                  </label>
                  <input
                    {...register("contact")}
                    name="contact"
                    value={formData.contact}
                    autoComplete="on"
                    type="number"
                    className="form-control fs-5"
                    id="contactdInput"
                    placeholder="Enter your Phone Number"
                    onChange={onChangeHandler}
                  />
                  <p className="mt-2 mb-0">{errors.contact?.message}</p>
                </div>

                <div className="date-wrap mt-4">
                  <label
                    htmlFor="dateInput"
                    className=" fs-4 fw-bold form-label"
                  >
                    Select Date of Birth
                  </label>
                  <input
                    {...register("dobDate")}
                    value={formData.dobDate}
                    type="date"
                    className="form-control fs-5"
                    name="dobDate"
                    id="dateInput"
                    onChange={onChangeHandler}
                  />
                  <p className="mt-2 mb-0">{errors.dobDate?.message}</p>
                </div>

                <div className="streamSelect-wrap">
                  <label
                    htmlFor="streamInput"
                    className="fs-4 fw-bold form-label mt-3"
                  >
                    Select Student Stream
                  </label>
                  {/* Special note if you will put onchange and value attribute before {...register} it won't functioning and will not show up any error  */}
                  {/* Recommended way is to always put useform {...register} in the beginning of all attribute */}
                  <select
                    {...register("stream")}
                    className="form-select fs-5"
                    aria-label="Default select example"
                    name="stream"
                    id="streamInput"
                    value={formData.stream}
                    onChange={onChangeHandler}
                  >
                    <option value="">Course Options</option>
                    <option value="science">Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                    <option value="diploma">Diploma</option>
                  </select>

                  <p className="mt-2 mb-0">{errors.stream?.message}</p>
                </div>

                <div className="departmentRadio-wrap">
                  <div className="row">
                    <div className="col-3"></div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    className="btn btn-primary  fs-6 text-uppercase"
                    type="submit"
                    onClick={() => reset()}
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

export default ReactHookFormPractice;
