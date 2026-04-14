import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilmBySlug, getFilmById } from '../data/filmsData';

function FilmPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFilm = () => {
      setLoading(true);
      // Try to get by slug first, then by ID
      let filmData = getFilmBySlug(filmId);
      if (!filmData) {
        filmData = getFilmById(filmId);
      }
      
      if (filmData) {
        setFilm(filmData);
        setError(null);
      } else {
        setError('Film not found');
      }
      setLoading(false);
    };

    loadFilm();
  }, [filmId]);

  if (loading) {
    return (
      <div className="page container">
        <section className="hero-section">
          <h1 className="main-title">Loading...</h1>
        </section>
      </div>
    );
  }

  if (error || !film) {
    return (
      <div className="page container">
        <section className="hero-section">
          <h1 className="main-title">Film Not Found</h1>
          <p className="subtitle">The requested film could not be found.</p>
          <Link to="/" className="cta-button" style={{ textDecoration: 'none', marginTop: '20px', display: 'inline-block' }}>
            Back to Home
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="film-page">
      {/* Hero Section with Full-Width Banner */}
      <div className="film-hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${film.banner_image || film.image_url || film.poster_url})`,
      }}>
        <div className="film-hero-content">
          <div className="film-meta">
            <span className="film-year">{film.year}</span>
            <span className="film-genre">{film.genre}</span>
            <span className="film-runtime">{film.runtime} min</span>
          </div>
          <h1 className="film-title">{film.title}</h1>
          <p className="film-logline">{film.logline}</p>
          
          <div className="film-actions">
            {film.video_player && (
              <a 
                href={film.video_player} 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-button"
              >
                ▶ Watch Trailer
              </a>
            )}
            <Link to="/" className="back-button">
              ← Back to Films
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="film-content">
        <div className="film-grid">
          {/* Left Column - Synopsis and Video */}
          <div className="film-main">
            <section className="film-synopsis">
              <h2>Synopsis</h2>
              <div className="synopsis-text">
                {film.synopsis?.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {film.video_player && (
              <section className="film-video">
                <div className="video-container">
                  <iframe
                    src={film.video_player.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                    title={`${film.title} - Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Poster and Details */}
          <div className="film-sidebar">
            <div className="film-poster">
              <img 
                src={film.poster_url || film.image_url} 
                alt={`${film.title} poster`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <div className="film-details-card">
              <h3>Film Details</h3>
              <div className="detail-row">
                <span className="detail-label">Director</span>
                <span className="detail-value">{film.director || 'TBA'}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Runtime</span>
                <span className="detail-value">{film.runtime} minutes</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Language</span>
                <span className="detail-value">{film.language || 'English'}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Genre</span>
                <span className="detail-value">{film.genre}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Release Year</span>
                <span className="detail-value">{film.year}</span>
              </div>
            </div>

            {film.festivals && (
              <div className="film-festivals-card">
                <h3>Festival Selections</h3>
                <p>{film.festivals}</p>
              </div>
            )}

            {film.awards && (
              <section className="film-awards">
                <h2>Awards & Recognition</h2>
                <div className="awards-content">
                  <p>{film.awards}</p>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
