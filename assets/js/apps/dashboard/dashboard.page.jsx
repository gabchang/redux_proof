import React from 'react';
import { Link } from 'react-router';
import Panel from './components/panel.comp.jsx';

// import { members } from './data/charts.js';
// import Highcharts from 'highcharts';
// import ReactHighcharts from 'react-highcharts';

const DashboardPage = () => (
  <article className="container dashboard">
    <header>
      <h1>
        Dashboard
      </h1>
    </header>
    <section>
      <Panel/>
    </section>
  </article>
)
// <Chart options={members}/>

export default DashboardPage;
