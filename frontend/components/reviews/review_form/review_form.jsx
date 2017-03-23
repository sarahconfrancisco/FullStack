import React from 'react';
import { Link, withRouter } from 'react-router';
import RestaurantIndexItem from '../../search/restaurant_index_item';
import Star from '../../star';

class ReviewForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: "",
      date: "",
      rating: null,
      user: {}
    };
  }

  componentDidMount(){
    this.props.showRestaurant(this.props.params.restaurantId);
    if(this.props.currentUser.id){
      this.props.getReview(this.props.currentUser.id, this.props.params.restaurantId);
    }
    else {
      this.props.router.push("/login");
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.reviews)
  }

  handleSubmit(){
    return((e) => {
      e.preventDefault();
      let review = {
        body: this.state.body,
        rating: this.state.rating,
      }
      if (this.state.user.id){
        review.id = parseInt(this.state.id);
        this.props.editReview(review)
      } else {
        this.props.addReview(review, this.props.params.restaurantId )
      }
      this.props.router.push(`restaurant/${this.props.params.restaurantId}`)
    });
  }

  update(field){
    return((e) => {
      this.setState({[field]: e.target.value});
    });
  }

  updateRating(rating){
    return((e) => {

      this.setState({rating: parseInt(rating)});
    });
  }
  hightlight(value){
    if(value >= parseInt(this.state.rating)){
      return "hightlight ";
    } else {
      return "";
    }
  }

  render(){
    if(!this.state.date){
      return(<div></div>);
    }

    const stars = [1,2,3,4,5].map((idx) => (
      <li className="small-square-button" key={idx} onClick={this.updateRating(idx).bind(this)}>
        <ul>
          <Star rating={this.state.rating} index={idx} name="small-square-button" />
        </ul>
      </li>));

    return(
      <div className="review-form">
        <h3>Write a Review</h3>
        <RestaurantIndexItem restaurant={this.props.restaurant} />
        <label>Your Review</label>
      <div className="review-input">
        <div className='review-rating'>

        <ul className="review-form-stars">
          {stars}
        </ul>
        <span>Select your rating</span>
      </div>
        <textarea placeholder="Your review helps others learn about great local restaurants.
          Please don't review this restaurant if you received a freebie for writing this review, or if you're connected in any way to the owner or employees." value={this.state.body || ""} onChange={this.update('body').bind(this)} />
      </div>
      <button className="post-review-button" onClick={this.handleSubmit().bind(this)}><span>Post Review</span></button>
    </div>
    );
  }
}

export default ReviewForm;
