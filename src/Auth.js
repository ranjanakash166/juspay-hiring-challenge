import React from "react";
//import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
//import Validate from "./Googlepin";
//import validate from './Googlepin';

class Auth extends React.Component  {

    constructor(props){  
        super(props);  
        this.state = {  
             name:"",email:"",url:""
             ,flag:false
          }  
        
      }  
   

      validate = ()=>{
         // alert("hello")
          this.setState({flag:true})
      }
     responseGoogle = (response) =>{
        alert("response function is working")
        alert(response)
        this.setState({flag:false})
        //this.setState({name:response.profileObj.name,email:response.profileObj.email,url:response.profileObj.imageUrl})
       // alert(response.profileObj.name+" "+response.profileObj.mail+" "+response.profileObj.imageUrl)
    }

    render () {

        
        return (
            <div className="">
                <h1>Login with Google</h1>
        <h2>Welcome: {this.state.name}</h2>
        <h2>Email: {this.state.email}</h2>
        <img src={this.state.url} alt={this.state.name}></img>
        <button onClick={()=>{this.validate()}}/>
        
               {this.state.flag && <GoogleLogin
                clientId="82428472026-2dr4ti0shnj8bjtsejhlht6cd3eunlqd.apps.googleusercontent.com"  
                           
                buttonText="Login"
                onSuccess={()=>{this.responseGoogle()}}
                onFailure={()=>{this.responseGoogle()}}
                cookiePolicy={'single_host_origin'}
                />
               }
            </div>
        );
    }
   
}

export default Auth