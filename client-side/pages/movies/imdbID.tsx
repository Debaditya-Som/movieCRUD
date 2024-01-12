
import axios from 'axios';
import { GetServerSideProps } from 'next';
import MovieDetails from '../../components/MovieDetails';
import Backdrops from '../../components/Backdrops';
import ReviewList from '../../components/ReviewList';

interface MovieDetailProps {
  movie: {
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    genres: string[];
    backdrops: string[];
    reviews: { body: string; created: string; updated: string }[];
  };
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <div>
      <MovieDetails movie={movie} />
      <Backdrops backdrops={movie.backdrops} />
      <ReviewList reviews={movie.reviews} />
      {/* Include other components as needed */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { imdbID } = params;
  const res = await axios.get(`http://localhost:8080/api/v1/movies/${imdbID}`);
  const movie = res.data;

  return {
    props: { movie },
  };
};

export default MovieDetail;
