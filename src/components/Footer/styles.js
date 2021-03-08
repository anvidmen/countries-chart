import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0;
    background-color: ${Colors.bgColor};
    color: ${Colors.fontColor};
    
    @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
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
    font: normal normal normal 14px sans-serif;
 
    & h2 {
        padding: 1rem;
        font: normal normal normal 22px/24px sans-serif;
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

     @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
    border-top: 1px solid white;
    font: normal normal normal 15px/17px sans-serif;

    & > a {
        margin: 0 0.4rem;
        color: ${Colors.hoverNav};
        &:hover {
            text-decoration: none;
            color: white
        }
    };

     @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`
