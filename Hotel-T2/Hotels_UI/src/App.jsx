import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './modules/Search';
import Listing from './modules/Listing';
import HotelDetails from './modules/HotelDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Micro Frontend: Search */}
      <Search />
      {/* Micro Frontend: Listing */}
      <Listing />
      {/* Micro Frontend: Hotel Details */}
      <HotelDetails />
    </div>
  )
}

export default App
