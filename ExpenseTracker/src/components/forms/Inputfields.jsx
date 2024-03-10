import React from "react";

function Inputfields({ label, id, name, value, onChangeHandle, errorMessg }) {
  return (
    <div className="input-container">
      <label className="inputlabel" htmlFor={id}>
        {label}
      </label>
      <input id={id} name={name} value={value} onChange={onChangeHandle} />
      <p className="errorDisplay">{errorMessg}</p>
    </div>
  );
}

export default Inputfields;
