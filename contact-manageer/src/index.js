import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddPerson from './components/AddPerson';
import PersonList from './components/PersonList';

//Initialize the first state
const initial_state={contacts:["Nabeel", "Hammad", "Ammar"]}


//Reducer function which take the initial state and action
//Return the next state of the application not modify the original state
function reducer(state=initial_state, action)
{
  switch(action.type)
  {
    case "ADD_CONTACT":
      return {...state, 
        contacts:[...state.contacts,action.data]}
      
    default:
      return state
  }
}

//Creating the store which will make the state available to
//the children components without passing the props
const store=createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AddPerson></AddPerson>
    <PersonList></PersonList>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
