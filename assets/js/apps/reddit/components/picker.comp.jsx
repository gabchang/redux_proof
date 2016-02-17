import React from 'react';

const {
  string, func, arrayOf
} = React.PropTypes;

const Picker = ({ value, onChange, options = [] }) => (
  <span>
    <h1>{value}</h1>
    <select
      onChange={e => onChange(e.target.value)}
      value={value}>
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>
      )}
    </select>
  </span>
);

Picker.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  options: arrayOf(
    string.isRequired
  ).isRequired
};

export default Picker;
