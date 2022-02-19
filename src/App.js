import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
import  Alert from './components/Alert';
import './App.css';
//const Container = Styled.Text;
/*JSX pointer
1) use curly brackets for using js
2) camel casing for classNameName,etc.
3) it's same as html
4) use <> </>
5)tags should be closed
*/
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
 const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
 }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042048';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextModifier - Dark Mode"
 }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextModifier - Light Mode"
}
 }
  return (
    <>
<Navbar1 title="Text Modifier" mode={mode} toggleMode = {toggleMode}/>
<Alert alert = {alert}/>
<Container>
<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
</Container>
    </>
  );
}
export default App;
