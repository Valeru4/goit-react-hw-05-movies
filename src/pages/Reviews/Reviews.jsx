import { fetchMovieReviews } from 'components/services/API';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  ReviewItem,
  ReviewList,
  StyledLink,
  Text,
  Title,
} from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMovieReviews(movieId);
        console.log(data);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}

      <ReviewList>
        {reviews &&
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <Title>Author: {review.author}</Title>
              <Text>{review.content}</Text>
            </ReviewItem>
          ))}
      </ReviewList>

      <StyledLink to={backLinkHref.current}>Go back</StyledLink>

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Reviews;
