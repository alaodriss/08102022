import React, { Component } from "react";

class Gallery extends Component {
  state = {
    nameArry: [],
  };

  loadData() {
    fetch("./data/data.json").then((response) => response.json())
    .then(data => { 
      console.log(data);
      this.setState({
        nameArry: data,
      });
      });
  }


  
  componentDidMount() {
    this.loadData();
  }

  render() {
    return <div>
      
    </div>;
  }
}
export default Gallery;
