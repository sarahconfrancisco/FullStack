import React from 'react';
import { Link, withRouter} from 'react-router'
import Star from '../../star';

class ResHeader extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
  let typeArray = [];
  for(var key in this.props.types){
    typeArray.push(this.props.types[key]);
  }
  typeArray = typeArray.join(", ").split(" ");

  const types = typeArray.map((type) => <a key={type}>{type} </a>);
  const stars = [1,2,3,4,5].map((idx) => <Star rating={this.props.rating}
                                               index={idx} key={idx}
                                               name="smaller-star"
                                         />)
  const price = "$".repeat(this.props.price);
  return(
    <div className='res-show-header'>

      <div className='res-header-left'>
        <h1>{this.props.name}</h1>
        <div className="res-rating">
          <ul className="res-stars">
            {stars}
          </ul>
          <span> {this.props.numReviews} reviews</span>
        </div>
        <div className="type-price">
          <span>{price} <p className="bullet">•</p> {types}</span>
        </div>
      </div>


      <div className='res-header-right'>
        <button
            onClick={() => this.props.router.push(`/newreview/${this.props.id}`)}
            className="medium-button">
          <Link>
          <img src={window.images.star_icon} className="star-icon" />
            <span>
              Write a Review
            </span>
          </Link>
        </button>

        <button className="small-button grey-button">
          <Link>
          <img src={window.images.add_photo_icon} className="photo-icon" />
            <span>
              Add Photo
            </span>
          </Link>
        </button>
      </div>

    </div>
  );
}

};

export default ResHeader;
