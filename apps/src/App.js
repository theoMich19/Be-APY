import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {HomePage} from './routes/HomePage.js';
import {DashBoardPage} from './routes/DashBoardPage.js';
import {InformPage} from './routes/InformPage.js';
import {HighScoresPage} from './routes/HighScoresPage.js';
import {CardPageConception} from './routes/CardPageConception.js';
import {CardPageContraception} from './routes/CardPageContraception.js';
import {CardPageCorps} from './routes/CardPageCorps.js';
import {CardPageInfections} from './routes/CardPageInfections.js';

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/InformPage/" element={<InformPage />} />
            <Route path="/DashBoardPage/" element={<DashBoardPage />} />
<<<<<<< HEAD
            <Route path="/HighScoresPage/" element={<HighScoresPage />} />

            <Route path="/CardPageConception/" element={<CardPageConception />} />
            <Route path="/CardPageContraception/" element={<CardPageContraception />} />
            <Route path="/CardPageCorps/" element={<CardPageCorps />} />
            <Route path="/CardPageInfections/" element={<CardPageInfections />} />
=======
            <Route path="/HighScores/" element={<HighScoresPage />} />
>>>>>>> 7546313e647d89979a74065ec45673ad4ca3fde5
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
