import React, { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / (props.good + props.neutral + props.bad)
  const positive = (props.good / all) * 100 + "%"

  if(all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
      <tbody>
      <tr><td><StatisticLine text = {"good"} value = {props.good} /></td></tr>
      <tr><td><StatisticLine text = {"neutral"} value = {props.neutral} /></td></tr>
      <tr><td><StatisticLine text = {"bad"} value = {props.bad} /></td></tr>
      <tr><td><StatisticLine text = {"all"} value = {all} /></td></tr>
      <tr><td><StatisticLine text = {"average"} value = {average} /></td></tr>
      <tr><td><StatisticLine text = {"positive"} value = {positive} /></td></tr>
      </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Button = (props) => {
  return(
    <button onClick={() => props.func(props.para + 1)}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button func = {setGood} para = {good} text = {'good'} />
      <Button func = {setNeutral} para = {neutral} text = {'neutral'} />
      <Button func = {setBad} para = {bad} text = {'bad'} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App;
