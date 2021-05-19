import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as LoginAction from '../../redux/Login/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import './Login.css';
import Nav from '../Nav';

class Login extends Component{
   constructor(){
       super();
       this.state={
           email:'',
           password:'',
           errors:{}
           

       }
       
       
   }
   validate = () => {
    let errors = {}
    let formIsValid = true
    if(!this.state.email)
        {
            formIsValid = false
            errors['email'] = '*Please Enter Email Id '
        }
        if(!this.state.password)
        {
            formIsValid = false
            errors['password'] = '*Please Enter Password '
        }
        
        this.setState({ errors })
        return formIsValid
    }
   validation=(usr)=>{
    if(this.validate()){
    let payload={
        email:this.state.email,
        password:this.state.password
    }
    this.props.LoginAction.loginValidate(payload);
    usr.preventDefault();
}

   
}
   onChange=(user)=>this.setState({[user.target.name]:user.target.value});

   
   render(){
    let login=this.props.login;
    

    if(login!==undefined)
    {
        if(login.role==="admin")
        {
            return <Redirect to="/admin"></Redirect>
        }
        else if(login.role==="customer"){
          
            return <Redirect to="/customer"></Redirect>
        }
        else{
            alert("invalid user....");
            
        }
        
    }
    return(
        <div>
        <Nav/>
        <div className="new">
           <div class="box">
  <h2>Login</h2>
  <form>
    <div class="inputBox">
       <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.onChange} required/>
      <label>Username</label>

    </div>
    <div class="inputBox">
      <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required></input>
      <label>Password</label>

      </div>
      
      <button className="btn btn-success" onClick={this.validation}>Login</button>
      
      <p class="change_link">
          <br></br>
					Not a member yet ?
					<a href="/register" class="to_register"> Sign Up</a>
				</p>
    </form>
    </div>
   
 </div>
 </div>

    );
}
}
function mapStateToProps(state){
return{
    login:state.LoginReducer.login
};
}
function mapDispatchToProps(dispatch){
return{
    LoginAction: bindActionCreators(LoginAction,dispatch)
};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);