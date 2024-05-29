// App.js

import React, { useState } from 'react';
import '../css/App.css'; // Import any CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons';
import carpoolimage from '../images/carpoolimage2.png';
import { Link } from "react-router-dom";
import logo from '../logo.ico';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('fromOffice');
  const [placeText, setPlaceText] = useState('Select Location');
  const [toOfficeClicked, setToOfficeClicked] = useState(false);
  const [fromOfficeClicked, setFromOfficeClicked] = useState(true); 
  const [selectedPlace, setSelectedPlace] = useState('');

  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(formattedToday);

  const options = [
    { value: 'Guindy', label: 'Guindy' },
    { value: 'Medavakkam', label: 'Medavakkam' },
    { value: 'Navalur', label: 'Navalur' },
    { value: 'Anna Nagar', label: 'Anna Nagar' }
  ];

  const routeMyBookings = () => {
    navigate('/PassengerLandingPage/MyBookings');
  };

  const routeHome = () => {
    navigate('/');
  };


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const toOffice = () => {
    setToOfficeClicked(true);
    setFromOfficeClicked(false);
    setPlaceText("Select Location")
  };

  const fromOffice = () => {
    setFromOfficeClicked(true);
    setToOfficeClicked(false);
    setPlaceText("Select Location")
  };

  return (
    <div>
      
      <div className='header-section'>
        <div className="horizontal-menu">
        <img onClick={routeHome} src={logo} alt="Logo" className="logo"/> {/* Add this line */}
        <button className='logo-text' ><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>CabCast</Link></button>
          {/* <button className='menu-button'><Link to="MyBookings" style={{ textDecoration: 'none', color: 'inherit' }}>Bookings</Link></button> */}
          <button onClick={routeHome} className='menu-button'>Home</button>
          <button onClick={routeMyBookings} className='menu-button'>Bookings</button>
          <button className='menu-button'>Profile</button>
          <button className='menu-button'>Logout</button>
        
      </div>
     </div> 
     <div className="bg-image" style={{ backgroundImage: `url(${carpoolimage})`,backgroundPosition: 'center center', backgroundSize: 'cover'}}>
      <div className='full-form'>
        <div className="tabs">
          <button id="fromOffice" onClick={() => {handleTabChange('fromOffice'); fromOffice()}} style={{ backgroundColor: fromOfficeClicked ? 'darkcyan' : 'white', color:fromOfficeClicked ? 'white' : 'darkcyan'}}>From Office</button>
          <button id="toOffice" onClick={() => {handleTabChange('toOffice'); toOffice()}} style={{ backgroundColor: toOfficeClicked ? 'darkcyan' : 'white', color:toOfficeClicked ? 'white' : 'darkcyan'}}>To Office</button>
        </div>
        <div className="form">
          {activeTab === 'fromOffice' && (
          <form onSubmit={handleSubmit}>
            <div class="place-div"> 
              <FontAwesomeIcon icon={faMapMarkerAlt} />  
              <label>
                <select  class="dropdown" value={selectedPlace} onChange={handleSelectChange}>
                        <option value="" disabled selected>{placeText}</option>
                        {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>   
            <label>
              <input type='Date' value={selectedDate} onChange={handleDateChange}/>
            </label>
            <button type="submit"><Link to="PassengerLandingPage/PassengerSearchPage" state={{place:{selectedPlace}, date: {selectedDate},toOffice:{toOfficeClicked}, fromOffice:{fromOfficeClicked}}} style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</Link></button>
          </form>
        )}
        {activeTab === 'toOffice' && (
          <form onSubmit={handleSubmit}>
            <div class="place-div">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <label>
                <select  class="dropdown" value={selectedPlace} onChange={handleSelectChange}>
                        <option value="" disabled selected>{placeText}</option>
                        {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              <input type='Date' value={selectedDate} onChange={handleDateChange}/>
            </label>
            <button type="submit"><Link to="PassengerLandingPage/PassengerSearchPage" state={{place:{selectedPlace}, date: {selectedDate}, toOffice:{toOfficeClicked}, fromOffice:{fromOfficeClicked}}} style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</Link></button>
          </form>
        )}
      </div>
      </div>
      </div>
    
    <div className='footer-appinfo'> 
    Place Holder for CabCast App Info, FAQ and App Download
    </div> 
    <div className='footer-quicklinks'> 
    Place Holder for Quick Links
    </div>  
    <div className='footer'>
    &copy; 2024 Powered by xShare Team
    </div>
    </div>  
    
    
  );
}

export default App;
