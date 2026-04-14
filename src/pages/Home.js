import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { getAllFilms, companyData } from '../data/filmsData';

function Home() {
  const films = getAllFilms();
  const companyInfo = companyData;

  return (
    <header className="App-header">
      <Carousel
        height={600}
        images={[
          { src: films[0]?.banner_image || 'https://images.unsplash.com/photo-1489599112830-07d977636ad3?w=1200&h=400&fit=crop', alt: films[0]?.title || 'Backlands Films production still 1' },
          { src: films[1]?.banner_image || 'https://images.unsplash.com/photo-1611506050671-6c3835a57de1?w=1200&h=400&fit=crop', alt: films[1]?.title || 'Backlands Films production still 2' }
        ]}
      />
      <div className="hero-section">
        <h1 className="main-title">{companyInfo?.name || 'Backlands Films'}</h1>
      </div>

      <div className="company-section">
        <div className="info-card company-description">
          <h3>About Backlands Films</h3>
          <div className="company-text">
            {companyInfo?.about?.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>


      <div className="films-floating-section">
        <h2 className="films-title">Films</h2>
        <div className="film-posters-floating">
          {films && films.length > 0 ? (
            films.map((film) => (
              <Link 
                key={film.id} 
                className="film-poster-link" 
                to={`/films/${film.slug || film.id}`}
              >
                <div className="poster-container">
                  <img 
                    src={film.poster_url || film.image_url} 
                    alt={`${film.title} poster`}
                    className="home-poster"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x450/333/ccc?text=No+Image';
                    }}
                  />
                  <div className="poster-overlay">
                    <h4 className="poster-title">{film.title}</h4>
                    <p className="poster-year">{film.year}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No films available</p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Home;


