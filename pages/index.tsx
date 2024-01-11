// pages/index.tsx
import { GetStaticProps } from 'next';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

interface Movie {
  id: string;
  title: string;
  // Add other movie properties here
}

interface HomeProps {
  movies: Movie[];
}

const Home: React.FC<HomeProps> = ({ movies }) => {
  return (
    <div>
    
      <MovieList movies={movies} />
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
