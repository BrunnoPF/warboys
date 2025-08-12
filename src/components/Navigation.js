import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllFilms } from '../data/filmsData';

function Navigation() {
  const location = useLocation();
  const films = getAllFilms();

  return (
    <nav className="top-nav">
      <div className="brand">
        <Link to="/">Warboys Films</Link>
      </div>
      <div className="nav-links">
        {films.map((film) => (
          <Link 
            key={film.id}
            to={`/films/${film.slug}`} 
            className={location.pathname === `/films/${film.slug}` ? 'active' : ''}
          >
            {film.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
