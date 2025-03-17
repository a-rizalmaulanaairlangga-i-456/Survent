import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import './App.css'
import MapPage from './pages/Map.jsx';
import AboutPage from './pages/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/map' element={<MapPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
