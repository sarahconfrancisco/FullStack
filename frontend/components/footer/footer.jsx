import React from 'react';

const Footer = (props) => {
  return(
    <div className="footer">
      <ul>

        <li>
          <ul>
            <li><h5>Contact Me</h5></li>
            <li><a href="mailto:sarahconfrancisco@gmail.com">sarahconfrancisco@gmail.com</a></li>
            <li>201-316-6607</li>
          </ul>
        </li>

      <li>
        <ul>
          <li className="my-links"><h5>My Links</h5></li>
          <li><a href="https://sarahconfrancisco.github.io/">Personal Website</a></li>
          <li><a href="https://github.com/sarahconfrancisco">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/sarah-confrancisco/">LinkedIn</a></li>
          <li><a href="https://angel.co/sarah-confrancisco">Angel List</a></li>
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
