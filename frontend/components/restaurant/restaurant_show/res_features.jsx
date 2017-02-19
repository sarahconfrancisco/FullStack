import React from 'react';

const ResFeature = (props) => {
  if(!props.features){
    return(<div></div>);
  }

  let featureArray = [];
  for(var key in props.features){
    featureArray.push(props.features[key]);
  }
  const features = featureArray.map((feat) => <li key={feat}>{feat}</li>);
  return(
    <div id="features">
      <h3>Restaurant Features</h3>
      <ul>
        {features}
      </ul>
    </div>
  );
}

export default ResFeature;
