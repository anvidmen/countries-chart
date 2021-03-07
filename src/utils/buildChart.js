import { imageUrl } from 'assets/images/index'

const getData = countries => {
  return countries.map(({ name, phonePrefix }) => {
    return {
      name: name,
      y: parseInt(phonePrefix.slice(1), 10),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }
  })
}

const buildChart = countries => {
  const max = countries.length
  return {
    chart: {
      type: 'column',
      scrollablePlotArea: {
        minWidth: 2000,
        scrollPositionX: 1
      },
      width: 1800
    },
    title: {
      text: null
    },
    xAxis: {
      type: 'category',
      max: max,
      labels: {
        useHTML: true,
        animate: true,
        formatter: function ({ value }) {
          if (value === countries.length) return

          const { flag } = countries.find(country => country.name === value)
          return '<span><img src="' + imageUrl + flag + '" style="width: 2rem; height: 2rem;"/></span>'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'Phone prefix'
      },
      max: 1000,
      showFirstLabel: false
    }],
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        grouping: false,
        borderWidth: 0
      }
    },
    tooltip: {
      shared: true,
      headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: +<b>{point.y}</b><br/>'
    },
    series: [{
      name: 'Prefix',
      id: 'main',
      dataSorting: {
        enabled: true,
        matchByName: true
      },
      dataLabels: [{
        enabled: true,
        inside: true,
        style: {
          fontSize: '1rem'
        }
      }],
      data: getData(countries)
    }]
  }
}

export default buildChart
