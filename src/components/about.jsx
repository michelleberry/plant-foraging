import React from 'react';
import './about.css';
import logo from './logoplant.png';

export default function About() {
   return (
      <div>
         <div class="title">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to the Savoury Shrubs website!</h1>
         </div>
         <h2>ABOUT US</h2>
         <p>We are a collaborative created to help people find sources for food by foraging! 
             Foraging is a resourceful and sustainable way to live but information on what is safe to eat can 
             be difficult to gather which is why we created Savoury Shrubs. Our collaborative 
             helps individuals on their quest to find local and safe sources of food near them.</p> 
         <h2>MISSION STATEMENT</h2>
         <p>We are striving to teach the community about an alternative way to source food by foraging and to educate the population on the correct ways to forage and consume plants.</p> 
      </div>
   );
}