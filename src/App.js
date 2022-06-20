import './App.css';
import { Game } from './components/Game/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { History } from './components/GameTheme/History/HistoryGame/History';
import { Music } from './components/GameTheme/Music/MusicGame/Music';
import { Geography } from './components/GameTheme/Geography/Geography/Geography';
import { Biology } from './components/GameTheme/Biology/BiologyGame/Biology';
import { Art } from './components/GameTheme/Art/ArtGame/Art';
import { Shop } from './components/Game/Shop/Shop';
import { AllTheme } from './components/GameTheme/AllTheme/AllThemeGame/AllTheme';

function App() {
  return ( 
      <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Game />} />
          <Route  path="/game/history" element={<History />} />
          <Route path="/game/music" element={<Music />} />
          <Route path="/game/geography" element={<Geography />} />
          <Route path="/game/art" element={<Art />} />
          <Route path="/game/biology" element={<Biology />} />
          <Route path="/game/allTheme" element={<AllTheme />} />
          <Route path="/shop" element={<Shop />} />
      </Routes>
      </BrowserRouter>      
      </div>
          )
    }

export default App;
/**/