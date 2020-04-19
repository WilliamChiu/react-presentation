import React from "react"
import styled from "styled-components"

let PrettyContainer = styled.div`
  h1 {
    font-family: "Mont",sans-serif;
    font-weight: 700;
    line-height: 1.125;
  }

  button {
    font-family: "Mont",sans-serif;
    font-weight: 700;
    font-size: 2rem;
    background-color: #333;
    border: none;
    color: white;
    padding: 1rem;

    &:hover {
      background-color: #555;
    }
  }
`

class Lockdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: "April 15th, 2020"}
    this.updateDate = this.updateDate.bind(this) // Ignore for now
  }
  updateDate() {
    this.setState({date: "May 15th, 2020"})
  }
  render() {
    return <PrettyContainer>
      <h1>{this.state.date}</h1>
      <button onClick={this.updateDate}>Change Date</button>
    </PrettyContainer>
  }
}

export default Lockdown