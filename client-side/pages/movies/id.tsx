import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import MovieDetails from '../../components/MovieDetails';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  trailerLink: string;
  poster: string;
  genres: string[];
}

interface MoviePageProps {
  movie: Movie;
  nextMovieId?: number;
}

const MoviePage: React.FC<MoviePageProps> = ({ movie, nextMovieId }) => {
  return <MovieDetails movie={movie} nextMovieId={nextMovieId} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of movie IDs from your API or other source
  const response = await axios.get('http://localhost:8080/api/v1/movie-ids');
  const movieIds: number[] = response.data;

  // Create paths for each movie ID
  const paths = movieIds.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false, // or true if you want to handle fallback for non-existent paths
  };
};

export const getStaticProps: GetStaticProps<MoviePageProps> = async ({ params }) => {
  const movieId = Number(params?.id);
  const response = await axios.get(`http://localhost:8080/api/v1/movies/${movieId}`);
  const movie: Movie = response.data;

  // Retrieve the ID of the next movie (implement your logic here)
  const nextMovieId = movieId + 1;

  return {
    props: {
      movie,
      nextMovieId,
    },
  };
};

export default MoviePage;
