import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addContact } from '../actions';

function AddPerson(props) {
    const [person, setPerson] = useState("")

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleSubmit(e) {
        if (person != "") {
            props.addContact(person);
            setPerson("")
        }
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter new contact" onChange={handleChange} value={person}></input>
            <button type='submit'>Add</button>
        </form>
    );
}
const mapDipatchToProps = {
    addContact
}

export default connect(null, mapDipatchToProps)(AddPerson);