import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import TeamSelection from './components/TeamSelection';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={PlayerList} />
        <Route path="/team-selection" component={TeamSelection} />
        <Route path="/results" component={Results} />
      </Routes>
    </Router>
  );
}

export default App;