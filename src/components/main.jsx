import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home.jsx';
import Socials from './socials.jsx';
import Plants from './plants.jsx';
import About from './about.jsx';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path = '/' element={<Home/>}></Route>
      <Route exact path='/social' element={<Socials/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/plants' element={<Plants/>}></Route>
    </Routes>
  );
}

export default Main;