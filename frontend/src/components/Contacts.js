import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacts = ({user, contacts, setContacts, userName}) => {

    const [form, setForm] = useState({
        name: "",
        phone_number: "",
        address: "",
        userId: user.id
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
        fetch(`http://localhost:9292/contacts`, config)
            .then(res => res.json())
            .then(data => setContacts([...contacts, data.contact]))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchForm(form)
        setForm({
            name: "",
            phone_number: "",
            address: "",
        })
        e.target.reset()
        alert("Contact created!")
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
        <div className="contact-form">
            <Form>
                <h1>{`Welcome ${user.username}!`}</h1>
                <h2>Create Contact</h2>
                <Form.Control size="sm" type="text" placeholder="Name" name="name" onChange={ handleChange }/>
                <br />
                <Form.Control size="sm" type="text" placeholder="Phone Number" name="phone_number" onChange={ handleChange }/>
                <br />
                <Form.Control size="sm" type="text" placeholder="Address" name="address" onChange={ handleChange } />
                <br />
                <Button variant="outline-success"  onClick={handleSubmit}>Create Contact</Button>
                <br />
            </Form>
            </div>
            <div className="contact-card">
                {contacts.map(contact => <ContactCard key={contact.id} contacts={contacts} contact={contact} setContacts={setContacts}/>)}
            </div>
            <div>




            </div>
        </>
    )
}

export default Contacts
