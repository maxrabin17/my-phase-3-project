import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
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
        fetch(`http://localhost:9292/contacts`, config)
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
            <form>
                <h1>{`Welcome ${userName}!`}</h1>
                <h2>Create Contact</h2>
                <Form.Control size="sm" type="text" placeholder="Name" name="name" onChange={ handleChange }/>
                <br />
                <Form.Control size="sm" type="text" placeholder="Phone Number" name="phone_number" onChange={ handleChange }/>
                <br />
                <Form.Control size="sm" type="text" placeholder="Address" name="address" onChange={ handleChange } />
                <br />
                <Button variant="primary" onClick={handleSubmit}>Create Contact</Button>
                <br />
            </form>
            <div className="contact-card">
                {contacts.map(contact => <ContactCard contact={contact} user={user}/>)}
            </div>
        </div>
    )
}

export default Contacts
