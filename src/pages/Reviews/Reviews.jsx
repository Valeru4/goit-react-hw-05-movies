import { fetchMovieReviews } from 'components/services/API';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

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
      {isLoading && <p>Loading...</p>}
      <Link to={backLinkHref.current}>Go back</Link>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Reviews;
