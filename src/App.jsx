import { useState } from 'react';
// import companyLogo from './assets/logo0.svg'
import './App.css'
// import 

function App() {
  const [count, setCount] = useState(0);

  const countDown = () => {
    setCount(count + 1)
  } 

  return (
    <>
      <div className="container">
        {/* <img src={companyLogo} alt="Company Logo" width="200px" height="auto" /> */}
        <img src='/logo0.svg' alt="Company Logo" />
        <p>Coming Soon...</p>
        <p>{count}</p>
        <button onClick={countDown}>Click Me!</button>
      </div>
    </>
  )
}

export default App
