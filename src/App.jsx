import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Weather from './Components/Weather';


function App() {

  const [loaction, setLocation] = useState(null)
 
  return (
    <div className='card'>
      <Navbar setCoordinate={setLocation}/>
      {!loaction && <Home setCoordinate={setLocation}/>}
      {loaction && <Weather location={loaction.label} value={loaction.value} />}
    </div>
  )
}

export default App
