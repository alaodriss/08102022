import React, { Component } from "react";

import '../Styles/Gallery.css';
class Gallery extends Component {
  constructor(props) {
  super(props)
  this.state = {
    myHome: [],
  };
}

  loadData = () => {
    fetch("./data/data.json").then((response) => response.json())
    .then(response => { 
      console.log(response.logements);
      this.setState({
        myHome: response.logements,
      });
      });
  }


  
  componentDidMount() {
    this.loadData();
  }

  render() {
    return  ( 
    <div className="cards_bg wrapper">
      
        {this.state.myHome.map(card => (
        <div className="card" key={card.id}>
          <img className="card_img" src={card.cover} alt=""/>
          <p className="title"> {card.title}  </p>
        </div>
      ))}
   </div>)

  }
}
export default Gallery;
