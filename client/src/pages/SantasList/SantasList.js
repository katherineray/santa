import React, { Component } from "react";
import SantaItem from "../../components/SantaItem/SantaItem"
import axios from "axios";


class SantasList extends Component {

    state = {
        santasList: [],

    };

    componentDidMount = () =>  {

        console.log(this);
        console.log("reached!");
        axios.post("/items/search", { title: "bike" })
            .then((response) => {
                this.setState({ santasList: response.data })
                console.log(response.data[0].galleryURL[0])

            })

     }

    render() {
        
      return(  <div>
            {
                this.state.santasList.length ? (
                    <div>
                        {this.state.santasList.slice(0, 10).map((santaItem, i) => (
                            <SantaItem key={i} santaItem={santaItem} imgUrl={santaItem.galleryURL[0]} productName={santaItem.title[0]} >         
                            </SantaItem>
                        ))}
                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )
            }

        </div>);


    }




}

export default SantasList;

