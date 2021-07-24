import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactCard = ({ contact, contacts, setContacts }) => {
    
    const handleDelete = () => {
        let config = {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json',
            } 
        }
        fetch("http://localhost:9292/contacts/" + contact.id, config)
        const newContacts = contacts.filter(c => {
            return c.id !== contact.id
        })
        setContacts(newContacts)
    }

    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }} className = "contact-card">
                <Card.Header>Contact</Card.Header>
                <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>          
                        <li>Phone: {contact.phone_number}</li>
                        <li>Address: {contact.address}</li>
                        <br />
                        <Button variant="outline-danger" onClick={handleDelete}>
                            Delete Contact
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard
