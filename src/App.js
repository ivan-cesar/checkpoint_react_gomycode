import React, { Component} from 'react';

import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function App() {
  return (
    <Form className="login-form" style={{borderRadius:"10px",border:"solid"}}>
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
     <FormGroup>
     <Label>
          Votre commune </Label>
          <select className="form-select" aria-label="Default select example"> 
            <option selected>Choisissez votre commune</option>       
            <option value="Abobo">Abobo</option>
            <option value="Adjamé">Adjamé</option>
            <option value="Anyama">Anyama</option>
            <option value="Attécoubé">Attécoubé</option>
            <option value="Bingerville">Bingerville</option>
            <option value="Cocody">Cocody</option>
            <option value="Koumassi">Koumassi</option>
            <option value="Marcory">Marcory</option>
            <option value="Plateau">Plateau</option>
            <option value="Port bouët">Port bouët</option>
            <option value="Treichville">Treichville</option>
            <option value="Songon">Port bouët</option>
            <option value="Yopougon">Yopougon</option>
          </select>
        </FormGroup>
     <Button className='btn-lg btn-dark btn-block'>Connexion</Button>
    </Form>
  );
}

export default App;
