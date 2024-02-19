import React, { useEffect, useState } from "react";
import bookService from "../firebase/FirebaseServices.js";
import { toast } from "react-toastify";

function FetchBookData({ getBookId }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await bookService.getAllBooks();
    // console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteBookHandler = async (id) => {
    try {
      console.log("book delete id = ", id);
      await bookService.deleteBook(id);
      toast.success("Data Deleted Successfully !");
      getBooks();
    } catch (error) {
      console.log(error);
      toast.error("Unable to Delete Due To Error !");
    }
  };

  return (
    <div className="tablebooklist">
      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
      <button
        onClick={getBooks}
        className="btn btn-warning text-black text-uppercase fs-5 mb-4"
      >
        Refresh LIST
      </button>
      <div className="table-wrapper">
        <div className="table-responsive">
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
              {books.map((doc, index) => (
                <tr key={doc.id}>
                  <td data-label="Book ID">{index + 1}</td>
                  <td data-label="Book Name">{doc.bookname}</td>
                  <td data-label="Book Author">{doc.bookauthor}</td>
                  <td data-label="Book Status">{doc.bookstatus}</td>
                  <td data-label="Book Actions">
                    <button
                      className="table-btn"
                      onClick={() => {
                        getBookId(doc.id);
                      }}
                    >
                      <span className="mx-2 text-primary ">
                        <i className="fa-solid fa-pen-to-square table-icon"></i>
                      </span>
                    </button>
                    <button
                      className="table-btn"
                      onClick={(e) => {
                        deleteBookHandler(doc.id);
                      }}
                    >
                      <span className="mx-2 table-icon text-danger">
                        <i className="fa-solid fa-trash-can"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr>
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
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FetchBookData;
