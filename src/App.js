import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
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
 const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042048';
 }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
}
 }
  return (
    <>
<Navbar1 title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
<Container>
<TextForm heading="Enter text to analyze below" mode={mode} />
</Container>
    </>
  );
}

export default App;
