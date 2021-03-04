import React from 'react'
import { StyledError, StyledInput } from './styles'

const Input = ({
  type, placeholder, ref, value, onChange, onFocus, onBlur,
  className, id, name, minlength, errorText, error, disabled
}) => {
  return (
    <div>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        className={`${className} ${error ? 'error' : ''}`}
        id={id}
        name={name}
        disabled={disabled}
        minLength={minlength}
      />
      <StyledError
        dangerouslySetInnerHTML={{ __html: error ? errorText : null }}
        className={className}
      />
    </div>
  )
}

export default Input
