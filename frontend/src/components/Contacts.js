import React, { useEffect, useState } from 'react'
import '../App.css'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacts = (props) => {
    
    debugger;
    // console.log(props.match.params.id)

    return (
        <div>
            <Form.Control size="sm" type="text" placeholder="Name" />
            <Form.Control size="sm" type="text" placeholder="Phone Number" />
            <Form.Control size="sm" type="text" placeholder="Address" />
            {/* {contacts.map(contact => contact.name)} */}
        </div>
    )
}

export default Contacts
