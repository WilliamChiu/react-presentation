import React from "react"
import styled from "styled-components"

let StyledSanic = styled.img`
  vertical-align: middle;
  max-height: 4rem;
`

let Sanic = props => <StyledSanic src="./sanic.png"/>

export default Sanic