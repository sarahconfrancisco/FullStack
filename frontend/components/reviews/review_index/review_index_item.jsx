import React from 'react';

const ReviewIndexItem = (props) => {

  return(
    <div>
      <span>{props.review.user.fname} {props.review.user.lname}</span>
      <br />
      <span>{props.review.rating} stars</span>
      <br />
      <p>{props.review.body}</p>
    </div>);
};

export default ReviewIndexItem;
