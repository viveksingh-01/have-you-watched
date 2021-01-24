import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IMovie } from '../types/Movie';
import { LoadingSpinner, MovieCard } from '../components';

const Catalog = ({ header, url }: { header: string; url: string }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(url);
        setMovies(data.results);
        setShowSpinner(false);
      } catch (error) {
        console.error(error);
        setShowSpinner(false);
      }
    };
    fetchMovies();
  }, [url]);

  return (
    <>
      <header>
        <h4>{header}</h4>
      </header>
      <section className="movie__catalog">
        {showSpinner ? (
          <LoadingSpinner />
        ) : movies?.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h6>Oops, no movies available!</h6>
        )}
      </section>
    </>
  );
};

export default Catalog;
