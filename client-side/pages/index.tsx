import { GetStaticProps } from 'next';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Hero from '../components/Hero';

interface Movie {
  id: string;
  title: string;
}

interface HomeProps {
  movies: Movie[];
}

const Home: React.FC<HomeProps> = ({ movies }) => {
  return (
    <div>
       <Header />
       <Hero/>
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
