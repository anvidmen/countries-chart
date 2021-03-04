import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal normal normal 26px/32px sans-serif;
    letter-spacing: 0px;
    color: ${Colors.fontColor};
    background: var(--unnamed-color-e6f2f2) 0% 0% no-repeat padding-box;
    background: ${Colors.bgHead} 0% 0% no-repeat padding-box;
    opacity: 1;
    border: 1px solid #b5dddd;
    height: 5rem;
`
