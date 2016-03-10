import React from 'react';
import Case from './chart.case.jsx';
import Card from './chart.card.jsx';
import Activity from './activity.comp.jsx';

import {
  chartOptions, members, storage,
  moduleCompleted, connections, quizzSuccess
} from '../data/charts';
import { activity } from '../data/activity';

const Panel = () => (
  <div>
    <div className="row">

      <div className="col-sm-8">
        <h4>Your pack</h4>
        <div className="row">
          <div className="col-sm-4">
            <Case className="dashboard-case" options={chartOptions('area', "#4DD0E1", members)}/>
          </div>
          <div className="col-sm-4">
            <Case className="dashboard-case" options={chartOptions('area', "#FF8A65", storage)}/>
          </div>
          <div className="col-sm-4">
          </div>
        </div>

        <h4 className="m-t-1">Activity</h4>
        <div className="row">
          <div className="col-sm-4">
            <Card className="dashboard-case" options={chartOptions('area', "#FFD54F", moduleCompleted)}/>
          </div>
          <div className="col-sm-4">
            <Card className="dashboard-case" options={chartOptions('donut', "#9575CD", quizzSuccess)}/>
          </div>
          <div className="col-sm-4">
            <Card className="dashboard-case" options={chartOptions('area', "#DCE775", connections)}/>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <h5>What's new ?</h5>
        <Activity className="dashboard-case timeline timeline-vertical" items={activity()}/>
      </div>

    </div>
  </div>
);
//
// <ReactHighcharts config={members}></ReactHighcharts>
// const {
//   string, object
// } = React.PropTypes;

// Panel.propTypes = {
//   options: object,
// };

export default Panel;
