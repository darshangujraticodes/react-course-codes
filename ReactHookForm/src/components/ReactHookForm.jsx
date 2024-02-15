import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onsubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
  };

  return (
    <>
      <div className="text-center text-3xl font-semibold  my-6">
        React Hook Form
      </div>
      <div className="form-wrapper flex justify-center pb-8 ">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-y-2 w-[300px] "
        >
          <input
            {...register("email", {
              required: "Email is Required !",
            })}
            type="email"
            placeholder="Email"
            className=" border-2 px-4 py-2  rounded"
          />
          {errors.email && (
            <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
              {`${errors.email.message}`}
            </p>
          )}
          <input
            {...register("password", {
              required: "Password is Required !",
              validate: {
                matchPatern: (value) =>
                  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
                    value
                  ) ||
                  "Password must be Combination of Alphabets, Digit and Symbols with atleast 8 letters",
              },
            })}
            type="password"
            placeholder="Password"
            className=" border-2 px-4 py-2  rounded"
          />
          {errors.password && (
            <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
              {`${errors.password.message}`}
            </p>
          )}
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is Required !",
              validate: (value) =>
                value == getValues("password") ||
                "Confirm Password has not Match !",
            })}
            type="password"
            placeholder="Confirm Password"
            className=" border-2 px-4 py-2  rounded"
          />
          {errors.confirmPassword && (
            <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
              {`${errors.confirmPassword.message}`}
            </p>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-purple-700 w-[300px] disabled:bg-slate-500
           text-white px-4 py-3 rounded font-semibold uppercase "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ReactHookForm;
