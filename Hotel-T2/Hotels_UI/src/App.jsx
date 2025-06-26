// App.jsx - Main entry component for the application
// Imports React hooks and assets, as well as main modules
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './modules/Search';
// import Listing from './modules/Listing';
import HotelDetails from './modules/HotelDetails';

// App component manages the main layout and renders micro frontends
function App() {
  // Example state (not currently used in UI)
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Micro Frontend: Search bar and hotel search form */}
      <Search />
      {/* Micro Frontend: Listing (currently commented out)
      <Listing /> */}
      {/* Micro Frontend: Hotel Details (shows hotel cards) */}
      <HotelDetails />
    </div>
  )
}

export default App
