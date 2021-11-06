import React from 'react';
import logo from './plant.jfif';

export default function Home() {
   return (
      <div>
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>PLANT FORAGING!</h1>
            <p>
            Welcome to our website :) 
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Start Eating
            </a>
        </header>
      </div>
   );
}