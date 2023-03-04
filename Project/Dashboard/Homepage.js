import * as React from 'react';
import './Homepage.css';
import Background from './images/Background.svg';


function Homepage() {
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <h1>E-KUNJO</h1>
          <h3>A GOOD HELP FOR PLANT-LOVERS</h3>
        </header>
        <body className="Homepage-body">
          <div className='Homepage-Servdiv' id='Homepage-OurServices'>
            <h1>Our Services</h1>
          </div>
          <div className='Homebody-Servdiv'>
              <div><button className='App-Servbtn'>Find Nursery</button></div>
              <div><button className='App-Servbtn'>Get Plant Information</button></div>
              <div><button className='App-Servbtn'>Get Fertilizer Amount</button></div>
              <div><button className='App-Servbtn'>Detect Disease</button></div>
          </div>
        </body>
      </div>
    );
  }
  
  export default Homepage;