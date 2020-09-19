import React from 'react'
import { Card,CardDeck } from 'react-bootstrap'

function Footer() {
    return (
        <Card className="text-center" variant="dark" bg="dark">
            <Card.Body>
            <CardDeck variant="dark" bg="dark">
                <Card variant="dark" bg="dark">
                <h3>Current Projects</h3>
                <ul type="none">
                    <li>Sravya new</li>
                    <li>New list</li>
                    <li>New list</li>
                </ul>
                </Card>          
                <Card variant="dark" bg="dark">
                <h3>Past Projects</h3>
                <ul type="none">
                    <li>Sravya Alaya</li>
                    <li>Sravya Infra</li>
                    <li>Sravya Flute</li>
                </ul>
                </Card>
            </CardDeck>
            </Card.Body>
            <Card.Footer className="text-muted">
{/*            Developed by <a href="mailto:udayreddy.kaipa@gmail.com">Uday Kaipa</a> 
            <a href="https://www.freelancer.com/u/udayreddykaipa">(freelance dev)</a>*/}  © 2020 Sravay Infra Projects Pvt Ltd</Card.Footer>
        </Card>
    )
}

export default Footer;