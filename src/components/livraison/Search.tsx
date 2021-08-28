import React, { Component } from "react";
import "./css/Search.css";
export class Search extends Component {
    render(){
        return <div className="row">          
            <div className="col-7">                
                <input type="search" className="form-control" defaultValue="Restaurants et plats" />
            </div>
            <div className="col-5">
                    <select id="select_28" className="form-control col-2">
                        <option value="bestMatch">Pertinence</option>
                        <option value="reviewRating">Avis</option>
                        <option value="distance">Par distance</option>
                        <option value="deliveryTime">Délai de livraison estimé</option>
                        <option value="popularity">Par popularité</option>
                        <option value="minimumOrderValue">Min. de commande</option>
                        <option value="deliveryFee">Par frais de livraison</option>
                        <option value="averagePrice">Par prix</option>
                        <option value="restaurantName">Alphabétique</option>
                    </select>
                </div>
        </div>

    }
}