import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cat from './cat.jsx';
import Home from './home.jsx';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path = '/' element={<Home/>}></Route>
      <Route exact path='/cat' element={<Cat/>}></Route>
    </Routes>
  );
}

export default Main;