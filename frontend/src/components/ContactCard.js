import React from 'react'
import { Card } from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactCard = () => {
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }} className = "contact-card">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.               
                            <li>Hello</li>
                            <li>Hello</li>
                            <li>Hello</li>
                            <li>Hello</li>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactCard
