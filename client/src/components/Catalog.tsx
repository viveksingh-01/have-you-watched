import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Movie } from '../types/Movie';
import LoadingSpinner from './LoadingSpinner';
import MovieCard from './MovieCard';

const Catalog = ({ header, url }: { header: string; url: string }) => {
  const [movies, setMovies]: [Movie[], any] = useState([]);
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
        <h3>{header}</h3>
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
