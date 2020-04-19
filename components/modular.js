import React from "react"
import styled from "styled-components"

let ModularExampleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    font-size: 2rem;
  }
`

let Image = styled.img`
  width: 3rem;
`

let Photo = function(props) {
  let url = props.url
  return <Image src={url}/>
}

let Bio = function(props) {
  let name = props.name
  let age = props.age
  let hobbies = props.hobbies
  let last = hobbies.length - 1
  hobbies[last] = "and " + hobbies[last]
  return <p>
    {name} is {age} years old
    and likes {hobbies.join(", ")}
  </p>
}

let Posts = function(props) {
  let posts = props.posts
  let result = []
  for (let i = 0; i < posts.length; i++) {
    result.push(<div>{posts[i]}</div>)
  }
  return result
}

let Blog = function(props) {
  return <div>
    <Photo url="./sanic.png"/>
    <Bio name="Billy" age="21" hobbies={["reading", "bouldering", "memeing"]}/>
    <Posts posts={["i like apples", "i like sonic", "i miss school"]}/>
  </div>
}

export {ModularExampleContainer, Blog}