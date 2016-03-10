import React from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';

const Chart = ({ options={}, className='' }) => (
  <div className={className}>
    <ReactHighcharts config={options}/>
    </div>
);

const {
  string, object
} = React.PropTypes;

Chart.propTypes = {
  options: object,
};

export default Chart;
