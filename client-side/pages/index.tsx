import { GetStaticProps } from 'next';
import axios from 'axios';
import MovieDetails from '../components/MovieDetails';
import Header from '../components/Header';

interface Movie {
  title: string;
  releaseDate: string;
  trailerLink: string;
  poster: string;
  genres: string[];
}

interface HomeProps {
  movies: Movie[];
}

const Home: React.FC<HomeProps> = ({ movies }) => {

  const firstMovie = movies[0];

  return (
    <div>
      <Header />
    
      <MovieDetails movie={firstMovie} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await axios.get('http://localhost:8080/api/v1/movies');
  const movies: Movie[] = response.data;

  return {
    props: {
      movies,
    },
  };
};

export default Home;
