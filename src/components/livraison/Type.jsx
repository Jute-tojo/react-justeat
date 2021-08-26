import React, { Component } from "react";
import "./css/Type.css";

export class Type extends Component {
    render(){
        return <div>
            <div className="type text-center border-bottom">
                    <button className="btn active">Livraison</button>
                    <button className="btn">À emporter</button>
            </div>            
        </div>

    }
}