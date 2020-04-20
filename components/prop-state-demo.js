import React from "react"
import styled from "styled-components"

const StyledButton = styled.div`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: ${props => props.color};
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
        filter: brightness(50%);
    }
`

const ButtonWrapper = styled.div`
    border: 1px solid red;
    padding: 10px;
    font-size: 2rem;
`

class Button extends React.Component {
    constructor(props) {
        super(props) // Call React.Component constuctor
        this.state = { // Define initial state
            color: "green"
        }
        this.isClicked = this.isClicked.bind(this)
    }
    isClicked() {
        if (this.state.color == "green") {
            this.setState({color: "red"})
        } else {
            this.setState({color: "green"})
        }
    }
    render() {
        return <ButtonWrapper>
            Child Component
            <StyledButton color={this.state.color} onClick={this.isClicked}>
                {this.props.buttontext}
            </StyledButton>
        </ButtonWrapper>
    }
}

const PropStateDemoWrapper = styled.div`
    border: 1px solid blue;
    padding: 10px;
    font-size: 2rem;
`

const InputField = styled.input`
    font-size: 1.25rem;
    font-family: inherit;
    height: 2rem;
    border: 2px solid lightgray;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.4);
    display: block;
    margin: 10px;
`

class PropStateDemo extends React.Component {
    constructor(props) {
        super(props) // Call React.Component constuctor
        this.state = { // Define initial state
            buttontext: "Hello!"
        }
        this.inputChange = this.inputChange.bind(this)
    }
    inputChange(event) {
        this.setState({buttontext: event.target.value})
    }
    render() {
        return <PropStateDemoWrapper>
            Parent Component
            <InputField type="text" value={this.state.buttontext} onChange={this.inputChange} />
            <Button buttontext={this.state.buttontext}/>
        </PropStateDemoWrapper>
    }
}

export default PropStateDemo