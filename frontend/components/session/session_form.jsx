import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    if(this.props.formType === "login"){
      this.state = {email: "", password: ""};
    } else {
      this.state = {email: "", password: "", birthday: "", zip: "", fname: "", lname: ""};
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return ((e) => this.setState({[field]: e.target.value}));
  }
}

export default SessionForm;
