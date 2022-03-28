const Person = ({ person, toggleDelete }) => {
    const label = 'delete'
  
      return (
        <div>
          {person.name}
          {person.number}
          <button onClick={toggleDelete}> {label}</button>  
        </div>
      )
    }
    
    export default Person