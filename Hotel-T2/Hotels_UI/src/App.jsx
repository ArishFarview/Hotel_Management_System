import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './modules/Search';
import Listing from './modules/Listing';
import HotelDetails from './modules/HotelDetails';

function App() {
  const [filterData,setfilterData] = useState({})

  useEffect(() => {
  const receiveMessage = (event) => {
    if (event.origin !== "http://localhost:3000") { 
      console.log("error");
    } // security check
    const hotelData = event.data;
    console.log("Received hotel data:", hotelData);
    setfilterData(hotelData)
    // You can store in state, render results, etc.
  };

  window.addEventListener("message", receiveMessage);
  return () => window.removeEventListener("message", receiveMessage);
}, []);

  return (
    <div className="App">
     {filterData &&(
      <h2>data is coming to the filterdata state </h2>
     )}
    </div>
  )
}

export default App
