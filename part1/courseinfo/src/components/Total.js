import React from "react";

const Total = (props) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    return (
      <p>total of {props.arr.reduce(reducer)} exercises</p>
    )
}

export default Total;