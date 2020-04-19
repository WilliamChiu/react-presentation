import styled from "styled-components"

let Smaller = styled.div`
  pre {
    font-size: ${props => props.size || 1}rem;
  }
`

export default Smaller