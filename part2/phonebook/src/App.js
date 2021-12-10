import React, {useState} from 'react'

const Persons = (props) => {
  return (
    <div>{props.name} {props.number}</div>
  )
}

const Filter = (props) => {
  return (
    <div>filter shown with <input value={props.value} onChange={props.change}/></div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div>
          name: <input value={props.valName} onChange={props.changeName}/>
        </div>
        <div>
          number: <input value={props.valNumber} onChange={props.changeNumber}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
    </form>
  )
}
 
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    const personObject = {
      name : newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const showPersons = () => {
    if(filteredName === "") return persons
    return (persons.filter(person => (person.name.toLowerCase().indexOf(filteredName.toLowerCase())) > -1)) 
  } 

  

  return (  
    <div>
      <h2>Phonebook</h2>
      <Filter value={filteredName} change={handleFilter} />
      <h2>add a new</h2>
      <PersonForm submit={addPerson} valName={newName} valNumber={newNumber} changeName={handleNameChange} changeNumber={handleNumberChange} />
      <h2>Numbers</h2>
      <div>
      {showPersons().map(person => <Persons key={person.id} name={person.name} number={person.number}/>)}
      </div>
    </div>
  )
}


export default App;
