import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {HomePage} from './components/HomePage/HomePage.js';
import {DashBoardPage} from './components/DashBoardPage.js';
import {InformPage} from './components/InformPage.js';
import {HighScoresPage} from './components/HighScoresPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/InformPage/" element={<InformPage />} />
            <Route path="/DashBoardPage/" element={<DashBoardPage />} />
            <Route path="/HighScoresPage/" element={<HighScoresPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
