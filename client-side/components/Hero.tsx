import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'; 
import Link from 'next/link'; 
import Button from 'react-bootstrap/Button';
import styles from './Hero.module.css';

interface Movie {
  imdbId: string;
  backdrops: string[];
  poster: string;
  title: string;
  trailerLink: string;
}

interface HeroProps {
  movies?: Movie[];
}

const Hero: React.FC<HeroProps> = ({ movies }) => {
  const router = useRouter(); // Use useRouter from Next.js

  function reviews(movieId: string) {
    router.push(`/Reviews/${movieId}`); // Use router.push for navigation
  }

  return (
    <div className={styles['movie-carousel-container']}>
      <Carousel>
        {movies?.map((movie) => (
          <Paper key={movie.imdbId}>
            <div className="movie-card-container">
              <div
                className="movie-card"
                style={{ '--img' : `url(${movie.backdrops[0]})` } as React.CSSProperties}
              >
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt="" />
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                  <div className="movie-buttons-container">
                    <Link href={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                      <a>
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </a>
                    </Link>
                    <div className="movie-review-button-container">
                      <Button
                        variant="info"
                        onClick={() => reviews(movie.imdbId)}
                      >
                        Reviews
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
