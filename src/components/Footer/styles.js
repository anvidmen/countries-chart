import styled from 'styled-components'
import Colors from 'theme/Colors'
import Divice from 'theme/Responsive'

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0;
    background-color: ${Colors.bgColor};
    color: ${Colors.fontColor}
`

export const Container = styled.div`
    display: block;
    margin: 0;
    width: 80%    
`

export const Information = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 1rem;

    & h2 {
        padding: 1rem;
        font: normal normal normal 24px sans-serif;
    };

    & p {
        font: normal normal normal 16px sans-serif;
    };

    & > a {
        margin: 0.5rem;
        color: inherit;
        
        & > div {
            color: ${Colors.darkBlue};

            &:hover {
                color: black;
            }
        }
        &:hover {
            text-decoration: none;
            color: ${Colors.hoverNav}
        }
    };

    @media ${Divice.mobile} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;

        & h2 {
            padding: 0.5rem;
            font: normal normal normal 20px sans-serif;
        }
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
    border-top: 1px solid white;
    font: normal normal normal 14px sans-serif;

    & > a {
        margin: 0 0.4rem;
        color: ${Colors.hoverNav};
        &:hover {
            text-decoration: none;
            color: white
        }
    };

    @media ${Divice.mobile} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font: normal normal normal 14px sans-serif;
    }
`
