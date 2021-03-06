import React from 'react'
import Flag from 'views/Flag/Flag'
import Body from 'components/Body/Body'
import { Container, ErrorMessage } from './styles'

const Countries = ({ latinCountries, user }) => {
  const { userCountry } = user
  const isFlagDisabled = country => userCountry && userCountry !== country.name

  return (
    <Body title='Latin American countries'>
      <Container>
        {(!latinCountries || latinCountries.length === 0) &&
          <ErrorMessage>No countries found</ErrorMessage>}
        {latinCountries.map((country, index) => (
          <Flag key={index} country={country} isDisabled={isFlagDisabled(country)} />
        ))}
      </Container>
    </Body>
  )
}

export default Countries
