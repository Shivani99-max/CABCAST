import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import './MyBookings.css';
import { Link } from "react-router-dom";
import peacock from './peacock3.png';

function MyBookings() {

    const [upcomingTripsClicked, setUpcomingTripsClicked] = useState(true);
    const [completedTripsClicked, setCompletedTripsClicked] = useState(false);
    const [cancelledTripsClicked, setCancelledTripsClicked] = useState(false);

    const upcomingTrips = () => {
        setUpcomingTripsClicked(true);
        setCompletedTripsClicked(false);
        setCancelledTripsClicked(false);
      };

    const completedTrips = () =>{
        setUpcomingTripsClicked(false);
        setCompletedTripsClicked(true);
        setCancelledTripsClicked(false);
    }

    const cancelledTrips = () =>{
        setUpcomingTripsClicked(false);
        setCompletedTripsClicked(false);
        setCancelledTripsClicked(true);
    }

    




  return (
    <div>
      <div className='header-section-upcoming-trips'>
        {/* <img src={peacock} alt='logo' className='peacock' /> */}
        <div className="horizontal-menu-upcoming-trips">
        <button><Link to="/upcomingtrips" style={{textDecoration: 'none', color:'white'}}>My Bookings</Link></button>
          <button><FontAwesomeIcon icon={faCircleUser} inverse size="2x"/></button>
        </div>
      </div>{/* Header section ends here*/}
      <div className='mid-section-upcoming-trips'>
        <div className='side-bar-upcoming-trips'>
        <div className="buttons-upcoming-trips">
          <button onClick={() => {upcomingTrips()}} style={{ backgroundColor: upcomingTripsClicked ? 'rgb(199, 231, 232)' : 'white', color:upcomingTripsClicked ? 'darkcyan' : 'black', borderLeft: upcomingTripsClicked ? '5px solid darkcyan' : 'none'}}>Upcoming Trips</button>
          <button onClick={() => {completedTrips()}} style={{ backgroundColor: completedTripsClicked ? 'rgb(199, 231, 232)' : 'white', color:completedTripsClicked ? 'darkcyan' : 'black', borderLeft: completedTripsClicked ? '5px solid darkcyan' : 'none'}}>Completed Trips</button>
          <button onClick={() => {cancelledTrips()}} style={{ backgroundColor: cancelledTripsClicked ? 'rgb(199, 231, 232)' : 'white', color: cancelledTripsClicked ? 'darkcyan' : 'black', borderLeft: cancelledTripsClicked ? '5px solid darkcyan' : 'none'}}>Cancelled Trips</button>
        </div>
        </div>
        <div className='content-upcoming-trips'>
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
                    Date: 28.05/2024<br></br>
                    Departure time: 10:00 AM <br></br>
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

         {/* <div className='result1-upcoming-trips-page'>
            Main content
         </div> */}
        </div>
      </div>{/*mid-section ends here*/}

      <div className='footer-section'> 
    </div>  
    <div className='final-footer'>
    By XShare team 2024
    </div>

      </div>    
    
  )
}

export default MyBookings;
