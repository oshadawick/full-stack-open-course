import React from "react";


const Persons = (props) => {
    return (
            <div>
                {props.name} {props.number} <button value={props.number} onClick={e => props.remove(e.target.value)}>delete</button>
            </div>
    )
}


export default Persons