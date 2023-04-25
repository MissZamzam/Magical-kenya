import React, { useState } from 'react';

function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

//   function handleUpdateReview(updatedReview) {
//     const index = reviews.findIndex(review => review.id === updatedReview.id);
//     const updatedReviews = [...reviews];
//     updatedReviews[index] = updatedReview;
//     setReviews(updatedReviews);
//   }

  function handleDeleteReview(reviewId) {
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
  }

  return (
    <div>
      <h2>Leave us a Review</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            {/* <button onClick={() => handleDeleteReview(review.id)}>Delete</button> */}

          </li>
        ))}
      </ul>
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
}

function ReviewForm({ onSubmit }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = { id: Date.now(), text, rating };
    onSubmit(newReview);
    setText('');
    setRating('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Review</h3>
      <label htmlFor="text">Review Text:</label>
      <input type="text" id="text" value={text} onChange={e => setText(e.target.value)} required />
      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" value={rating} onChange={e => setRating(e.target.value)} min="1" max="5" required />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ReviewSection