import React from 'react';
import Catalog from '../components/Catalog';
import { MOVIE_DB_API_KEY } from '../config';

const LandingPage = () => {
  const MOVIE_DB_API_URL = 'https://api.themoviedb.org/3/movie';

  return (
    <>
      <Catalog
        header={'Now Playing'}
        url={`${MOVIE_DB_API_URL}/now_playing?api_key=${MOVIE_DB_API_KEY}&language=en-US`}
      />
      <Catalog
        header={'Upcoming Movies'}
        url={`${MOVIE_DB_API_URL}/upcoming?api_key=${MOVIE_DB_API_KEY}&language=en-US`}
      />
      <Catalog
        header={'Popular Movies'}
        url={`${MOVIE_DB_API_URL}/popular?api_key=${MOVIE_DB_API_KEY}&language=en-US`}
      />
      <Catalog
        header={'Top-Rated Movies'}
        url={`${MOVIE_DB_API_URL}/top_rated?api_key=${MOVIE_DB_API_KEY}&language=en-US`}
      />
    </>
  );
};

export default LandingPage;
