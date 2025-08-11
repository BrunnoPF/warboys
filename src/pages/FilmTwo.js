import React from 'react';

function FilmTwo() {
  return (
    <div className="page container">
      <section className="hero-section">
        <h1 className="main-title">Film Two</h1>
        <p className="subtitle">A placeholder logline for Film Two goes here.</p>
      </section>

      <section className="info-cards">
        <div className="info-card">
          <h3>Synopsis</h3>
          <p>
            Placeholder synopsis text for Film Two. This content will be replaced from Supabase.
          </p>
        </div>
        <div className="info-card">
          <h3>Credits</h3>
          <p>Director: John Smith • Producer: Producer Co. • Cast: TBA</p>
        </div>
        <div className="info-card">
          <h3>Details</h3>
          <p>Runtime: 112 min • Language: EN • Year: 2026</p>
        </div>
      </section>
    </div>
  );
}

export default FilmTwo;



