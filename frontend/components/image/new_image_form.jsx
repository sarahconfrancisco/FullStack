import React from 'react';
import { withRouter, Link } from 'react-router';


class ImageForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            restaurantId: this.props.params.restaurantId,
            userId: this.props.currentUser.id,
            photo: null,
            photo_url: null
        };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.createPhoto = this.createPhoto.bind(this);
    }

    componentDidMount(){
      if(!this.props.currentUser.id){
        this.props.router.push("/login");
      }
    }

    createPhoto(){
        let formData = new FormData();
        formData.append("image[restaurant_id]", this.state.restaurantId);
        formData.append("image[user_id]", this.state.userId);
        formData.append("image[photo]", this.state.photo);
        return formData;
    }

    updatePhoto(e){
        const photo = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState( {photo: photo, photo_url: fileReader.result });
        }

      if (photo) {
          fileReader.readAsDataURL(photo);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addImage(this.createPhoto());
        this.props.router.push(`restaurant/${this.props.params.restaurantId}`)
    }

	render(){
        if(!this.state.restaurantId){
            return <div></div>
        }
        return(
          <div>
            <form className="new-image" onSubmit={ this.handleSubmit }>
                <div className="new-image">
                    <label className="medium-button">
                        Browse Files
                        <input className="hidden" onChange={ this.updatePhoto } type="file" />
                    </label>
                    <div className="image-submit">
                      <button className="medium-button" type="submit">
                          <span>Save</span>
                      </button>
                      <Link to={`/restaurant/${this.state.restaurantId}`}>Cancel</Link>
                    </div>
                </div>
            </form>
          </div>
        );
	}

}

export default ImageForm;
