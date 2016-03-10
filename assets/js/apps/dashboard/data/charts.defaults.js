import Highcharts from 'highcharts';
import R from 'ramda';

export const gradient = (color = '#FFFFFF', to = '100%', startOpacity= 1, endOpacity = 0) => {
   return {
      linearGradient: [0, 0, 0, to],
      stops: [
          [0, Highcharts.Color(color).setOpacity(startOpacity).get('rgba')],
          // [1, Highcharts.Color(color).setOpacity(0.8).get('rgba')]
          [1, Highcharts.Color(color).setOpacity(endOpacity).get('rgba')]
      ]
    }
}

const tooltip = {
   backgroundColor: "rgba(0, 0, 0, 0.7)",
   style: { color: "#FFFFFF" },
   borderRadius: 5,
   borderWidth: 0,
   shadow: false
};

const credits = {
  enabled: false
};

const legend = {
  enabled: false
}

const title = {
  floating: true,
  style: { color: "#FFFFFF" },
  align: 'left',
  y: -15,
  x: 10
}

const subtitle = {
  floating: true,
  style: { color: "#FFFFFF" },
  align: 'left',
  x: 10,
  y: 5
}

/**
 * Default options for an area chart
 * (to be included in an element with a background color as all text/series are white)
 * @type {Object}
 */
export const area = (color, light, height) => {
  var back   = light ? gradient("#FAFAFA", '100%', 0.2, 0) : gradient(color, '100%', 1, 0.8),
      values = light ? color : "#FFFFFF",
      text   = light ? "#666666" : "#FFFFFF",
      gradTo = height ? (height-40) : '80%';

  return {
    title : R.merge(title, { style: { color: text } } ),
    subtitle : R.merge(subtitle, { style: { color: text } } ),
    tooltip,
    legend,
    credits,
    chart: {
      type: 'area',
      borderRadius: 2,
      backgroundColor: back,
      spacing: [40,-2, -1,-2],
      zoomType: 'x'
    },
    colors: [ values ],
    xAxis: {
      lineWidth: 0,
      tickWidth: 0,
      showFirstLabel: false,
      showLastLabel: false,
      labels: { y: -10, style: { color: text } },
      offset: 0
    },
    yAxis: {
      visible: false,
      min: 0,
      endOnTick: false,
      labels: { style: { color: text } }
    },
    plotOptions: {
      area: {
        marker: { enabled: false },
        fillColor: gradient(values, gradTo, light ? 0.4 : 0.6, light ? 0.2 : 0)
      }
    }
  };

}

export const donut = (color, light) => {
    var back   = light ? "#FFFFFF" : gradient(color, '100%', 1, 0.8),
        values = light ? color : "#FFFFFF",
        text   = light ? "#666666" : "#FFFFFF",
        colors = [
          Highcharts.Color(values).setOpacity(light ? 0.6 : 0.8).get('rgba'),
          Highcharts.Color(values).setOpacity(light ? 0.1 : 0.3).get('rgba')
        ];

  return {
    title : R.merge(title, { style: { color: text } } ),
    tooltip,
    legend,
    credits,
    subtitle: {
      align: 'center',
      verticalAlign: 'middle',
      style: { color: text, fontSize: '2.5em' },
      y: 10
    },
    chart: {
      type: 'pie',
      borderRadius: 2,
      backgroundColor: back,
      spacing: [40,-2, -1,-2]
    },
    colors: colors,
    plotOptions: {
      pie: {
        size: '80%',
        innerSize: '80%',
        borderWidth: 0,
        dataLabels: { enabled: false },
      }
    },
  };
}
