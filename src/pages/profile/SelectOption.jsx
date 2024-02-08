import React from 'react';

const SelectOption = ({ title, value, name, valueD, onChange }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onChange({ [name]: selectedValue });
    console.log(value)

  };

  return (
    <div className='row p-2'>
      <span className='col-4 fw-bold'>{title} :- </span>
      <select
        className='col-8 p-2 rounded border border-dark'
        value={valueD}
        onChange={handleChange}
        name={name}
      >
        {value &&
          value.map((item) => (
            <option value={item.value} key={item.id}>
              {item.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectOption;
