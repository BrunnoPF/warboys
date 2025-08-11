import React from 'react';

function FilmOne() {
  return (
    <div className="page container">
      <section className="hero-section">
        <h1 className="main-title">Film One</h1>
        <p className="subtitle">A placeholder logline for Film One goes here.</p>
      </section>

      <section className="info-cards">
        <div className="info-card">
          <h3>Synopsis</h3>
          <p>
            Placeholder synopsis text for Film One. This content will be replaced from Supabase.
          </p>
        </div>
        <div className="info-card">
          <h3>Credits</h3>
          <p>Director: Jane Doe • Producer: Producer Co. • Cast: TBA</p>
        </div>
        <div className="info-card">
          <h3>Details</h3>
          <p>Runtime: 98 min • Language: EN • Year: 2025</p>
        </div>
      </section>
    </div>
  );
}

export default FilmOne;



