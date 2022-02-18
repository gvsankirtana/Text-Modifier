import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar,Nav,NavDropdown,Form,FormControl,Container} from 'react-bootstrap';
export default function (props) {
  return (
    <Navbar bg={`${props.mode}`} expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><h4>{props.title}</h4></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
       >
          <Nav.Link href="#action1"><h4>Home</h4></Nav.Link>
          <Nav.Link href="#action2"><h4>About</h4></Nav.Link>
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
Navbar.PropTypes = {title:PropTypes.string.isRequired}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText : 'About text here'
};