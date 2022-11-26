import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() < 1) return;

    // props.setCategories((categories) => [inputValue, ...categories]);
    props.onNewValue(inputValue.trim());

    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
