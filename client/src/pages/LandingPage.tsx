import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Catalog from '../components/Catalog';
import { MOVIE_DB_API_KEY } from '../config';

const LandingPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}&language=en-US`
      );
      setPopularMovies(data.results);
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Catalog header={'Popular Movies'} movies={popularMovies} />
    </>
  );
};

export default LandingPage;
