import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./css/RatingStar.css";

export class RatingStar extends Component {
    hover(index) {
        console.log(index);
    }
    leave(){

    }
    render(){
        return <div>{[1,2,3,4,5].map((star, index) => {
            index +=1;
            return (
                <FontAwesomeIcon icon={faStar} key={index}
                onMouseOver={this.hover.bind(this, index)}
                className="star "/>
            );
        })}            
        </div>

    }
}