import styled from 'styled-components'
import Colors from 'theme/Colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.bgCard} 0% 0% no-repeat padding-box;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  overflow: hidden;
  width: 22rem;
  height: 18rem;
  margin: 1rem;
  
  @media only screen and (max-width: 667px) {
        width: 19rem;
        margin: 1rem;
    }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  & > .classInput {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      
      & > .MuiSvgIcon-root {
        width: 2rem;
       height: 2rem;
      }
  }
`

export const StyleRedirect = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 0 0;
  
  & > a {
    text-decoration: none;
    color: #7d868b;
    margin: 0 0 0 0.2rem;
  }

  & > a:hover {
    color: blue;
  }
`
