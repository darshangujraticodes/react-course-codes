import React, { useEffect, useRef, useState } from "react";
import "./PageStyle.css";
import ResponsiveTable from "../components/ResponsiveTable";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import bookService from "../firebase/FirebaseServices.js";
import FetchBookData from "../components/FetchBookData.jsx";
import { useId } from "react";

function FirebaseCrud() {
  const bookSelectedId = useId();
  const [formData, setFormData] = useState({
    bookname: "",
    bookauthor: "",
    bookstatus: "",
  });

  const { bookname, bookauthor, bookstatus } = formData;

  // update data handler logic
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("this id data is reverse fetched from child component  ", id);
    setBookId(id);
  };

  const editHandler = async (id) => {
    try {
      const docSnap = await bookService.getSingleBook(id);
      setFormData({ ...docSnap.data() });
      console.log("update req", formData);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("The Update ID here is = ", bookId);
    if (bookId !== undefined || bookId !== "") {
      editHandler(bookId);
    }
  }, [bookId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = async () => {
    try {
      console.log("formdata = ", formData);
      await bookService.addBook(formData);
      toast.success("Submitted Successfully");

      setFormData({
        bookname: "",
        bookauthor: "",
        bookstatus: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Data Submission Failed !!");
    }

    reset();
  };

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log([event.target.name], event.target.value);
    console.log("onchangeHandler =", formData);
  };

  return (
    <div className="firebase-wrap py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-uppercase mb-4">Firebase CRUD Operation</h1>
          </div>
          <div className=" col-12 px-3">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="input-group mt-3">
                <span
                  className="input-group-text bg-dark text-white"
                  id="inputGroup-sizing-default"
                >
                  Book Name
                </span>
                <input
                  {...register("bookname", {
                    required: "Book Name is Required !",
                  })}
                  value={bookname}
                  type="text"
                  name="bookname"
                  onChange={onChangeHandler}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              {errors.bookname && (
                <p className="inputErrorMessg">
                  {`${errors.bookname.message}`}
                </p>
              )}
              <div className="input-group mt-3">
                <span
                  className="input-group-text bg-dark text-white"
                  id="inputGroup-sizing-default"
                >
                  Book Author
                </span>
                <input
                  {...register("bookauthor", {
                    required: "Author Name is Required !",
                  })}
                  value={bookauthor}
                  type="text"
                  name="bookauthor"
                  onChange={onChangeHandler}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              {errors.bookauthor && (
                <p className="inputErrorMessg">
                  {`${errors.bookauthor.message}`}
                </p>
              )}

              <div className="form-floating selectwrap mt-3">
                <select
                  value={bookstatus}
                  className="form-select"
                  onChange={onChangeHandler}
                  name="bookstatus"
                  id={bookSelectedId}
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
                <label htmlFor={bookSelectedId}>Select Book Status</label>
              </div>

              <div className="form-btn-wrap mt-3">
                <button
                  type="submit"
                  className="btn btn-primary fs-5 text-uppercase"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 px-3 mt-3">
            {/* <div className="table-responsive">
              <table className="table">
                <thead className="table-dark text-center">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Book Author</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td scope="row" data-label="ID">
                      1
                    </td>
                    <td data-label="Book Name">React Complete Guide</td>
                    <td data-label="Book Author">Darsh</td>
                    <td data-label="Book Status">Available</td>
                    <td data-label="Book Actions">
                      <button className="table-btn">
                        <span className="mx-2 text-primary ">
                          <i className="fa-solid fa-pen-to-square table-icon"></i>
                        </span>
                      </button>
                      <button className="table-btn">
                        <span className="mx-2 table-icon text-danger">
                          <i className="fa-solid fa-trash-can"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <FetchBookData getBookId={getBookIdHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirebaseCrud;
