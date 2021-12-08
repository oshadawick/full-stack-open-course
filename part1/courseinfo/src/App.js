import React from 'react'
import Course from './components/Course'
import Header from './components/Header'
import Total from './components/Total'


const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <Header name={courses[0].name} />
      {courses[0]['parts'].map(course => <Course name={course.name} number={course.exercises} key={course.id}/>)}
      <Total arr={courses[0]['parts'].map(course => course['exercises'])} />
      <Header name={courses[1].name} />
      {courses[1]['parts'].map(course => <Course name={course.name} number={course.exercises} key={course.id}/>)}
      <Total arr={courses[1]['parts'].map(course => course['exercises'])} />
    </div>
  )
}

export default App;
