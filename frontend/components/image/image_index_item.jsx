import React from 'react';

const ImageIndexItem = ({ image }) => (
     <div className="photo-container">
         <img src={image.photo}/>
     </div>
);

export default ImageIndexItem;
