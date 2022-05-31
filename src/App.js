import React, { Component} from 'react';

import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function App() {
  return (
    <Form className="login-form">
     <h1>
       <span className="font-weight-bold">IVAN CESAR</span>
     </h1>
     <h2 className='text-center'>Bienvenu(e)</h2>
     <FormGroup>
       <Label>E-mail</Label>
       <Input type='email' placeholder='E-mail'/>
     </FormGroup>
     <FormGroup>
       <Label>Mot de passe</Label>
       <Input type='password' placeholder='Mot de passe'/>
     </FormGroup>
     <Button className='btn-lg btn-dark btn-block'>Connexion</Button>
    </Form>
  );
}

export default App;
