import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar,Nav,NavDropdown,Form,FormControl,Container,Alert} from 'react-bootstrap';
export default function (props) {
  return (
    {props.Alert && <Alert variant={props.alert.type}>
    <Alert.Heading>Dark mode enabled</Alert.Heading>
    <p>
      {props.alert.msg}
    </p>
    <hr />
    <div className="d-flex justify-content-end">
    </div>
  </Alert>
  )
}