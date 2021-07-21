import React, { useEffect, useState } from 'react'

const Contacts = () => {

    const [contacts, setContacts] = useState([])
    useEffect(() => {
        fetch(`https://localhost:9292/contacts`)
            .then(res => res.json())
            .then(data => setContacts(data))
    })

    return (
        <div>
            {contacts.map(contact => contact.name)}
        </div>
    )
}

export default Contacts
