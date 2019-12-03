import React, { Component } from "react";

import SantasList from SantasList;

class SantasList extends Component {
    state = {
      santaItem: []
    };
  
    componentDidMount() {
      this.santaItem();
    }
  
    loadBooks = () => {
      API.getSantaItem()
        .then(res => this.setState({ santaItem: res.data }))
        .catch(err => console.log(err));
    };
  









export default SantasList;