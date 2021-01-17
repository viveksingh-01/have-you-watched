import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { API_URL, IMAGE_URL } from '../config/constants';
import { MOVIE_DB_API_KEY } from '../config/key';
import { IMovieDetail } from '../types/MovieDetail';

type TParams = { movieId: string };

const MovieDetails: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [movieDetail, setMovieDetail] = useState<Partial<IMovieDetail>>({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/${match.params.movieId}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
        );
        setMovieDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [match.params.movieId]);

  const getRatingColor = (rating: number | any): string => {
    let ratingColor = '#ff0000';
    if (rating >= 8) {
      ratingColor = '#00ff00';
    } else if (rating >= 7) {
      ratingColor = 'yellow';
    } else if (rating >= 6) {
      ratingColor = 'orange';
    }
    return ratingColor;
  };

  return (
    <>
      <Row>
        <Col>
          <img src={`${IMAGE_URL}${movieDetail.poster_path}`} alt={movieDetail.title} width="300px" />
        </Col>
        <Col>
          <header className="mb-4">
            <h3 className="movie-detail__title">{movieDetail.title}</h3>
            <h6 className="text-muted">
              <i>"{movieDetail.tagline}"</i>
            </h6>
          </header>
          <section className="mb-4">
            <h5>Overview</h5>
            <p>{movieDetail.overview}</p>
          </section>
          <section className="mb-4 d-flex align-items-center">
            <span
              className="movie-detail__rating mr-3"
              style={{ backgroundColor: getRatingColor(movieDetail.vote_average) }}>
              {movieDetail.vote_average?.toFixed(1)}
            </span>
            <span className="movie-detail__vote-count">({movieDetail.vote_count} votes)</span>
          </section>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col className="key__col">Status:</Col>
                <Col className="value__col">{movieDetail.status}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col className="key__col">Runtime:</Col>
                <Col className="value__col">{movieDetail.runtime} mins</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col className="key__col">Release Date:</Col>
                <Col className="value__col">{movieDetail.release_date}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col className="key__col">Popularity:</Col>
                <Col className="value__col">{movieDetail.popularity}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col className="key__col">Budget:</Col>
                <Col className="value__col">${movieDetail.budget}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col className="key__col">Revenue:</Col>
                <Col className="value__col">${movieDetail.revenue}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetails;
