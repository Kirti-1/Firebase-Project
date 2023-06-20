import "./styles.css";
import React from "react";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class App extends React.Component {

constructor(){
  super();
  this.state = {
    active:''
  }
}


SignIn = () => {
    this.setState({
      active:'SignIn'
    })
    console.log('signin')
    
}


SignUp = () => {
    this.setState({
      active:'SignUp'
    })
    console.log('signup')

}
  render(){
    const {active} = this.state
    return(
      <div>
          {/* { active == '' && */}
           <div><button onClick={this.SignIn}>Sign In</button>
          <button onClick={this.SignUp}>Sign Up</button></div>
          {/* } */}
          
          {active == 'SignIn' && <SignIn activeState={active}/>}

          {active == 'SignUp' && <SignUp activeState={active}/>}
      </div>
    )
  }  
}

export default App;
