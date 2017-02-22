import React from 'react';
import { Link, withRouter} from 'react-router'


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

  const types = (typeArray.map((type) => <a key={type}>{type} </a>));

  const price = "$".repeat(this.props.price);
  return(
    <div className='res-show-header'>
      <div className='res-header-left'>
        <h1>{this.props.name}</h1>
        <div className="res-rating">
          <ul className="res-stars">
            <li>
              <button value={1} className={ ((this.props.rating >= 1 ) ? "highlight " : "" ) + "smaller-star"} >
                <img src={window.images.star_icon} className="star-icon-smaller" />
              </button>
            </li>

            <li>
              <button value={2} className={ ((this.props.rating >= 2 ) ? "highlight " : "" ) + "smaller-star"} >
                <img src={window.images.star_icon} className="star-icon-smaller" />
              </button>
            </li>

            <li>
              <button value={3} className={ ((this.props.rating >= 3 ) ? "highlight " : "" ) + "smaller-star"} >
                <img src={window.images.star_icon} className="star-icon-smaller" />
              </button>
            </li>

            <li>
              <button value={4} className={ ((this.props.rating >= 4 ) ? "highlight " : "" ) + "smaller-star"} >
                <img src={window.images.star_icon} className="star-icon-smaller" />
              </button>
            </li>

            <li>
              <button value={5} className={ ((this.props.rating >= 5 ) ? "highlight " : "" ) + "smaller-star"} >
                <img src={window.images.star_icon} className="star-icon" />
              </button>
            </li>

          </ul>
          <span> {this.props.numReviews} reviews</span>
        </div>
        <div className="type-price">
          <span>{price} • {types}</span>
        </div>
      </div>


      <div className='res-header-right'>
        <button onClick={() => this.props.router.push(`/newreview/${this.props.id}`)} className="medium-button">
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
