export function addContact(person) {
    return {
        type: "ADD_CONTACT",
        data: person
    }
}