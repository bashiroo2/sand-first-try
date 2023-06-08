import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  // Helper function to convert rating to stars
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }

    return stars;
  };

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="rating">{renderStars(rating)}</div>
    </div>
  );
};

export default MovieCard;