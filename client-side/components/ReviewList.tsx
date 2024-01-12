
import React from 'react';

interface ReviewListProps {
  reviews: { body: string; created: string; updated: string }[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review.body}</p>
            <p>Created: {review.created}</p>
            <p>Updated: {review.updated}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
