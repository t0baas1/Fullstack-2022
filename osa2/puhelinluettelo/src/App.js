import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const Person = ({ person }) => {
    return (
      <p>{person.name} {person.number}</p>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Person key={person.name} person={person} />
          )}
    </div>
  )
}

export default App