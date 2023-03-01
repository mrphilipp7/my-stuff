import React from "react";

const FieldInput = (props) => {
  const {
    definePrefix,
    definePlaceholder,
    changeValue,
    defineValue,
    defineName,
    mLength,
    isNumber = false,
  } = props;

  const handleKeyDown = (e) => {
    if (isNumber) {
      if (
        e.key != 1 &&
        e.key != 2 &&
        e.key != 3 &&
        e.key != 4 &&
        e.key != 5 &&
        e.key != 6 &&
        e.key != 7 &&
        e.key != 8 &&
        e.key != 9 &&
        e.key != 0 &&
        e.key != "Backspace" &&
        e.key != "Delete" &&
        e.keyCode != 37 &&
        e.keyCode != 39
      ) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="input-box">
      <input
        value={defineValue}
        type="text"
        onKeyDown={handleKeyDown}
        onChange={changeValue}
        maxLength={mLength}
        name={defineName}
        required="required"
        className="p-4 b-3 bg-red-100"
      />
      <span>{definePlaceholder}</span>
    </div>
  );
};

export default FieldInput;
