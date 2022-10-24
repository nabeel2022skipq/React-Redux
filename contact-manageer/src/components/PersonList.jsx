import React, { Component } from 'react';
import { connect, Connect } from 'react-redux';
function PersonList(props) {
    const arr = props.contacts
    const itemsList = arr.map((item, index) => <li key={index}>{item}</li>)
    return (
        <ul>{itemsList}</ul>
    );
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}
export default connect(mapStateToProps)(PersonList);