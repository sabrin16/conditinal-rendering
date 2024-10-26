import { useState } from "react"

function App() {

  const [name, setName] = useState('Joakim');
  const [showName, setshowName] = useState(false);

  const [isactive, setIsactive] =useState(false);

  const [isloaded, setIsloaded] = useState(false);

  const toggleName = () => {
    setshowName(value => !value);
  }

  if(isloaded) {
    return (
      <div>loading....</div>
    )
  }

  return (
    <div className="container">
      <h1>Conditional Rendering</h1>

      <button onClick={toggleName}>(showName ? 'Hide Name' : 'show Name')</button>

      { showName && <p>Name: {name}</p> }

      <button onClick={() => {
        setIsactive((prev) => !prev)}

      }>click me</button>

      <div className={`square ${isactive && 'active'}`}>

      </div>
 
    </div>
  )
}
export default App