import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe('pk_live_51HvPoYAHIVF9WsgGUMHqOLHoyrzbEvuWZjTMVkfzulb1ns9ze0P1KNm0MozGIA2XAGdlzisrx254BiV24GeDJy3d00PT0jmmWO');

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
