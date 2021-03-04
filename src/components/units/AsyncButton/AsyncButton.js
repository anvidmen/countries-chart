import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import StyledButton from './styles'

const AsyncButton = ({
  type, text, loadingText, isLoading, disabled, icon, iconPosition,
  className, buttonStyles, textStyles, iconStyles, animated
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      className={`${className} ${animated ? 'animated' : ''} ${disabled ? 'disabled' : ''}`}
      style={{ ...buttonStyles }}
    >
      {iconPosition === 'left' && isLoading
        ? <FontAwesomeIcon icon={faSpinner} style={{ ...iconStyles }} /> : icon
          ? <FontAwesomeIcon icon={icon} style={{ ...iconStyles }} /> : null}
      <span style={{ ...textStyles }}>{isLoading ? loadingText : text}</span>
      {iconPosition === 'right' && isLoading
        ? <FontAwesomeIcon icon={faSpinner} style={{ ...iconStyles }} /> : icon
          ? <FontAwesomeIcon icon={icon} style={{ ...iconStyles }} /> : null}
    </StyledButton>
  )
}

export default AsyncButton
