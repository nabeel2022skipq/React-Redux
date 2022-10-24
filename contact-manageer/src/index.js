import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddPerson from './components/AddPerson';
import PersonList from './components/PersonList';


const initial_state={contacts:["Nabeel", "Hammad", "Ammar"]}

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
