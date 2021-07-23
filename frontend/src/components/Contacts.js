import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacts = ({users, contacts}) => {
    
    // debugger;
    // const params = useParams();
    // console.log(params)
    // let currentUser = users.data.find((user) => parseInt(params.id) === user.id)
    // let currentContacts = contacts.data.filter((contact) => contact.user_id === currentUser.id)
    // console.log(currentContacts)

    return (
        <div className="contact-form">
            <h1>Contact Information</h1>
            <Form.Control size="sm" type="text" placeholder="Name" />
            <br />
            <Form.Control size="sm" type="text" placeholder="Phone Number" />
            <br />
            <Form.Control size="sm" type="text" placeholder="Address" />
            <br />
            <Button variant="primary">Create Contact</Button>
            <br />
            {contacts.map(contact => contact.name)}
            <ContactCard users={users} contacts={ contacts }/>
        </div>
    )
}

export default Contacts
