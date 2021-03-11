import styled from 'styled-components'
import Colors from 'theme/Colors'
import Device from 'theme/Responsive'

const StyledButton = styled.button`
    box-shadow: 0px 2px 4px #00000029;
    border: none;
    border-radius: 6px;
    opacity: 1;
    cursor: pointer;
    text-align: left;
    font: normal normal normal 16px/22px sans-serif;
    letter-spacing: 0px;
    width: 18rem;
    height: 2.6rem;
    margin:  0.5rem 0 0 0;
    text-align: center;
    outline: none;
    
    &.blueGradient {
        background: transparent
        linear-gradient(98deg, ${Colors.lightBlue} 0%, ${Colors.darkBlue} 100%) 0% 0% no-repeat;
        padding-box;
        color: ${Colors.fontColor};
    };
     &.orangeGradient {
        background: transparent
        linear-gradient(98deg, ${Colors.lightOrange} 0%, ${Colors.darkOrange} 100%) 0% 0% no-repeat;
        padding-box;
        color: ${Colors.fontColor};
    };
    &.disabled {
        cursor: not-allowed;
        opacity: 0.57;
    };
    &.animated {
        svg {
            animation: rotation 0.8s ease-in-out infinite;
        }
    };
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    };
    @media ${Device.mobile} {
        width: 16rem;
        height: 2.6rem;
    }

`

export default StyledButton
