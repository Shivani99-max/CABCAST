import React from 'react'
import { Link } from "react-router-dom";

function CabSearchPage() {
  return (
    <div>
      <h1>Cab Search Page</h1>
      <button><Link to="cablistingpage">Search Cab</Link></button>
      <button><Link to="mybookings">My Bookings</Link></button>
    </div>
  )
}

export default CabSearchPage;