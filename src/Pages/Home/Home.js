import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
      <h1 className= "header-main" >The Ushe</h1>
      <h2 className= "header-home"> What's your Usual</h2>
      <h3 className= "header-second" > Share your favorite food and drink orders with the world. </h3>
      </div>
    );
  } 
}
export default Home;