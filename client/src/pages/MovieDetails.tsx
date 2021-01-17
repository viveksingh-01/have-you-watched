import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { API_URL } from '../config/constants';
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

  return (
    <>
      <header>{movieDetail.title}</header>
    </>
  );
};

export default MovieDetails;
