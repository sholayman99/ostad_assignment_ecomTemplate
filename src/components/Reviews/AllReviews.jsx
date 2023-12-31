import React from 'react';

const AllReviews = ({review}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">{review['name']} </h2>
      <p>{review['details']} </p>
      <div className="card-actions justify-start">
          <div className="rating">

              <input type="radio" value={review['rating']} name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" value={review['rating']} name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" value={review['rating']} name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" value={review['rating']} name="rating-4" className="mask mask-star-2 bg-orange-400" />

          </div>
      </div>
</div>
</div>
    );
};

export default AllReviews;