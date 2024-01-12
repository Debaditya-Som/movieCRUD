// components/MovieCard.tsx
import React from 'react';
import Link from 'next/link';

interface MovieCardProps {
  title: string;
  posterUrl: string;
  imdbId: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, imdbId }) => {
  return (
    <div className="mb-8">
      <img src={posterUrl} alt={title} className="rounded-md w-full mb-2" />
      <h2 className="text-lg font-bold">{title}</h2>
      <Link href={`/reviews/${imdbId}`}>
        <a className="bg-blue-500 text-white px-4 py-2 rounded-md">Review</a>
      </Link>
    </div>
  );
};

export default MovieCard;
