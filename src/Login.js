import React from 'react';
import fire from './config/fire';

class Login extends React.Component{

    login(){
        const email=document.querySelector("#email").value;
        const password=document.querySelector("#password").value;
        fire.auth().signInWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log("Successsfully logged");
        })
        .catch((err)=>{
            console.log("Error:"+err.toString());
        })
    }
    signup(){
        const email=document.querySelector("#email").value;
        const password=document.querySelector("#password").value;
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then((u)=>{
            console.log("Successsfully signed");
        })
        .catch((err)=>{
            console.log("Error:"+err.toString());
        })
    }

render(){
    return(
     <div style={{textAlign: 'center'}}>
     <div>
       <div>Email</div>
       <input id="email" placeholder="enter email" type="text"></input>
     </div>
     <div>
       <div>Password</div>
       <input id="password" placeholder="enter password" type="text"></input>
     </div>
     <button style={{margin: '10px'}} onClick={this.login}>LogIn</button>
     <button style={{margin: '10px'}} onClick={this.signup}>SignUp</button>


     </div>



    )
}
}
export default Login;