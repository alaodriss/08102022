import React, { Component } from "react";
import LogementHome from "./LogementHome";
import "../Styles/Gallery.css";


// ici on a utilise class 
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // une arry vide pour stocke les donnes de data
      myHome: [],
    };
  }
  // récupéreration data avec la methode fetch et aussi de avec le declancheur de react componentDidMount()
  loadData = () => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.logements);
        this.setState({
          myHome: response.logements,
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="cards_bg wrapper">
        {this.state.myHome.map((card, index) => {
             //ici on a declare une component LogementHome et insère le props infos pour envoyer data a le component LogementHome.
          return <LogementHome infos={card} key={"logement" + index} />;
        })}
      </div>
    );
  }
}
export default Gallery;

      