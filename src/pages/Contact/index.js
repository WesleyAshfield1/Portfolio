import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Contact Info</Card.Title>
        <Card.Text>Phone Number: 678-720-6978 </Card.Text>
        <Card.Text>Email: lwashfield@gmail.com</Card.Text>
        <Button variant="outline-dark" href='https://github.com/WesleyAshfield1'>Github Link</Button>
      </Card.Body>
    </Card>
  );
}

export default Contact