import React from 'react'
import { imageUrl } from 'assets/images'
import { Image, StyleFlag, TextContent } from './styles'

const Flag = ({ country, isDisabled }) => {
  const { name, flag } = country

  return (
    <StyleFlag isDisabled={isDisabled}>
      <div>
        <Image src={`${imageUrl}/${flag}`} alt={name} />
      </div>
      <TextContent>
        <h1>{name}</h1>
      </TextContent>
    </StyleFlag>
  )
}

export default Flag
