import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Accordion,Button, Navbar,Nav,NavDropdown,Form,FormControl,Container} from 'react-bootstrap';

export default function About() {
    const [myStyle,setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btnText,setBtnText] = useState("Enable Dark Mode");
    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setmyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode");
        }
    }
  return (
    <Container style = {myStyle}>
        <h2 className='my-3'>About Us</h2>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header style = {myStyle}>Accordion Item #1</Accordion.Header>
    <Accordion.Body style = {myStyle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header style = {myStyle}>Accordion Item #2</Accordion.Header>
    <Accordion.Body style = {myStyle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Container className='mx-3'>
<Button onClick={toggleStyle}>{btnText}</Button>
</Container>
    </Container>
  )
}
