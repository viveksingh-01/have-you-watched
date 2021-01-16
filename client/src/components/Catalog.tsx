import React from 'react';
import { Movie } from '../types/Movie';
import MovieCard from './MovieCard';

const Catalog = ({ header, movies }: { header: string; movies: Movie[] }) => {
  return (
    <>
      <header>
        <h3>{header}</h3>
      </header>
      <section className="d-flex justify-content-between flex-wrap">
        {movies.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h6>Oops, no movies available!</h6>
        )}
      </section>
    </>
  );
};

export default Catalog;
