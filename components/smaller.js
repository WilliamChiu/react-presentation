import styled from "styled-components"

let Smaller = styled.div`
  pre {
    font-size: ${props => props.size || 1}rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  p {
    font-size: 2rem;
  }

  ul {
    margin-top: 0;
  }

  a {
    font-size: 1.5rem;
    color: gray;
  }
`

export default Smaller