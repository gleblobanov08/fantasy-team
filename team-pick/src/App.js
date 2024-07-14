import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamSelection from './components/TeamSelection';
import Results from './components/Results';
import HomePage from './components/HomePage';
import './styles/App.css';

function App() {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/team-selection" element={<TeamSelection />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;