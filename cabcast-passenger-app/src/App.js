// App.js

import React, { useState } from 'react';
import './App.css'; // Import any CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons';
import carpoolimage from './carpoolimage2copy.png';
import { Link } from "react-router-dom";
import peacock from './peacock.png';


// function formatDate(date) {
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }


function App() {
  const [activeTab, setActiveTab] = useState('fromOffice');
  const [placeText, setPlaceText] = useState('Select Destination');
  const [toOfficeClicked, setToOfficeClicked] = useState(false);
  const [fromOfficeClicked, setFromOfficeClicked] = useState(true); 
  const [selectedPlace, setSelectedPlace] = useState('');

  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(formattedToday);

  // const [result, setResult] = useState('');

  const options = [
    { value: 'Guindy', label: 'Guindy' },
    { value: 'Medavakkam', label: 'Medavakkam' },
    { value: 'Navalur', label: 'Navalur' },
    { value: 'Anna Nagar', label: 'Anna Nagar' }
  ];


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const matches = dataList.reduce((riders, item) => {
    //   if (item.place === selectedPlace && item.date === formatDate(new Date(selectedDate)) && item.fromoffice === fromOfficeClicked) {
    //     riders.push({item.rider,item.seats});
    //   }
    //   return riders;
    // }, []);

    // const matches = dataList.filter(item => item.place === selectedPlace && item.date === formatDate(new Date(selectedDate)) && item.fromoffice === fromOfficeClicked);
    // setResult(matches);
  };

  const handleSelectChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const toOffice = () => {
    setToOfficeClicked(true);
    setFromOfficeClicked(false);
    setPlaceText("Select Starting Point")
  };

  const fromOffice = () => {
    setFromOfficeClicked(true);
    setToOfficeClicked(false);
    setPlaceText("Select Destination")
  };

  return (
    <div>
      <div className='header-section'>
        <div className="horizontal-menu">
          <select>
              <option value="" disabled selected>My Bookings</option>
              <option value="Completed Trips">Completed Trips</option>
              <option value="Upcoming Trips">Upcoming Trips</option>
              <option value="Cancelled Trips">Cancelled Trips</option>
          </select>
          {/* <select>
              <option value="" disabled selected>Manage Bookings</option>
              <option value="place1">Option 1</option>
              <option value="place2">Option 2</option>
              <option value="place3">Option 3</option>
          </select> */}
          <FontAwesomeIcon icon={faCircleUser} inverse size="2x"/>
          <select>
              <option value="" disabled selected>Account</option>
              <option value="Profile">Profile</option>
              <option value="Settings">Settings</option>
              <option value="Logout">Logout</option>
          </select>
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
            <button type="submit"><Link to="/searchpage" state={{place:{selectedPlace}, date: {selectedDate},toOffice:{toOfficeClicked}, fromOffice:{fromOfficeClicked}}} style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</Link></button>
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
            <button type="submit"><Link to="/searchpage" state={{place:{selectedPlace}, date: {selectedDate}, toOffice:{toOfficeClicked}, fromOffice:{fromOfficeClicked}}} style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</Link></button>
          </form>
        )}
      </div>
      </div>
      </div>
    

    <div className='result'>
      
          </div>
    <div className='footer-section'> 
    </div>  
    <div className='final-footer'>
    By XShare team 2024
    </div>
    </div>  
    
    
  );
}

export default App;
