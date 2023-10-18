import logo from './logo.svg';
import './App.css';
import { useEffect, useState ,useRef,StrictMode} from 'react';

function App() {

    const email=useRef()
    const password=useRef()
    const isFirstRender = useRef(true);
  
  const submitHandler=()=>{
          console.log(email.current.value)
          console.log(password.current.value)
  }

  //Using useref instead of usestate is better solution because usestate causes re renders on every 
  //key stroke when typing email, password as it changes state useref don't cause rerenders like that.


  //Strict mode causes component to unmount and mount when the first time loading (this behaviousr happens only on development mode)

  //Changing <React.StrictMode><App></React.StrictMode> To <React><App/></React> Causes Error

  // Because <React></React> is not a standard React component or element. It does not have any special meaning in React.

  //We can use <StrictMode><App></StrictMode> Instead of <React.StrictMode></React.StrictMode> If we import StrictMode Directly
  // import {StrictMode} from 'react'

  //Use of strictmode is to check to detect problems early in the application during development.


  useEffect(() => {
                //Changed useEffect to Run Only Once 
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("Component Mounted");
  });




  return (
    <div className="App">
      <header className="App-header">
        <label>Email</label>
       <input type='text' ref={email}></input>
       <label>password</label>
       <input type='password' ref={password}/>
       <button onClick={submitHandler}>Submit</button>
      </header>
    </div>
  );
}

export default App;
