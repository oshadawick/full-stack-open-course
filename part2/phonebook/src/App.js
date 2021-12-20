import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import directry from './services/directry'
import Notification from './components/Notification'



 
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setmessageType] = useState(null)


  useEffect((() => {
    directry
      .getAll()
      .then(response => {
        setPersons(response.data)
      })

  }), [])


  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        const obj = persons.filter(person => person.name === newName)
        const change = {...obj[0], number: newNumber}
        axios
          .put(`http://localhost:3001/persons/${obj[0]['id']}`, change)
          .then(()=> {
            directry
              .getAll()
              .then(response => {
                setPersons(response.data)
              })
          })
      }
    } else {
      const personObject = {
      name : newName,
      number: newNumber,
      id: persons[persons.length - 1]['id'] + 1
      }

      directry
        .create(personObject)
        .then((data) => {
          setMessage(`Added ${data['data']['name']}`)
          setmessageType('addMessage')
          console.log(message)
          setTimeout(() => {
            setMessage(null)
            setmessageType(null)
          }, 5000)
        })

      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewNumber('')
  }


  const removePerson = (id) => {
    const obj = persons.find(person => person['number'].toString() === id)
    if(window.confirm(`Delete ${obj['name']}`)) {
      directry
        .remove(obj['id'])
        .then(() => {
          directry
          .getAll()
          .then(response => {
            setPersons(response.data)
          })
        })
        .catch(error => {
          setMessage(`Information of ${obj['name']} has already been removed from server`)
          setmessageType('removeMessage')
          setTimeout(() => {
            setMessage(null)
            setmessageType(null)
          }, 5000)
        })
    }
    
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
      <Notification message={message} messageType={messageType}/>
      <Filter value={filteredName} change={handleFilter} />
      <h2>add a new</h2>
      <PersonForm submit={addPerson} valName={newName} valNumber={newNumber} changeName={handleNameChange} changeNumber={handleNumberChange} />
      <h2>Numbers</h2>
      <div>
      {showPersons().map(person => <Persons key={person.id} name={person.name} number={person.number}  remove={removePerson}/>)}
      </div>
    </div>
  )
}


export default App;