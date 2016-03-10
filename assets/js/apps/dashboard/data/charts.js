// import Highcharts from 'highcharts';
import R from 'ramda';
import { area, donut } from './charts.defaults';

const defaults = {
  'area': area,
  'donut': donut
}

export const chartOptions = (type, color = "#FFFFFF", options = {}, light=false) => {
  var def    = defaults[type],
      height = options.chart && options.chart.height;
  return R.mergeWith(R.merge, def(color, light, height), options);
}

/**
 * Member chart specific data
 * @type {Object}
 */
export const members = {
  chart:    { height: 100 }, //backgroundColor: gradient("#4DD0E1") },
  title:    { text: "188/500"   },
  subtitle: { text: "Members"  },
  xAxis:    { type: "datetime" },
  series: [{
    name: "Active members",
    data: [
      [Date.UTC(2016, 3, 1), 29 ],
      [Date.UTC(2016, 3, 2), 71 ],
      [Date.UTC(2016, 3, 3), 106],
      [Date.UTC(2016, 3, 7), 144],
      [Date.UTC(2016, 3, 8), 176],
      [Date.UTC(2016, 3, 14),136],
      [Date.UTC(2016, 3, 16),152],
      [Date.UTC(2016, 3, 24),188]
    ]
  }]
}

/**
 * Storage chart specific data
 * @type {Object}
 */
export const storage = {
  chart:    { height: 100 }, //backgroundColor: gradient("#FF8A65") },
  title:    { text: "0.56/3Go"   },
  subtitle: { text: "Storage"  },
  xAxis:    { type: "datetime" },
  series: [{
    name: "Storage used",
    data: [
      [Date.UTC(2016, 3, 1), 0],
      [Date.UTC(2016, 3, 4), 0.02],
      [Date.UTC(2016, 3, 9), 0.12],
      [Date.UTC(2016, 3, 11),0.22],
      [Date.UTC(2016, 3, 12),0.20],
      [Date.UTC(2016, 3, 13),0.28],
      [Date.UTC(2016, 3, 16),0.49],
      [Date.UTC(2016, 3, 24),0.56]
    ]
  }]
}

export const moduleCompleted = {
  chart:    { height: 150 }, //backgroundColor: gradient("#FFD54F") },
  title:    { text: "Steps"   },
  subtitle: { text: "achieved"  },
  xAxis:    { type: "datetime" },
  series: [{
    name: "Achived steps",
    data: [
      [Date.UTC(2016, 3, 1), 0],
      [Date.UTC(2016, 3, 8), 15],
      [Date.UTC(2016, 3, 9), 27],
      [Date.UTC(2016, 3, 10),58],
      [Date.UTC(2016, 3, 12),7],
      [Date.UTC(2016, 3, 13),2],
      [Date.UTC(2016, 3, 18),17],
      [Date.UTC(2016, 3, 24),2]
    ]
  }]
}

export const connections = {
  chart:    { height: 150 }, //backgroundColor: gradient("#DCE775") },
  title:    { text: "Connections"   },
  subtitle: { text: "(per day)"  },
  xAxis:    { type: "datetime" },
  series: [{
    name: "Connections",
    data: [
      [Date.UTC(2016, 3, 1),  0],
      [Date.UTC(2016, 3, 2),  4],
      [Date.UTC(2016, 3, 3),  7],
      [Date.UTC(2016, 3, 4),  8],
      [Date.UTC(2016, 3, 5), 19],
      [Date.UTC(2016, 3, 7),  7],
      [Date.UTC(2016, 3, 8), 37],
      [Date.UTC(2016, 3, 9), 67],
      [Date.UTC(2016, 3, 10),123],
      [Date.UTC(2016, 3, 11), 2],
      [Date.UTC(2016, 3, 12),22],
      [Date.UTC(2016, 3, 13),11],
      [Date.UTC(2016, 3, 14),25],
      [Date.UTC(2016, 3, 15), 9],
      [Date.UTC(2016, 3, 16),12],
      [Date.UTC(2016, 3, 17), 1],
      [Date.UTC(2016, 3, 18),48],
      [Date.UTC(2016, 3, 19),32],
      [Date.UTC(2016, 3, 20),22],
      [Date.UTC(2016, 3, 21), 3],
      [Date.UTC(2016, 3, 22), 3],
      [Date.UTC(2016, 3, 24), 9]
    ]
  }]
}

export const quizzSuccess = {
  chart:    { height: 150 }, //backgroundColor: gradient("#9575CD") },
  title:    { text: "Success rate" },
  subtitle: { text: "86%"  },
  // xAxis:    { type: "datetime" },
  series: [{
    name: 'Number',
    data: [
      ['Succeeded', 3867],
      ['Failed',    643],
    ]
  }]
}
