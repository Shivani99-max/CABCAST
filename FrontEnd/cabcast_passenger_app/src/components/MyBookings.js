import React, { useState } from 'react';
import '../css/MyBookings.css';
import { Link } from "react-router-dom";
import logo from '../logo.ico';
import { useNavigate } from 'react-router-dom';

function MyBookings() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('upcomingTrips');
    const [upcomingTripsClicked, setUpcomingTripsClicked] = useState(true);
    const [completedTripsClicked, setCompletedTripsClicked] = useState(false);
    const [cancelledTripsClicked, setCancelledTripsClicked] = useState(false);

    const upcomingTrips = () => {
        setUpcomingTripsClicked(true);
        setCompletedTripsClicked(false);
        setCancelledTripsClicked(false);
        setActiveTab('upcomingTrips');

      };

    const completedTrips = () =>{
        setUpcomingTripsClicked(false);
        setCompletedTripsClicked(true);
        setCancelledTripsClicked(false);
        setActiveTab('completedTrips');
    }

    const cancelledTrips = () =>{
        setUpcomingTripsClicked(false);
        setCompletedTripsClicked(false);
        setCancelledTripsClicked(true);
        setActiveTab('cancelledTrips');

    }

    const routeHome = () => {
      navigate('/');
    };

    




  return (
    <div>
      <div className='header-section'>
        <div className="horizontal-menu">
        <img onClick={routeHome} src={logo} alt="Logo" className="logo"/> {/* Add this line */}
        <button className='logo-text' ><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>CabCast</Link></button>
        <button onClick={routeHome} className='menu-button'>Home</button>
          <button className='menu-button'><Link to="/MyBookings" style={{ textDecoration: 'none', color: 'inherit' }}>Bookings</Link></button>
          <button className='menu-button'>Profile</button>
          <button className='menu-button'>Logout</button>
        
      </div>
      </div>
      <div className='mid-section-upcoming-trips'>
        <div className='side-bar-upcoming-trips'>
        <div className="buttons-upcoming-trips">
          <button onClick={() => {upcomingTrips()}} style={{ backgroundColor: upcomingTripsClicked ? 'rgb(199, 231, 232)' : 'white', color:upcomingTripsClicked ? 'darkcyan' : 'black', borderLeft: upcomingTripsClicked ? '5px solid darkcyan' : 'none'}}>Upcoming Trips</button>
          <button onClick={() => {completedTrips()}} style={{ backgroundColor: completedTripsClicked ? 'rgb(199, 231, 232)' : 'white', color:completedTripsClicked ? 'darkcyan' : 'black', borderLeft: completedTripsClicked ? '5px solid darkcyan' : 'none'}}>Completed Trips</button>
          <button onClick={() => {cancelledTrips()}} style={{ backgroundColor: cancelledTripsClicked ? 'rgb(199, 231, 232)' : 'white', color: cancelledTripsClicked ? 'darkcyan' : 'black', borderLeft: cancelledTripsClicked ? '5px solid darkcyan' : 'none'}}>Cancelled Trips</button>
        </div>
        </div>
        <div className='content-upcoming-trips'>


        {activeTab === 'upcomingTrips' && (  
         <div>
           <div className='result1-upcoming-trips-page'>
            <div className='name-header-upcoming-trips-page'>
            <div className='name'>
             Chithra - TN07 BC 2345
             </div>
            <div className='trip-status' style={{backgroundColor:'yellow'}}> 
            Scheduled
            </div>
            </div>
           <div className='info-upcoming-trips-page'>
            <div className='info-left-upcoming-trips-page'>  
            <p>
            Date: 29.05.2024<br></br>
            Departure time: 10:30 AM <br></br>
            Car type: SUV <br></br>
            Employee ID: 2345 <br></br>
            Total seats: 6  
            </p> 
            </div>    
            <div className='ride-match-button-bookings-page'>
            <button className='rider-select-bookings-page'>Cancel Trip</button>
            </div>
            </div>
            </div>

           <div className='result1-upcoming-trips-page'>
            <div className='name-header-upcoming-trips-page'>
            <div className='name'>
             Shivani - TN07 AB 1234
             </div>
            <div className='trip-status'> 
            Pending
            </div>
            </div>
           <div className='info-upcoming-trips-page'>
            <div className='info-left-upcoming-trips-page'>  
            <p>
            Date: 1.06.2024<br></br>
            Departure time: 5:30 PM <br></br>
            Car type: Sedan <br></br>
            Employee ID: 1234 <br></br>
            Total seats: 4   
            </p> 
            </div>    
            <div className='ride-match-button-bookings-page'>
            <button className='rider-select-bookings-page'>Cancel Trip</button>
            </div>
            </div>
            </div>


            
        </div>               
)}  

{activeTab === 'completedTrips' && (  
   
           <div className='result1-upcoming-trips-page'>
            <div className='name-header-upcoming-trips-page'>
            <div className='name'>
             Sai - TN07 CD 1234
             </div>
            <div className='trip-status' style={{backgroundColor:'limegreen'}}> 
            Completed
            </div>
            </div>
           <div className='info-upcoming-trips-page'>
            <div className='info-left-upcoming-trips-page'>  
            <p>
            Date: 27.05.2024<br></br>
            Departure time: 10:00 AM <br></br>
            Car type: Sedan <br></br>
            Employee ID: 3456 <br></br>
            Total seats: 4   
            </p> 
            </div>    
            <div className='ride-match-button-bookings-page'>
            <button className='rider-select-bookings-page'>Rate Driver</button>
            </div>
            </div>
            </div>            
)}  

{activeTab === 'cancelledTrips' && (  
        
            <div className='result1-upcoming-trips-page'>
            <div className='name-header-upcoming-trips-page'>
            <div className='name'>
             Rishi - TN07 DE 2745
             </div>
            <div className='trip-status' style={{backgroundColor:'indianred'}}> 
            Cancelled
            </div>
            </div>
           <div className='info-upcoming-trips-page'>
            <div className='info-left-upcoming-trips-page'>  
            <p>
            Date: 21.05.2024<br></br>
            Departure time: 10:30 AM <br></br>
            Car type: SUV <br></br>
            Employee ID: 2345 <br></br>
            Total seats: 6  
            </p> 
            </div>    
            
            </div>
            </div>
        

            
)}  
            
       
        </div>
      </div>{/*mid-section ends here*/}

      <div className='footer-appinfo'> 
    Place Holder for Ride Dashboard, FAQ and Favourites
    </div> 
    <div className='footer-quicklinks'> 
    Place Holder for Quick Links
    </div>  
    <div className='footer'>
    &copy; 2024 Powered by xShare Team
    </div>

      </div>    
    
  )
}

export default MyBookings;