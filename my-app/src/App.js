import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function AddPerson(props){

  const [name, setName]=useState("")

  function handleChange(e)
  {
    setName(e.target.value)
  }

  function handleSubmit(e)
  {
    props.handleSubmit(name)
    setName("")
    e.preventDefault()
  }

  return(
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter New Contact" value={name} onChange={handleChange}></input>
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  )
}

function PersonList(props)
{

  const arr=props.data
  const itemsList=arr.map((value, index) => <li key={index}>{value}</li>)
  return(
    <React.Fragment>
      <ul>{itemsList}</ul>
    </React.Fragment>
  )
}

function ContactManager(props)
{

  const [contacts, setContacts]=useState(props.data)

  function addContact(name)
  {
    return setContacts([...contacts,name])
  }
  return(
    <React.Fragment>
      <AddPerson handleSubmit={addContact}></AddPerson>,
      <PersonList data={contacts}></PersonList>
    </React.Fragment>
  )
  
}

function App() {
  const data=["Nabeel","Hammad","Ammar","Raheel"]
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactManager data={data}></ContactManager>
    </div>
  );
}

export default App;
