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
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-2">Release Date: {releaseDate}</p>
      <p className="text-gray-600 mb-4">Genres: {genres.join(', ')}</p>
      <iframe
        className="w-full h-96 mb-4"
        width="560"
        height="315"
        src={trailerLink}
        title={`${title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <img
        className="w-full object-cover rounded-lg"
        src={poster}
        alt={`${title} Poster`}
        style={{ aspectRatio: '2/3' }} 
      />
    </div>
  );
};

export default MovieDetails;
