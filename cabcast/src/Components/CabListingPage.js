import React from 'react'
import { Link } from "react-router-dom";

function CabListingPage() {
  return (
    <div>
        <h1>Cab Listing Page</h1>
        <button><Link to="mybookings">My Bookings</Link></button>
    </div>
  )
}

export default CabListingPage;