import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Body from 'components/Body/Body'
import buildChart from 'utils/buildChart'
import { Container } from './styles'

const CountriesChart = ({ countries }) => {
  return (
    <Body title='Countries with your phone prefix'>
      <Container>
        <HighchartsReact highcharts={Highcharts} options={buildChart(countries)} />
      </Container>
    </Body>
  )
}

export default CountriesChart
