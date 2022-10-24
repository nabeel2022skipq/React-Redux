//Action function which will dispatch the action
//to the reducer function which will change the app
//state on the basis of the action type

export function addContact(person) {
    return {
        type: "ADD_CONTACT",
        data: person
    }
}