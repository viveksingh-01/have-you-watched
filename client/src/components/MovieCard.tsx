import React from 'react';
import { Card } from 'react-bootstrap';
import { Movie } from '../types/Movie';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <Card style={{ width: '18rem' }} className="movie__card">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <Card.Body className="movie__card--body">
          <Card.Title className="movie__card--title">{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
