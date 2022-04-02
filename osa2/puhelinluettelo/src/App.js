import { useState, useEffect } from 'react'
import Person from './components/Person'
import axios from 'axios'

import personService from './services/customers'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [addMessage, setAddMessage] = useState(null)


  const toggleDeleteOf = person => {
    if(window.confirm(`Delete ${person.name} ?`)){
    const id = person.id
    axios
      .delete(`/api/persons/${id}`)
      .then(() => console.log('delete succesful'))
    } 
  }

  useEffect(() => {
    personService
      .getAll()
        .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    console.log(nameObject.name)
    console.log(persons.includes(nameObject.name))

    if (persons.some(person => person['name'] === newName) === true) {
      window.alert(nameObject.name + " is already added to phonebook")
    } else {
      personService
        .create(nameObject)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setNewName('')
          setNewNumber('')
          setAddMessage(`Added ${newName}`)
          setTimeout(() => {
            setAddMessage(null)
          }, 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addMessage} />
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Person
            key={person.name}
            person={person}
            toggleDelete={() => toggleDeleteOf(person)} />
          )}
    </div>
  )
}

export default App