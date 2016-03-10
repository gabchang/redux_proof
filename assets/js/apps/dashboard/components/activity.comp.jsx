import React  from 'react';
import R      from 'ramda';
import moment from 'moment';

const Item = ({ icon="", title, subtitle="", by="", timestamp }) => (
  <div className="timeline-item">
    <div className="timeline-type">
      <small>
        <i className="mi">{icon}</i> {subtitle}
      </small>
    </div>
    <div className="timeline-event">
      <a>{title}</a>
    </div>
    <small className="timeline-info">
      by {by} - {moment(timestamp).format('LT')}
    </small>
  </div>
);

var i = 0;
const ItemGroup = ({ day, items }) => (
  <blockquote className="blockquote">
    <h6 className="timeline-day">{ moment(day).format('LL') }</h6>
    { R.map( item => <Item key={'item-'+(i++)} {...item}/>, items )}
  </blockquote>
);

const Activity = ({ items=[], className="" }) => (
  <div className={className}>
    { R.map( group => <ItemGroup key={group.day} {...group}/>, items )}
  </div>
);

const {
  string, array
} = React.PropTypes;

Activity.propTypes = {
  items: array,
  className: string
};

export default Activity;


/*
const Item = ({ icon="", title, subtitle="", by="", timestamp }) => (
  <div className="group-row">
    <div className="group-cell group-icon">
      <i className="mi">{icon}</i>
    </div>
    <div className="group-cell">
      <div className="group-cell-title">{title}</div>
      <div className="group-cell-subtitle">{subtitle}</div>
      <div className="group-cell-info">
        by {by} - {moment(timestamp).calendar()}
      </div>
    </div>
  </div>
);

var i = 0;
const ItemGroup = ({ day, items }) => (
  <div className="list-group-item">
    <div className="group-header">
      <div className="group-row">
        <div className="group-cell group-icon">
          <i className="mi text-info">lens</i>
        </div>
        <div className="group-cell">
          { moment(day).format('LL') }
        </div>
      </div>
    </div>
    { R.map( item => <Item key={'item-'+(i++)} {...item}/>, items )}
  </div>
);

const Activity = ({ items=[], className="" }) => (
  <div className={className}>
    <div className="list-group group-container">
      { R.map( group => <ItemGroup key={group.day} {...group}/>, items )}
    </div>
  </div>
);
 */
