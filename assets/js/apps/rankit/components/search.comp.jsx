import React from 'react';

const {
  string, func
} = React.PropTypes;

let input;

const Search = ({ onSubmit, value="", placeholder='Search OMDb' }) => (
  <span>
    <h1>{value}</h1>
    <form onSubmit={ e => { e.preventDefault(); onSubmit(input.value); } }>
      <div className="input-group">
        <input
          ref={ node => { input = node; }}
          type="search"
          className="form-control"
          placeholder={placeholder}
          defaultValue={value}/>
        <span className="input-group-addon">
          <i className="mi">search</i>
        </span>
      </div>
    </form>
  </span>
);

Search.propTypes = {
  onSubmit   : func.isRequired,
  value      : string,
  placeholder: string
};

export default Search;
