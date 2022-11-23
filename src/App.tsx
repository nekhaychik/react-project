import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header/Header';
import AboutUs from 'components/AboutUs/AboutUs';
import Page404 from 'components/404/404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
