import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactCard = ({contact, user}) => {
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
                        <Button variant="outline-danger">
                            Delete Contact
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard
