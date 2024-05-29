
import { useLocation } from 'react-router-dom';

import React, { useState } from 'react';
import '../css/SearchPage.css'; // Import any CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.ico';
import { Link } from "react-router-dom";
import carpoolimage from '../images/carpoolimage.jpg';
import { useNavigate } from 'react-router-dom';




function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


function PassengerSearchPage() {

  let { state } = useLocation();
  const navigate = useNavigate();
  const receivedPlace = state.place.selectedPlace;
  const receivedDate = state.date.selectedDate;
  const receivedFromOffice = state.fromOffice.fromOfficeClicked;
  const receivedToOffice = state.toOffice.toOfficeClicked;
 
  const [activeTab, setActiveTab] = useState('fromOffice');
  const [placeText, setPlaceText] = useState('Select Destination');
  const [toOfficeClicked, setToOfficeClicked] = useState(receivedToOffice);
  const [fromOfficeClicked, setFromOfficeClicked] = useState(receivedFromOffice); 
  const [selectedPlace, setSelectedPlace] = useState(receivedPlace);

  const [selectedDate, setSelectedDate] = useState(receivedDate);

  const options = [
    { value: 'Guindy', label: 'Guindy' },
    { value: 'Medavakkam', label: 'Medavakkam' },
    { value: 'Navalur', label: 'Navalur' },
    { value: 'Anna Nagar', label: 'Anna Nagar' }
  ];
  
  const [dataList, setDataList] = useState([
    { rider: 'Chitra',place: 'Medavakkam', date: '29/05/2024', fromoffice: true, toOffice: false, seats: 3},
    {rider: 'Shivani',place: 'Medavakkam', date: '30/05/2024', fromoffice: true, toOffice: false, seats: 4},
    { rider: 'Sai', place: 'Navalur', date: '31/05/2024', fromoffice: false, toOffice: true, seats:5 },
    { rider: 'Rishi', place: 'Guindy', date: '1/06/2024', fromoffice: false, tooffice:true, seats: 6 }
  ]);

  const matches = dataList.filter(item => item.place === selectedPlace && item.date === formatDate(new Date(selectedDate)) && item.fromoffice === fromOfficeClicked);
  const [result, setResult] = useState(matches);

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

    const matches = dataList.filter(item => item.place === selectedPlace && item.date === formatDate(new Date(selectedDate)) && item.fromoffice === fromOfficeClicked);

    setResult(matches);

    window.location.href = "#result-search-page";
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

  console.log(selectedPlace);
  return (
    <div>
      <div className='header-section'>
      
      <div className="horizontal-menu">
      <img onClick={routeHome} src={logo} alt="Logo" className="logo"/> {/* Add this line */}
        <button className='logo-text' ><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>CabCast</Link></button>
        <button onClick={routeHome} className='menu-button'>Home</button>
        <button className='menu-button'><Link to="MyBookings" style={{ textDecoration: 'none', color: 'inherit' }}>Bookings</Link></button>
          <button className='menu-button'>Profile</button>
          <button className='menu-button'>Logout</button>
        </div> {/*horizontal-menu ends here*/}
      </div> {/*header-section ends here*/}

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
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</button>
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
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</button>
          </form>
        )}
      </div>
      </div>
      </div>
    <div className='result-search-page'>
      {result.length > 0 ? (
        <div>
            {result.map((item, index) => (
              <div className='result1-search-page' key={index}>
                <div className='name-header-search-page'>
                  {item.rider}
                </div>
                <div className='info-right-search-page'>
                  Seats: {item.seats}
                </div>
                <div className='ride-match-button-search-page'> 
                <button onClick={routeMyBookings} className='rider-select-search-page'>Select Ride</button> 
                </div>
              </div>
              
              ))}
              </div>
              ) : (
              <div className='result1-search-page'>
                No match found in the list.
              </div>
            )}
          </div>
    <div className='footer-appinfo'> 
    Place Holder for FAQ
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

export default PassengerSearchPage;