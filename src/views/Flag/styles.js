import styled from 'styled-components'
import Colors from 'theme/Colors'
import Device from 'theme/Responsive'

export const StyleFlag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${prop => prop.isDisabled ? Colors.bgDisabledCard : Colors.bgCard} 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 1px 3px 6px 3px #00000039;
    overflow: hidden;
    width: 14rem;
    margin: 1rem;
    padding: 0.5rem;
    font: normal normal normal 16px sans-serif;

    @media ${Device.mobile} {
        width: 7rem;
        height: 7rem;
        margin: 0.5rem;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`
