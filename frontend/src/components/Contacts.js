import React, { useEffect, useState } from 'react'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacts = (props) => {
    
    // debugger;

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
            {/* {contacts.map(contact => contact.name)} */}
        </div>
    )
}

export default Contacts
