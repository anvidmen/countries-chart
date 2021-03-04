import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledNavbar = styled.nav`
    background-color: ${Colors.bgColor};
    height: 4rem
`

export const Container = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 3rem;
    & > div {
        color: white
    }
`

export const Routes = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 4rem 0 0;

    & > div {
        color: black;
        background-color: white
    };

    & > button {
        width: 1rem;
        height: 2.5rem;
        color: white;
        margin: 0 2rem;

        & > span {
            width: 1rem;
            height: 2rem;
            & > svg {
                width: 2.5rem;
                height: 3rem;
            }
        };
        &:hover {
            color: ${Colors.hoverNav}
        }
    };


    & > a {
        display: flex;
        float: left;
        color:  ${Colors.fontColor};
        text-align: center;
        padding: 1rem 1rem;
        text-decoration: none;
        font: normal normal normal 20px sans-serif;

        & > svg {
                width: 2rem;
                height: 2rem;
        };

        &:hover {
            color: ${Colors.hoverNav}
        }
    };

`
