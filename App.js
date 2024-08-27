
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {  
  const [country, setCountry] = useState("Pakistan");
  const [inputValue, setInputValue] = useState("Pakistan");

  // Update the input value state based on input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Update the country state and fetch data when the button is clicked
  const countryChange = () => {
    setCountry(inputValue);
  };


  return (
        <>
<Navbar countryChange={countryChange} country={country}  handleInputChange={handleInputChange} inputValue={inputValue}/>
<Home country={country}/>
        </>
  );
}

export default App;
