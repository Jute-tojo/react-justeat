import React, { Component } from "react";
import "./css/Filter-navigation.css";

export class FilterNavigation extends Component {
    render(){
        return <div className="navigation-filter">
                    <div className="liste">
                        <button className="btn bg-justeat rounded-pill me-2">Tous</button>
                        <button className="btn rounded-pill">Pizza Américaine</button>
                        <button className="btn rounded-pill">Pizza Italienne</button>
                        <button className="btn rounded-pill">Sushi</button>
                        <button className="btn rounded-pill">Burgers</button>
                        <button className="btn rounded-pill">Chinois</button>
                        <button className="btn rounded-pill">Japonais</button>
                        <button className="btn rounded-pill">Kebab</button>
                        <button className="btn rounded-pill">Indien</button>
                        <button className="btn rounded-pill">Marocain</button>
                        <button className="btn rounded-pill">Italien</button>
                        <button className="btn rounded-pill">Poulet</button>
                        <button className="btn rounded-pill">Salades</button>
                        
                    </div>
                    <div className="other">
                        <a href="a"><b> Voir plus</b></a>
                    </div>
            </div>

    }
}