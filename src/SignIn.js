import './styles.css'
import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore,collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrpNkOJzIO0ES9Ffh7mxPxheurmK56g9g",
    authDomain: "cart-5a688.firebaseapp.com",
    projectId: "cart-5a688",
    storageBucket: "cart-5a688.appspot.com",
    messagingSenderId: "397797702878",
    appId: "1:397797702878:web:f819a91581c1b38e93964f"
  };
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

class SignIn extends React.Component{
    constructor(){
        super();
        this.state= {
            email:'',
            password:'',
            attempt:''
        }
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    checkForCredentials = async () => {
        // check for email and password entered by user desi style without performing any salt operation or converting it to ascii for security
        // compare it as it has been saved.
        console.log('abc');
const {email, password} = this.state;
const q = query(collection(db, "userDirectory"), where("email", "==", email) );
console.log(q);
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  if(doc.data().password == password){
    this.setState({
        attempt:'success'
    })

  }else{
    this.setState({
        attempt:'fail'
    })
  }

  if(querySnapshot==null){
    this.setState({
        attempt:'fail'
    })
  }
  console.log(doc.id, " => ", doc.data());
});
        
        // firebase
        //     .firestore()
        //     .collection('userDirectory')
        //     .get((data)=>{
        //         console.log(data);
        //     })


    }
    render() {
        const {email, password, attempt} = this.state;
        console.log(email,password);
        return (<div className="App">

            {attempt == 'fail' && <p style={{color:'red'}}>Wrong Id or Password Please Try Again!!</p>}
            <form>
          
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.updateEmail}
            value={email}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.updatePassword}
            value={password}
          />
          <br />
          <br />
          <p
            onClick={this.checkForCredentials}
            style={{
              border: "1px solid black",
              width: "100px",
              margin: "auto",
              cursor: "pointer"
            }}
          >
            Sign In
          </p>
        </form>
        {attempt=='success' && <p style={{color:'green'}}>Successful Login!!!</p>}
        </div>)
    }
}

export default SignIn;