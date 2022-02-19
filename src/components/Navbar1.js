import React from 'react'
import propTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Form,Container} from 'react-bootstrap';
export default function (props) {
  return (
    <Navbar bg={`${props.mode}`} expand="md">
    <Container fluid>
      <Navbar.Brand href="/"><h3>{props.title}</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-3" navbarScroll>
        </Nav>
  <Form className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>
  <Form.Check 
    type="switch"
    id="custom-switch text-light"
    label=" Enable Dark Mode"
    onClick={props.toggleMode}
  />
  </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
Navbar.propTypes = {title:propTypes.string.isRequired}
Navbar.defaultProps = {
  title: 'Set title here',
  abouttext : 'About text here'
};