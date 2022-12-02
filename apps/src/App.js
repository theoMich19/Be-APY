import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {HomePage} from './routes/HomePage.js';
import {DashBoardPage} from './routes/DashBoardPage.js';
import {InformPage} from './routes/InformPage.js';
import {HighScoresPage} from './routes/HighScoresPage.js';
import {CardPage} from './routes/CardPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/InformPage/" element={<InformPage />} />
            <Route path="/CardPage/" element={<CardPage />} />
            <Route path="/DashBoardPage/" element={<DashBoardPage />} />
            <Route path="/HighScores/" element={<HighScoresPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
