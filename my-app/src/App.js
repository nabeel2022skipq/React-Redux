import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function AddPerson(){

  const [name, setName]=useState("")

  function handleChange(e)
  {
    setName(e.target.value)
  }


  return(
    <React.Fragment>
      <form onSubmit={handleChange}>
        <input type="text" placeholder="Enter New Contact" value={name}></input>
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

function App() {
  const data=["Nabeel","Hammad","Ammar","Raheel"]
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <AddPerson></AddPerson>
      <PersonList data={data}></PersonList>
    </div>
  );
}

export default App;
