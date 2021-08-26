import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faMotorcycle, faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import "./css/Liste.css";

export class Liste extends Component {
    
    render(){
        
        return <div className="col-12 border ms-2 mb-3 p-0">
                    <a href="/test">
                    <div className="img-back">
                        <img src="./img/background-list1.jpg" width="100%" alt="Italia" />
                    </div>
                    <div className="text-containt mb-3">
                        <h5>THE DELICIOUS</h5>                        
                        <p>Pizza Italienne, Burgers, Desserts</p>
                        <FontAwesomeIcon icon={faStar} className="color-orange"/><b className="color-orange"> 3.6</b> (13) 
                        <span  className="color-gris ms-3"><FontAwesomeIcon icon={faChartPie}/> 15 min</span>
                        <span  className="color-gris ms-3"><FontAwesomeIcon icon={faMotorcycle}/> Gratuit</span>
                        <span  className="color-gris ms-3"><FontAwesomeIcon icon={faShoppingBag}/> Min. 20,00&nbsp;€</span>
                    </div>
                    </a>
                </div>

    }
}