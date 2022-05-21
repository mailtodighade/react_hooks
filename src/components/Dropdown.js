import React, { useState } from "react";

const Dropdown = ({ options, onSelectedChange, selected }) => {
  const [open, setOpen] = useState(false);

  const renderOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        onClick={() => {
          onSelectedChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  console.log(open, "line 23");

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">select country:</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
