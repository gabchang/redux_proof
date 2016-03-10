import React from 'react';
import ReactHighcharts from 'react-highcharts';

const ChartCard = ({ options={}, className='', children }) => (
  <div className={"card " + className}>
    <div className="card-img-top">
      <ReactHighcharts config={options}/>
    </div>
    <div className="card-block">
      { children }
    </div>
  </div>
);

const {
  string, object
} = React.PropTypes;

ChartCard.propTypes = {
  options: object,
};

export default ChartCard;
