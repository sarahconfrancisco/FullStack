import React from 'react';

const Footer = (props) => {
  return(
    <div className="footer">
      <ul>

        <li>
          <ul>
            <li className="about-me">About Me</li>
          </ul>
        </li>

      <li>      
        <ul>
          <li className="my-links">My Links</li>
        </ul>
      </li>

      </ul>

      <div className="picture-container">
        <img src={window.images.cityscape} />
      </div>
    </div>
  )
}

export default Footer;
