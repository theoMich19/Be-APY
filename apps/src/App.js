import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './components/HomePage.js';
import './components/DashBoardPage.js';
import './components/InformPage.js';
import './components/HighScoresPage.js';

function App() {
  return (
    <div className="App">
      <h1>Hello world !</h1>
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
