import React from 'react';

const ResFeature = (props) => {
  const feaures = props.features.map((feat) => <li key={feat}>{feat}</li>);
  return(
    <ul>
      {features}
    </ul>
  );
}

export default ResFeature;
