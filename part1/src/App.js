import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name[0]['name']} number={props.name[0]['exercises']}/>
      <Part name={props.name[1]['name']} number={props.name[1]['exercises']}/>
      <Part name={props.name[2]['name']} number={props.name[2]['exercises']}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.number[0]['exercises'] + props.number[1]['exercises'] + props.number[2]['exercises']}</p>
  )
}

const App = () => {

  const course = { 
    name :'Half Stack application development',
    part : [ {
      name : 'Fundamentals of React',
      exercises: 10
    },
    {
      name : 'Using props to pass data',
      exercises: 7
    },
    {
      name : 'State of component',
      exercises: 14
    }]
  }  
  return (
    <div>
      <Header name={course['name']} />
      <Content name={course['part']}/>
      <Total number={course['part']}/>
    </div>
  )
}

export default App;
