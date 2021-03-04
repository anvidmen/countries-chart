import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledInput = styled.input`
    width: 16rem;
    height: 1rem;
    border-radius: 5px;
    border: 1px solid #dddddd;
    display: block;
    font: normal normal normal 16px/20px sans-serif;
    font-size: 14px;
    color: #393939;
    padding: 0.8rem;

    &:focus {
      outline: none;
    };
   
    &.error {
      border: 1px solid ${Colors.redColor};
      color: #7d868b;
    }
     @media only screen and (max-width: 667px) {
        width: 14rem;
        height: 1rem;
    }
`
export const StyledError = styled.small`
    color: #e74c3c;
    position: absolute;
    left: 0;
    visibility: visible;

    &.errorProfile {
      position: static;
    }
`
