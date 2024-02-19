import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function FirebaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    sport: [],
    date: "",
    stream: "",
  });
  // const [date, setDate] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onChangeHandler = (event) => {
    // console.log(event.target.value);

    if (event.target.name === "sport") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.sport.push(event.target.value);
      } else {
        copy.sport = copy.sport.filter((e) => e !== event.target.value);
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onDateChangeHandler = (e) => {
    // console.log(e.target.value);
    let inputDate = e.target.value;
    const dateVal = new Date(inputDate).getDate();
    const month = new Date(inputDate).getMonth() + 1;
    const year = new Date(inputDate).getFullYear();
    const finalDate = `${dateVal}/${month}/${year}`;

    formData.date = finalDate;
    // return finalDate;
  };

  const onSubmitHandler = (data) => {
    console.log("formdata = ", formData);
    toast.success("Submitted Successfully");
    reset();
  };

  return (
    <>
      <div className="container mx-auto  my-6">
        <h3 className="text-center text-3xl font-semibold ">
          Firbase Form Storage CRUD Operation
        </h3>
        <div className=" firebase-form-wrap flex justify-center my-5">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col firebase-form"
          >
            <input
              {...register("name", {
                required: "Student Name is Required !",
              })}
              onChange={onChangeHandler}
              type="text"
              name="name"
              placeholder="Student Name"
              className="inputBox"
            />
            {errors.name && (
              <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
                {`${errors.name.message}`}
              </p>
            )}

            <input
              {...register("email", {
                required: "Student Email is Required !",
              })}
              name="email"
              onChange={onChangeHandler}
              type="email"
              placeholder="Student Email"
              className="inputBox"
            />

            {errors.email && (
              <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
                {`${errors.email.message}`}
              </p>
            )}

            <input
              {...register("password", {
                required: "Student Password is Required !",
                validate: {
                  matchPatern: (value) =>
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
                      value
                    ) ||
                    "Password must be Combination of Alphabets, Digit and Symbols with atleast 8 letters",
                },
              })}
              onChange={onChangeHandler}
              name="password"
              autoComplete=""
              type="password"
              placeholder="Student Password"
              className="inputBox"
            />

            {errors.password && (
              <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
                {`${errors.password.message}`}
              </p>
            )}

            <div className="input-wrap ">
              <input
                required
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="mr-2"
              />
              <label htmlFor="male">Male</label>
              <input
                onChange={onChangeHandler}
                type="radio"
                name="gender"
                value="female"
                id="female"
                className="ml-3 mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>

            <div className="input-wrap ">
              <input
                onChange={onChangeHandler}
                type="checkbox"
                id="cricket"
                value="cricket"
                name="sport"
                className="mr-1"
              />
              <label htmlFor="cricket">Cricket</label>
              <input
                onChange={onChangeHandler}
                type="checkbox"
                id="football"
                value="Football"
                name="sport"
                className="ml-5 mr-1"
              />
              <label htmlFor="football">Football</label>
              <input
                onChange={onChangeHandler}
                type="checkbox"
                id="chess"
                value="chess"
                name="sport"
                className="ml-3 mr-1"
              />
              <label htmlFor="chess">Chess</label> <br />
              <input
                onChange={onChangeHandler}
                type="checkbox"
                name="sport"
                value="khokho"
                id="khokho"
                className="mr-1"
              />
              <label htmlFor="khokho">Khokho</label>
              <input
                onChange={onChangeHandler}
                type="checkbox"
                name="sport"
                value="kabaddi"
                id="kabaddi"
                className="ml-3 mr-1"
              />
              <label htmlFor="kabaddi">Kabaddi</label>
              <input
                onChange={onChangeHandler}
                type="checkbox"
                name="sport"
                value="hockey"
                id="hockey"
                className="ml-3 mr-1"
              />
              <label htmlFor="hockey">Hockey</label>
            </div>
            <input
              type="date"
              onChange={onDateChangeHandler}
              name="date"
              className="inputBox"
              required
            />
            <select
              {...register("stream", {
                required: "Student Stream is Required !",
              })}
              name="stream"
              onChange={onChangeHandler}
              className="inputBox "
            >
              <option value="Unselected">Select Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>

            {errors.stream && (
              <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
                {`${errors.stream.message}`}
              </p>
            )}

            <button type="submit" className="uppercase submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FirebaseForm;
