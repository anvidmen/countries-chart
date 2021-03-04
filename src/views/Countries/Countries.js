import React from 'react'
import Flag from 'views/Flag/Flag'
import Body from 'components/Body/Body'
import { Container } from './styles'

const Countries = ({ latinCountries, user }) => {
  const { userCountry } = user
  const isFlagDisabled = country => userCountry && userCountry !== country.name

  return (
    <Body title='Latin American countries'>
      <Container>
        {latinCountries.map(country => (
          <Flag key={country.country_code} country={country} isDisabled={isFlagDisabled(country)} />
        ))}
      </Container>
    </Body>
  )
}

export default Countries
