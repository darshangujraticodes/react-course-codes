import React from "react";

function SelectField({
  label,
  id,
  name,
  value,
  onChangeHandle,
  options,
  errorMessg,
}) {
  return (
    <div className="input-container">
      <label className="inputlabel" htmlFor={id}>
        {label}
      </label>
      <select id={id} name={name} value={value} onChange={onChangeHandle}>
        <option value="" hidden>
          Select {label}
        </option>
        {options.map((optionItem, index) => (
          <option key={index} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </select>
      <p className="errorDisplay">{errorMessg}</p>
    </div>
  );
}

export default SelectField;
