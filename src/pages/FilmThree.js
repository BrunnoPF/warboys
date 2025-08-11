import React from 'react';

function FilmThree() {
  return (
    <div className="page container">
      <section className="hero-section">
        <h1 className="main-title">Film Three</h1>
        <p className="subtitle">A placeholder logline for Film Three goes here.</p>
      </section>

      <section className="info-cards">
        <div className="info-card">
          <h3>Synopsis</h3>
          <p>
            Placeholder synopsis text for Film Three. This content will be replaced from Supabase.
          </p>
        </div>
        <div className="info-card">
          <h3>Credits</h3>
          <p>Director: Alex Lee • Producer: Producer Co. • Cast: TBA</p>
        </div>
        <div className="info-card">
          <h3>Details</h3>
          <p>Runtime: 89 min • Language: EN • Year: 2024</p>
        </div>
      </section>
    </div>
  );
}

export default FilmThree;



