import React from "react";

function ReactjsLessons({
  studName,
  studStream = "Commerce",
  studDream,
  hscCompleted = false,
}) {
  //   console.log(studName, studStream, studDream, hscCompleted);

  return (
    <div className="InfoWrapper d-flex justify-content-start align-items-start">
      {/* React Component Props Course Lesson */}
      <div className="PropsWrapper ">
        <ul className="text-start">
          <li>Student Name : {studName} </li>
          <li>Student Stream : {studStream} </li>
          <li>Student Dream : {studDream} </li>
          <li>
            <input
              type="checkbox"
              checked={hscCompleted}
              id="hscData"
              className="mr-2"
              readOnly
            />
            <label htmlFor="HSC Completed" style={{ marginLeft: "10px" }}>
              HSC Completed
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReactjsLessons;
