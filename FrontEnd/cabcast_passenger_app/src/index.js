import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import PassengerSearchPage from './components/PassengerSearchPage';
import PassengerLandingPage from './components/PassengerLandingPage';
import MyBookings from './components/MyBookings';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PassengerLandingPage />,
  },
  {
    path: "PassengerLandingPage",
    element: <PassengerLandingPage />
  },
  {
    path: "PassengerLandingPage/PassengerSearchPage",
    element: <PassengerSearchPage />
  },
  {
    path: "MyBookings",
    element: <MyBookings />
  },
  {
    path: "PassengerLandingPage/MyBookings",
    element: <MyBookings />
  },
  {
    path: "PassengerLandingPage/PassengerSearchPage/MyBookings",
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
