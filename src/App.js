import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FilmPage from './pages/FilmPage';
import FilmOne from './pages/FilmOne';
import FilmTwo from './pages/FilmTwo';
import FilmThree from './pages/FilmThree';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:filmId" element={<FilmPage />} />
        {/* Keep legacy routes for backward compatibility */}
        <Route path="/films/film-one" element={<FilmOne />} />
        <Route path="/films/film-two" element={<FilmTwo />} />
        <Route path="/films/film-three" element={<FilmThree />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
