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
    }

  update(field){
    return ((e) => this.setState({[field]: e.target.value}));
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user})
  }

  render(){
    let name;
    let zip_birthday;
    if (this.props.formType === "signup"){
      name = (
        <div>
          <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.update('fname').bind(this)} />
          <input type="text" value={this.state.lname} placeholder="Last Name" onChange={this.update('lname').bind(this)} />
        </div>
      )
      zip_birthday = (
        <div>
          <input type="text" value={this.state.zip} placeholder="ZIP" onChange={this.update('zip').bind(this)}/>
          <br />
          <label>Birthday(Optional)</label>
          <br />
          <input type="text" value={this.state.birthday} placeholder="mm/dd/yyyy" onChange={this.update('birthday').bind(this)} />
        </div>
      )
    }
    return(
      <form>
        {name}
        <br />
        <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email').bind(this)}/>
        <br />
        <input type="password" placeholder="Password (minimum 6 characters)" onChange={this.update('password').bind(this)} value={this.state.password} />
        <br />
        {zip_birthday}
        <br />
        <input type="submit"value={this.props.formType} onClick={this.handleSubmit.bind(this)}/>
      </form>
    );
  }
}

export default SessionForm;
