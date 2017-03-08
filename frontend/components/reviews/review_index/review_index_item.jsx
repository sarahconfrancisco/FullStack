import React from 'react';

const ReviewIndexItem = (props) => {
  if(!props.review || !props.review.user){
    return(<div></div>);
  }
  return(
    <div className="review-index-item">
      <div className="left-review-item">
        <span>{props.review.user.fname} {props.review.user.lname}</span>
        <span>{props.review.user.zip}</span>
      </div>
      <div className="right-review-item">
        <ul className="res-stars">
          <li>
            <button value={1} className={ ((props.review.rating >= 1 ) ? "highlight " : "" ) + "smallest-star"} >
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={2} className={ ((props.review.rating >= 2 ) ? "highlight " : "" ) + "smallest-star"} >
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={3} className={ ((props.review.rating >= 3 ) ? "highlight " : "" ) + "smallest-star"} >
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={4} className={ ((props.review.rating >= 4 ) ? "highlight " : "" ) + "smallest-star"} >
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={5} className={ ((props.review.rating >= 5 ) ? "highlight " : "" ) + "smallest-star"} >
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>
          <li><span>{props.review.date}</span></li>
        </ul>
        <p>{props.review.body}</p>
      </div>
    </div>);
};

export default ReviewIndexItem;
