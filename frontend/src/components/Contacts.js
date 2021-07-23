import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacts = ({user, contacts, userName}) => {
    
    // debugger;
    // const params = useParams();
    // console.log(params)
    // let currentUser = users.data.find((user) => parseInt(params.id) === user.id)
    // let currentContacts = contacts.data.filter((contact) => contact.user_id === currentUser.id)
    // console.log(currentContacts)
    const [form, setForm] = useState({
        name: "",
        phone_number: "",
        address: ""
    })

    const fetchForm = (form) => {
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(form)
        }
        fetch(`http://localhost:9292/contacts/search?q=${userName}`, config)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchForm(form)
        // setForm({
        //     name: "",
        //     phone_number: "",
        //     address: ""
        // })
        // e.target.reset()
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <h1>Contact Information</h1>
                <Form.Control size="sm" type="text" placeholder="Name" name="name" onChange={ handleChange }/>
                <br />
                <Form.Control size="sm" type="text" placeholder="Phone Number" name="phone_number" onChange={ handleChange }/>
                <br />
                <Form.Control size="sm" type="text" placeholder="Address" name="address" onChange={ handleChange } />
                <br />
                <Button variant="primary">Create Contact</Button>
                <br />
                {/* {user.username} */}
            </form>
            {contacts.map(contact => contact.name)}
            <ContactCard users={user} contacts={ contacts }/>
        </div>
    )
}

export default Contacts
