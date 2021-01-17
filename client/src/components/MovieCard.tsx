import React from 'react';
import { Card } from 'react-bootstrap';
import { IMAGE_URL } from '../config/constants';
import { IMovie } from '../types/Movie';

interface IProps {
  movie: IMovie;
}

const MovieCard: React.FC<IProps> = ({ movie }) => {
  return (
    <>
      <Card style={{ width: '18rem' }} className="movie__card">
        <Card.Img variant="top" src={`${IMAGE_URL}${movie.poster_path}`} />
        <Card.Body className="p-3 movie__card--body">
          <Card.Title className="m-0 d-flex justify-content-between align-items-center">
            <span className="mr-2 movie__title">{movie.title}</span>
            <span className="movie__rating">{movie.vote_average.toFixed(1)}</span>
          </Card.Title>
          <div className="movie__overview">
            <Card.Subtitle className="font-weight-bold my-2">Overview</Card.Subtitle>
            <Card.Text>{movie.overview}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
