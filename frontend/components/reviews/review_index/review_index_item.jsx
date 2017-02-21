import React from 'react';

const ReviewIndexItem = (props) => {
  if(!props.review.user){
    return(<div></div>);
  }
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
