import styled from 'styled-components'
import Colors from 'theme/Colors'
import Device from 'theme/Responsive'

export const StyledHeader = styled.header`
    margin-top: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal normal normal 26px sans-serif;
    letter-spacing: 0px;
    color: ${Colors.fontColor};
    background: var(--unnamed-color-e6f2f2) 0% 0% no-repeat padding-box;
    background: ${Colors.bgHead} 0% 0% no-repeat padding-box;
    opacity: 1;
    border-top: 1px solid #b5dddd;
    height: 4rem;

    @media ${Device.mobile} {
        font: normal normal normal 20px sans-serif;
    }
`
