
import React from 'react';

interface MovieDetailsProps {
  movie: {
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    genres: string[];
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const { title, releaseDate, trailerLink, poster, genres } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <p>Release Date: {releaseDate}</p>
      <p>Genres: {genres.join(', ')}</p>
      <iframe width="560" height="315" src={trailerLink} title={`${title} Trailer`} frameBorder="0" allowFullScreen></iframe>
      <img src={poster} alt={`${title} Poster`} />
   
    </div>
  );
};

export default MovieDetails;
