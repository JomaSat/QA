import './App.css'
import { AnimeList } from './components/AnimeList/AnimeList';
import { Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { Footer } from './components/Footer/Footer';
import { Anime } from './pages/Anime/Anime';
import { AnimeDetail } from './pages/AnimeDetail/AnimeDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/search" element={<SearchPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
