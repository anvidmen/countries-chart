import React from 'react'
import { Image, StyleFlag } from './styles'

const Flag = ({ country, isDisabled }) => {
  const { name, flag } = country

  return (
    <StyleFlag isDisabled={isDisabled}>
      <div>
        <Image src={`${flag}`} alt={name} />
      </div>
      <div>
        <label>{name}</label>
      </div>
    </StyleFlag>
  )
}

export default Flag
