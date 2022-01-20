import React from 'react'
import {Navbar,Container}from 'react-bootstrap';
import {Nav}from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Navi = () => {
  const navigate= useNavigate()
    return (
       
  <Navbar className="dodo" bg="dark" variant="dark">
    <Container >
    <Nav.Link onClick={()=>navigate("/")}><Navbar.Brand className="deconavv">ACCUEIL</Navbar.Brand></Nav.Link>
    <Nav className="me-auto">
      <Nav.Link className="deconavv" onClick={()=>navigate("/propos")}>A Propos</Nav.Link>
      <Nav.Link className="deconavv" onClick={()=>navigate("/enchtt")} >Enchéres Terminés</Nav.Link>
      <Nav.Link className="deconavv" onClick={()=>navigate("/Enchcou")}>Enchères En Cours</Nav.Link>
      <Nav.Link className="deconavv" onClick={()=>navigate("/connecttt")}>Se Connecter</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 



    )
}

export default Navi;
