import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render(){
    if(!(Object.keys(this.props.reviews).length)){
      return(<div></div>);
    }
    let reviews = [];
    for(let key in this.props.reviews){
      reviews.push(this.props.reviews[key]);
    }
    const reviewItems = reviews.map((review) => {
      return(
        <li key={review.user.id}>
          <ReviewIndexItem review={review} />
        </li>)
    })
    return(
      <div className="reviews">
        <ul>
          {reviewItems}
        </ul>
      </div>);
  }

}

export default ReviewIndex;
