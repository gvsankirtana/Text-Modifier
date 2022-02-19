 import React,{useState} from 'react'
 import 'bootstrap/dist/css/bootstrap.css';
import { Button,Form,Container} from 'react-bootstrap';
import '../App.css';
export default function TextForm(props) {
  let disabled = false;
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    text&&props.showAlert("Converted to Lowercase!","success");
    !text&&props.showAlert("Please Enter Text","danger");
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!","success");
  }
  const handleCopyClick = () =>{ 
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text&&props.showAlert("Removed Extra spaces!","success");
    !text&&props.showAlert("Please Enter Text","danger");
  }
  const handleOnChange = (event) =>{ 
    setText(event.target.value);
  }
  const[text,setText] = useState('');  
 // text = "new text";//wrong way to change the state
 // setText("new Text");//correct way to change the state
  return (
    <>
     <h2 className="mb-3" style = {{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h2>
     <Container style = {{ backgroundColor: props.mode === 'light'?'white':'#042048'}}>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control id="myBox" as="textarea" rows={10} value={text} onChange = {handleOnChange} style = {{ backgroundColor: props.mode === 'dark'?'#12426b':'white',color: props.mode === 'dark'?'white':'black'}}/>
  </Form.Group>
  <Button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</Button>
  <Button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</Button>
  <Button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</Button>
  <Button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</Button>
  <Button disabled = {text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</Button>
</Form>
</Container>
<Container className='my-3' style = {{ backgroundColor: props.mode === 'light'?'white':'#042048',color: props.mode === 'dark'?'white':'black'}}>
<h2>Your text summary</h2>
<h6 className='my-3'>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</h6>
<h6 className='my-3'>{0.008 * text.length} Minutes read</h6> 
<h2>Preview</h2>
{!text && <h6 className='my-3' style={{color: "red"}}>Enter something in the text box above to preview it here</h6>}
{text && <h6 className='my-3'>{text}</h6>}
</Container>
</>
   )
 }
 