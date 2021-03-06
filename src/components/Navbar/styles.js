import styled from 'styled-components'
import Device from 'theme/Responsive'

export const Routes = styled.div`
    display: flex;
    padding: .5rem 1rem;
    flex-direction: row;

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

    @media ${Device.mobile} {
        display: flex;
        padding: .5rem 1rem;
        padding-right: 0;
    }
`
