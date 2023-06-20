import "./styles.css";
import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      list: []
    };
  }

  saveToDb = () => {
    const { name, email, password } = this.state;
    console.log(name, email, password);

    firebase.firestore().collection("userDirectory").add({
      name,
      email,
      password
    });

    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  };
  componentDidMount() {
    firebase
      .firestore()
      .collection("userDirectory")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((doc) => {
          let data = doc.data().name;
          return data;
        });
        this.setState({
          list
        });
      });
  }

  render() {
    const { name, email, password, list } = this.state;
    // console.log(name, email, password);

    return (
      <div className="App">
        <form>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.updateName}
            value={name}
          />
          <br />
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
            onClick={this.saveToDb}
            style={{
              border: "1px solid black",
              width: "100px",
              margin: "auto",
              cursor: "pointer"
            }}
          >
            Submit
          </p>
        </form>
        <div>
          <p>List Of User</p>
          {list.map((l) => {
            return <p key={l}>{l}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default SignUp;
