import React from 'react';
import Star from '../../star';

const ReviewIndexItem = (props) => {
  if(!props.review || !props.review.user){
    return(<div></div>);
  }
  const stars = [1,2,3,4,5].map((idx) => <Star rating={props.review.rating} index={idx} key={idx} name="smallest-star" />)
  return(
    <div className="review-index-item">
      <div className="left-review-item">
        <span>{props.review.user.fname} {props.review.user.lname}</span>
        <span>{props.review.user.zip}</span>
      </div>
      <div className="right-review-item">
        <ul className="res-stars">
          {stars}
          <li><span>{props.review.date}</span></li>
        </ul>
        <p>{props.review.body}</p>
      </div>
    </div>);
};

export default ReviewIndexItem;
