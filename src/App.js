import logo from './logo.svg';
import './App.css';
import { useEffect, useState ,useRef} from 'react';

function App() {
    const email=useRef()
    const password=useRef()
    const isFirstRender = useRef(true);
  
  const submitHandler=()=>{
          console.log(email.current.value)
          console.log(password.current.value)
  }

  //Changed useEffect to Run Only Once
  useEffect(() => {
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
