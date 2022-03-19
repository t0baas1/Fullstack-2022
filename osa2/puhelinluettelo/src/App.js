import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    console.log(nameObject.name)
    console.log(persons.includes(nameObject.name))

    if (persons.some(person => person['name'] === newName) === true) {
      window.alert(nameObject.name + " is already added to phonebook")
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }

  }

  const Person = ({ person }) => {
    return (
      <p>{person.name}</p>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Person key={person.name} person={person} />
          )}
    </div>
  )
}

export default App