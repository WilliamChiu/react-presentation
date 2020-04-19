import React from 'react'
import { useSteps } from 'mdx-deck'
import styled from "styled-components"

let Grades = styled.pre`
  margin: 0 1rem;
  display: inline;
`

let Container = styled.div`
  width: 25rem;
`

let Average = props => {
  const length = 4
  const step = useSteps(length)

  return (
    <Container>
      Average: {props.gradeAvgs[step]}
    </Container>
  )
}

let Changes = props => {
  const length = 4
  const step = useSteps(length)
  let result = step
  if (props.changes) result = props.changes[step]


  return (
    <Container>
      Changes: {result}
    </Container>
  )
}

export { Grades, Average, Changes }