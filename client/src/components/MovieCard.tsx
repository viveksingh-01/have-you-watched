import React from 'react';
import { Card } from 'react-bootstrap';
import { Movie } from '../types/Movie';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <Card style={{ width: '18rem' }} className="movie__card">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <Card.Body className="p-3 movie__card--body">
          <Card.Title className="m-0 d-flex justify-content-between align-items-center">
            <span className="mr-2 movie__title">{movie.title}</span>
            <span className="movie__rating">{movie.vote_average.toFixed(1)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
