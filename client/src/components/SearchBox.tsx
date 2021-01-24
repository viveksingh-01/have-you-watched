import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IMAGE_URL, SEARCH_API_URL } from '../config/constants';
import { MOVIE_DB_API_KEY } from '../config/key';
import { IMovieDetail } from '../types/MovieDetail';

const SearchBox: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<Partial<IMovieDetail[]>>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const resultContainerRef = useRef<HTMLHeadingElement>(null);
  const history = useHistory();

  const fetchMovies = async (searchedText: string) => {
    const url = `${SEARCH_API_URL}?api_key=${MOVIE_DB_API_KEY}&query=${searchedText}`;
    try {
      const { data } = await axios.get(url);
      setSearchResults(data?.results?.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = (e: any) => {
    const { value } = e.target;
    if (value) {
      fetchMovies(value);
      setShowResults(true);
    }
    setSearchText(value);
  };

  const handleSearchResultClick = (movieId: number | undefined) => {
    history.push(`/movies/${movieId}`);
  };

  // Handle and check if the click was outside Search-Results container
  const handleOutsideClick = (e: any) => {
    if (resultContainerRef.current && resultContainerRef.current!.contains(e.target)) {
      return;
    }
    setShowResults(false);
  };

  // Setup mouse-click listener
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="py-3 my-4 px-md-3 w-100 d-flex justify-content-center">
      <div className="search-box__container">
        <Form inline className="search-box">
          <Form.Label htmlFor="formInputSearch" srOnly>
            Search
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2 search-box__input"
            placeholder="Search"
            value={searchText}
            onChange={searchHandler}
          />
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Form>
        {searchText && showResults && (
          <section className="search-result__container">
            {searchResults.length > 0 ? (
              searchResults.map(movie => (
                <div className="search-result" key={movie?.id} onClick={() => handleSearchResultClick(movie?.id)}>
                  <Image src={`${IMAGE_URL}${movie?.poster_path}`} width={'72px'} />
                  <div className="p-2 px-3">
                    <h6>{movie?.title}</h6>
                    <p className="text-muted">{movie?.release_date?.split('-')[0]}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-2 px-3">No results found.</p>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
