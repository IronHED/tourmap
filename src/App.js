import React from 'react';
import logo from './logo.svg';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Tourma from "./features/tourmap/Tourma";
import Tourmap from "./features/tourmap/Tourmap";
import './App.css';

const App = () => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 43.9706,
    lng: -79.2443
  };
  
  const clickableIcons = true;

  return (
    <div className="appGridContainer">
        <div className="six">
          Grid-Six React Logo
          <img src={logo} className="App-logo" alt="logo" /> 
        </div>
        
        <div className="three" >
          Gide-One Map as a class 
          <Tourma />
        </div>
        
        <div className="two" > 
          Grid-Two Map as a Function
          <Tourmap  
            containerStyle={containerStyle}
            center={center}
            clickableIcons={clickableIcons}
          />
        </div>

        <div className="one">
          Grid-One
        </div>
        
        <div className="four">
        Grid-Four
        </div>

        <div className="five">
        Grid-Five
        </div>      
    </div>
  );
}

export default App;
