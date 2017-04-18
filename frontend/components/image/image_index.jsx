import React from 'react';
import LoadingIcon from '../loading_icon';
import ImageIndexItem from './image_index_item';
import RestaurantIndexItem from '../search/restaurant_index_item';
import  { Link } from 'react-router';

class ImageIndex extends React.Component {

    constructor(props){
      super(props);
    }


    componentDidMount(){
      this.props.getIndexImages(this.props.params.restaurantId);
      this.props.showRestaurant(this.props.params.restaurantId);
    }

    render(){
        if(this.props.loading){
            return <LoadingIcon />;
        }
        let images = [];
        for(let key in this.props.images){
          images.unshift(this.props.images[key]);
        }
        const imageItems = images.map((image, index) => {
          return(
            <li key={index}>
                <ImageIndexItem image={image} />
            </li>);
        });

        return(
            <div className="image-index">
              <div>
                  <h1>User Uploaded Photos For:</h1>
                  <RestaurantIndexItem loading={this.props.loading} restaurant={this.props.restaurant} />
                  <button className="medium-button"
                      onClick={() => this.props.router.push(`/newimage/${this.props.restaurant.id}`)}>
                    <span>
                      Add Photo
                    </span>
                  </button>
              </div>
              <div>
                 <ul className="user-photos">
                   { imageItems }
                 </ul>
              </div>
            </div>);
    }
}

export default ImageIndex;
