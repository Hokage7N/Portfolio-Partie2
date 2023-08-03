'use client'
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMessageValid, setIsMessageValid] = useState(true);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let isFormValid = true;
      if (!name) {
        setIsNameValid(false);
        isFormValid = false;
      } else {
        setIsNameValid(true);
      }
  
      if (!email) {
        setIsEmailValid(false);
        isFormValid = false;
      } else {
        setIsEmailValid(true);
      }
  
      if (!message) {
        setIsMessageValid(false);
        isFormValid = false;
      } else {
        setIsMessageValid(true);
      }
  
      if (isFormValid) {
        console.log('Form submitted:', { name, email, message });
        const response = await axios.post(`http://localhost:3000/envoyerEmail`, { name, email, message });

        setName('');
        setEmail('');
        setMessage('');
        setIsFormSubmitted(true);
      }
    };
  
    return (
      <div className="container">
        <h1 style={{marginTop:'180px'}}>Contact</h1>
        {isFormSubmitted ? (
          <div className="alert alert-success" role="alert">
            Votre message a été envoyé avec succès !
          </div>
        ) : (
          <Form className="border p-4 shadow" onSubmit={handleSubmit}>
            <Form.Group className="mb-4 row align-items-end" controlId="form4Example1">
              <Form.Label className="col-sm-2">Nom</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  placeholder="Entrer votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  isInvalid={!isNameValid}
                />
                {!isNameValid && <Form.Control.Feedback type="invalid"> Entrer votre nom</Form.Control.Feedback>}
              </div>
            </Form.Group>
  
            <Form.Group className="mb-5 row align-items-end" controlId="form4Example2">
              <Form.Label className="col-sm-2">Email</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="email"
                  placeholder="Entrer votre addresse email "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  isInvalid={!isEmailValid}
                />
                {!isEmailValid && <Form.Control.Feedback type="invalid">Ajouter une adresse email valide</Form.Control.Feedback>}
              </div>
            </Form.Group>
  
            <Form.Group className="mb-5 row align-items-end" controlId="form4Example3">
              <Form.Label className="col-sm-2">Message</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Entrer votre message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  isInvalid={!isMessageValid}
                />
                {!isMessageValid && <Form.Control.Feedback type="invalid">Entrer votre message</Form.Control.Feedback>}
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-4">
              Send
            </Button>
          </Form>
        )} 
      </div>
    );
  }
  
  export default Contact;
  