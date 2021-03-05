import styled from 'styled-components'

export const Routes = styled.div`
    display: flex;
    padding: .5rem 1rem;

    & > a {
        color: rgba(255,255,255,.5);
        padding-right: .5rem;
        padding-left: .5rem;
        text-decoration: none;

        &:hover {
            color: white;
            text-decoration: none;
        }
    };

    @media only screen and (max-width: 468px) {
        display: flex;
        flex-direction: column;
        padding: .5rem 1rem;
        padding-right: 0;
    }
`
