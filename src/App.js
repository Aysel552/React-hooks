import {useState} from 'react';

function App(){
  const [name, setName] = useState("Aysel");

  const updateData = () => {
    setName("Lana")
  }

  return(
    <div>
      <h1>Hello {name}</h1>
      <button onClick={updateData}>Click</button>
    </div>
  )
}


export default App;
