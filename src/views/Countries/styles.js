import styled from 'styled-components'

export const Container = styled.div`
    display: flex;    
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 667px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1rem
    }
`
