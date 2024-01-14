import { useState, useRef } from "react";

function ArrayOprHooks() {
  const initialState = ["A", "B", "C", "D", "E", "F", "G"];
  const [charArray, setCharArray] = useState(initialState);
  const remTypeChar = useRef(null);
  const insertTypeCharStart = useRef(null);
  const insertTypeCharEnd = useRef(null);
  const [expNum, setExpNum] = useState(1);
  const [devName, setDevName] = useState("");

  function removeFirstValue() {
    if (charArray.length > 0) {
      setCharArray((currentArray) => currentArray.slice(1));
    } else {
      alert("Array is Empty !");
    }

    // arrayValue.pop[0];
    // setCharArray(arrayValue[0].pop());
    // console.log("Array First ELement Removed !!", arrayValue.shift());
    // let charVal = charArray.shift();
    // for (let i in charArray) {
    //   console.log(i, charArray[i]);
    //   if (charArray[i] == charVal) {
    //     charArray.splice(i, 1);
    //     setCharArray(charArray);
    //     console.log(charArray);
    //   }
    // }
  }

  function clearArray() {
    // arrayValue.length = 0;
    setCharArray([]);
    console.log(charArray);
  }

  function resetArray() {
    // let arrayValue = ["A", "B", "C", "D", "E", "F", "G"];
    setCharArray(initialState);
    console.log(arrayValue);
  }

  function removeTypeLetter() {
    let charVal = remTypeChar.current.value;
    let newArr = charArray.filter((element) => element !== charVal);
    setCharArray(newArr);
    // for (let i in charArray) {
    //   console.log(i, charArray[i]);
    //   if (charArray[i] == charVal) {
    //     let newarr = charArray.splice(i, 1);
    //     setCharArray(charArray);
    //     console.log(charArray);
    //   }
    // }

    // setCharArray(currentArray.filter() );
    // console.log(charArray.filter((element) => element !== charVal));
  }

  function insertCharStart() {
    // console.log("btn clickdedd");
    let charVal = insertTypeCharStart.current.value;
    let newarr = [charVal, ...charArray];
    setCharArray(newarr);
    // setCharArray((currentArray) => currentArray.unshift(charVal));
  }

  function insertCharEnd() {
    let charVal = insertTypeCharEnd.current.value;
    let newarr = [...charArray, charVal];
    setCharArray(newarr);
  }

  function subtractExp() {
    if (expNum > 0) {
      setExpNum(expNum - 1);
    }
    if (expNum == 0 || expNum < 0) {
      alert(` ${devName} is a Fresher in Development Field `);
    }
  }

  function addExp() {
    setExpNum(expNum + 1);
  }

  return (
    <div className="array-opr-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="array-project-test text-center">
              <h3>Array Operation using useState() Hook</h3>
              {/*           
                1] create state that store initial value ["a","b","c","d"]
                2] Add the ability to remove first element from the array
                3] Add the ability to remove specific letter element from the
                  array
                4] Add the ability to insert element at the beginning of the
                  array
                5] Add the ability to insert element in the end of the array.
                6] Add the ability to clear all array values
                7] Add the ability to reset the array to the inital Value. 
            */}

              <h4 className="my-4">Array Values = {charArray} </h4>
              <div className="btn-collection">
                <div className="row">
                  <div className="col-4 my-3">
                    <button
                      className="btn btn-primary "
                      onClick={removeFirstValue}
                    >
                      Remove First Element From Array
                    </button>
                  </div>
                  <div className="col-4 my-3">
                    <button className="btn btn-primary " onClick={clearArray}>
                      Clear All Array Values
                    </button>
                  </div>
                  <div className="col-4 my-3">
                    <button className="btn btn-primary " onClick={resetArray}>
                      Reset the Array with Inital Values
                    </button>
                  </div>
                  <div className="col-4 my-3">
                    <input
                      type="text"
                      placeholder="type the letter"
                      ref={remTypeChar}
                      className="w-100"
                    />
                    <button
                      className="btn btn-primary mt-2"
                      onClick={removeTypeLetter}
                    >
                      Remove this Input Letter from Array
                    </button>
                  </div>
                  <div className="col-4 my-3">
                    <input
                      type="text"
                      ref={insertTypeCharStart}
                      placeholder="type the letter"
                      className="w-100"
                    />
                    <button
                      className="btn btn-primary mt-2"
                      onClick={insertCharStart}
                    >
                      Insert this input Letter in the beginning
                    </button>
                  </div>
                  <div className="col-4 my-3">
                    <input
                      type="text"
                      ref={insertTypeCharEnd}
                      placeholder="type the letter"
                      className="w-100"
                    />
                    <button
                      className="btn btn-primary mt-2"
                      onClick={insertCharEnd}
                    >
                      Insert this input Letter in the End
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className=" onchange-event-project col-12 ">
            <h3 className="text-start mb-4">
              Name and age Display [useState() Practise]
            </h3>
            <div className="col-md-6 d-flex text-start my-3 d-flex flex-column bd-highlight">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-100"
                value={devName}
                onChange={(e) => setDevName(e.target.value)}
              />
              <div className="my-3 text-start ">
                <button className="mx-3" onClick={subtractExp}>
                  -
                </button>
                <label htmlFor=""> Work Experience = {expNum} </label>
                <button className="mx-3" onClick={addExp}>
                  +
                </button>
              </div>
              <h4>
                {`Hii, My Name is ${devName} and I am Full Stack Developer with ${expNum} years of Experience.  `}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArrayOprHooks;
