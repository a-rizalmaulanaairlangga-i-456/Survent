import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import './App.css'
import MapPages from './pages/Map.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<MapPages/>}/>
        </Routes>
    </Router>
  );
}

export default App;
