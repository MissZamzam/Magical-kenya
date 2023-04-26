import React, { useState } from 'react';
import './Review.css'

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
    <div className='review-container'>
      <h2>Leave us a Review</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div className='review'>
                 <p className='paragraph-review'>{review.text}</p>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>

            </div>
         
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
      <input type="text" id="text" value={text} onChange={e => setText(e.target.value)} required placeholder='Add your review here'/>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ReviewSection