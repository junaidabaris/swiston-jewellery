// InputField.js
import React, { useState } from 'react';

const InputField = ({ type, placeholder, title, value, onChange, name }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onChange({ [name]: value }); // Pass only the updated input value
  };

  return (
    <label className='row p-2'>
      <span className='col-4 fw-bold'>{title} : -</span>{' '}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className='col-8 p-2 border border-dark rounded'
        required 
      />
    </label>
  );
};

export default InputField;
