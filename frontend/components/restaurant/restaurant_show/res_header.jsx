import React from 'react';
import { Link } from 'react-router'


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
  let starImages;
  const types = (typeArray.map((type) => <a key={type}>{type} </a>));
  // const redStarImages = redStar.repeat(props.rating);
  // const whiteStarImages = whiteStar.repeat(5-props.rating);
  const price = "$".repeat(this.props.price);

  return(
    <div className='res-show-header'>
      <div className='res-header-left'>
        <h1>{this.props.name}</h1>
        <div>
          <span># Ratings</span>
        </div>
        <div className="type-price">
          <span>{price} • {types}</span>
        </div>
      </div>


      <div className='res-header-right'>
        <button className="medium-button">
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
