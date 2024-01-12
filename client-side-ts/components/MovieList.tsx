import { FunctionComponent } from 'react';

interface Movie {
  id: string;
  title: string;
  
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => (
  <div>
    <h1>Movies</h1>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  </div>
);

export default MovieList;
