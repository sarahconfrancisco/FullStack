import React from 'react';

class Error extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.route !== nextProps.route){
      this.props.clearErrors();
    }
  }

  render(){
  if(!this.props.errors){
    return (<div></div>);
  }

  const errors = Object.keys(this.props.errors).map((key) => (<li key={key}>{this.props.errors[key]}</li>));
  return(
    <div>
      <ul>
        {errors}
      </ul>
    </div>
  )
};
}

export default Error;
