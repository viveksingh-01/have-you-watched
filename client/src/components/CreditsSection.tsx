import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { API_URL, IMAGE_URL } from '../config/constants';
import { API_KEY } from '../config/key';
import { IMovieCredits } from '../types/MovieCredits';

interface IProps {
  movieId: string;
}

const CreditsSection: React.FC<IProps> = ({ movieId }) => {
  const [movieCredits, setMovieCredits] = useState<Partial<IMovieCredits[]>>([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
        setMovieCredits(data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {movieCredits.length > 0 &&
        movieCredits.slice(0, 5).map(credit => (
          <Card className="credit-cast__card">
            <Card.Img variant="top" src={`${IMAGE_URL}${credit?.profile_path}`} />
            <Card.Body className="p-3">
              <Card.Title style={{ fontSize: '16px' }}>
                <span style={{ color: 'var(--accent-color)' }}>{credit?.name}</span>
              </Card.Title>
              <Card.Text style={{ fontSize: '15px' }}>
                as <i>"{credit?.character}"</i>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default CreditsSection;
