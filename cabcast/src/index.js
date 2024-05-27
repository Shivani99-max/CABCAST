import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CabSearchPage from './Components/CabSearchPage';
import CabListingPage from './Components/CabListingPage';
import MyBookings from './Components/MyBookings';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "searchpage",
    element: <CabSearchPage />
  },
  {
    path: "searchpage/cablistingpage",
    element: <CabListingPage />
  },
  {
    path: "mybookings",
    element: <MyBookings />
  },
  {
    path: "searchpage/mybookings",
    element: <MyBookings />
  },
  {
    path: "searchpage/cablistingpage/mybookings",
    element: <MyBookings />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
