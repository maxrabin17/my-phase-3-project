import React from 'react'
import { Card } from 'react-bootstrap'
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
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard
