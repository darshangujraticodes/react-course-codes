import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SimpleForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPass) {
      setErrors(true);
      setIsSubmitting(false);
      toast.error("Confirm Password has not Match");
      return;
    }

    await new Promise((event) => setTimeout(event, 1000));
    toast.success("Submitted Successfully ");
    setErrors(false);
    setEmail("");
    setPassword("");
    setConfirmPass("");

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="text-center text-3xl font-semibold  my-6">
        Simple Form
      </div>
      <div className="form-wrapper flex justify-center pb-8 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-2 w-[300px] "
        >
          {/* {errors &&
            (errors ? (
              <p className="bg-red-100 text-red-500 px-4 font-semibold py-2 rounded">
                Confirm Password Has Not Match !
              </p>
            ) : null)}

          {isSubmitting &&
            (isSubmitting ? (
              <p className="bg-green-200 text-green-600 px-4 font-semibold py-2 rounded">
                Submitted Succssfully !
              </p>
            ) : null)}
             */}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            className=" border-2 px-4 py-2  rounded"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            minLength={4}
            className=" border-2 px-4 py-2  rounded"
          />
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            required
            minLength={4}
            className=" border-2 px-4 py-2  rounded"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-700 w-[300px]
            disabled:bg-slate-500
             text-white px-4 py-3 rounded font-semibold uppercase "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SimpleForm;
