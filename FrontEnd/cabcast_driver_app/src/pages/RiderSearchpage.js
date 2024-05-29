
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './RiderSearchpage.css'; // Import any CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import peacock from './peacock3.png';


function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


function RiderSearchpage() {

  let { state } = useLocation();
  const receivedDate = state.date.selectedDate;
  const receivedFromOffice = state.fromOffice.fromOfficeClicked;
  const receivedToOffice = state.toOffice.toOfficeClicked;
 
  const [activeTab, setActiveTab] = useState('fromOffice');
  const [placeText, setPlaceText] = useState('Select Destination');
  const [toOfficeClicked, setToOfficeClicked] = useState(receivedToOffice);
  const [fromOfficeClicked, setFromOfficeClicked] = useState(receivedFromOffice); 
//   const [selectedPlace, setSelectedPlace] = useState(receivedPlace);

//   const today = new Date();
//   const formattedToday = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(receivedDate);

//   const options = [
//     { value: 'Guindy', label: 'Guindy' },
//     { value: 'Medavakkam', label: 'Medavakkam' },
//     { value: 'Navalur', label: 'Navalur' },
//     { value: 'Anna Nagar', label: 'Anna Nagar' }
//   ];

  const [dataList, setDataList] = useState([
    { sharer: 'Chitra',place: 'Medavakkam', date: '26/05/2024', fromoffice: true, toOffice: false, seats: 3},
    { sharer: 'Shivani',place: 'Medavakkam', date: '26/05/2024', fromoffice: true, toOffice: false, seats: 4},
    { sharer: 'Sai', place: 'Navalur', date: '25/05/2024', fromoffice: false, toOffice: true, seats:5 },
    { sharer: 'Rishi', place: 'Guindy', date: '25/05/2024', fromoffice: false, tooffice:true, seats: 6 }
  ]);

  const matches = dataList.filter(item => item.date === formatDate(new Date(selectedDate)) && item.fromoffice === fromOfficeClicked);
  const [result, setResult] = useState(matches);

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

    const matches = dataList.filter(item => item.date === formatDate(new Date(selectedDate)) && item.fromoffice === fromOfficeClicked);

    setResult(matches);
  };

//   const handleSelectChange = (event) => {
//     setSelectedPlace(event.target.value);
//   };

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
      <img src={peacock} alt='logo' className='peacock-rider-search-page' />
        <div className="horizontal-menu-search-page">
        <button><Link to="/upcomingtrips" style={{textDecoration: 'none', color:'white'}}>My Bookings</Link></button>
        <button><FontAwesomeIcon icon={faCircleUser} inverse size="2x"/></button>
          
          </div>{/*Horisonatal-menu ends here*/}
      </div> {/*header-section ends here*/}

      <div className='full-form-search-page'>

        <div className="tabs-search-page">
          <button id="fromOfficeSearchPage" onClick={() => {handleTabChange('fromOffice'); fromOffice()}} style={{ backgroundColor: fromOfficeClicked ? 'darkcyan' : 'white', color:fromOfficeClicked ? 'white' : 'darkcyan'}}>From Office</button>
          <button id="toOfficeSearchPage" onClick={() => {handleTabChange('toOffice'); toOffice()}} style={{ backgroundColor: toOfficeClicked ? 'darkcyan' : 'white', color:toOfficeClicked ? 'white' : 'darkcyan'}}>To Office</button>
        </div>
    
        <div className="form-search-page">
          {activeTab === 'fromOffice' && (
          <form onSubmit={handleSubmit}>
            {/* <div class="place-div-search-page"> 
              <FontAwesomeIcon icon={faMapMarkerAlt} />  
              <label>
                <select  class="dropdown" value={selectedPlace} onChange={handleSelectChange}>
                        <option value="" disabled selected>{placeText}</option>
                        {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div> {/*place-div ends here*/} 
            <label>
                <input type='Date' value={selectedDate} onChange={handleDateChange}/>
            </label>
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</button>
          </form>
        )}
        {activeTab === 'toOffice' && (
          <form onSubmit={handleSubmit}>
            {/* <div class="place-div-search-page">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <label>
                <select  class="dropdown" value={selectedPlace} onChange={handleSelectChange}>
                        <option value="" disabled selected>{placeText}</option>
                        {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div> place-div ends here */}
            <label>
              <input type='Date' value={selectedDate} onChange={handleDateChange}/>
            </label>
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlassLocation} size="lg" inverse transform="left-4" />Search</button>
          </form>
        )}
      </div>{/*form ends here*/}
    </div>{/*full-form ends here*/}

    <div className='result-search-page'>
      {result.length > 0 ? (
        <div>
            {result.map((item, index) => (
              <div className='result1-search-page' key={index}>
                <div className='name-header-search-page'>
                  {item.sharer}
                </div>
                <div className='info-right-search-page'>
                  Seats: {item.seats}
                </div>
                <div className='ride-match-button-search-page'> 
                  <button className='rider-select-search-page'>Accept Sharer</button>
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
    <div className='footer-section'> 
    </div>  
    <div className='final-footer'>
    By XShare team 2024
    </div>
    </div>  
    
    
  );
}

export default RiderSearchpage;


