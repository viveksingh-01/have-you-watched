import React from 'react';
import Catalog from '../components/Catalog';
import { API_URL } from '../config/constants';
import { MOVIE_DB_API_KEY } from '../config/key';

const LandingPage: React.FC = () => {
  return (
    <>
      <Catalog header={'Now Playing'} url={`${API_URL}/now_playing?api_key=${MOVIE_DB_API_KEY}&language=en-US`} />
      <Catalog header={'Upcoming Movies'} url={`${API_URL}/upcoming?api_key=${MOVIE_DB_API_KEY}&language=en-US`} />
      <Catalog header={'Popular Movies'} url={`${API_URL}/popular?api_key=${MOVIE_DB_API_KEY}&language=en-US`} />
      <Catalog header={'Top-Rated Movies'} url={`${API_URL}/top_rated?api_key=${MOVIE_DB_API_KEY}&language=en-US`} />
    </>
  );
};

export default LandingPage;
