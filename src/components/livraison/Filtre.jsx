import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {RatingStar} from "./RatingStar";
import "./css/Filtre.css";

export class Filtre extends Component {
    constructor(props){
        super(props)
        this.state={
            checkVisibleOuvert:false,
            checkVisibleGratuit:false
        }
    }
    toggleBox1 = () => {   
            this.setState(val => ({
                checkVisibleOuvert: !val.checkVisibleOuvert
            }))                  
    }
    toggleBox2 = () => {   
        this.setState(val => ({
            checkVisibleGratuit: !val.checkVisibleGratuit
        }))                  
}
    render(){
        return <div>
                <div className="row mb-5">
                    <b>142 restaurants</b>
                </div>
                <div className="item row mb-4">
                    <div className="col-10">
                        <h3>Actuellement ouvert</h3>
                    </div>
                    <div className="col-2">
                        <label className={"checkbox "+(this.state.checkVisibleOuvert ? "bg-blue" : "bg-black")}>
                            <input id="ouvert" onClick={this.toggleBox1} className="collapsing" type="checkbox"/>
                            <div className="check rounded-circle">
                                <FontAwesomeIcon  icon={faCheck} className={"fs-icon "+(this.state.checkVisibleOuvert ? "" : "collapsing")} />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="item row mb-4">
                    <div className="col-10">
                        <h3>Livraison gratuite</h3>
                    </div>
                    <div className="col-2">
                        <label className={"checkbox "+(this.state.checkVisibleGratuit ? "bg-blue" : "bg-black")}>
                            <input id="gratuit" onClick={this.toggleBox2} className="collapsing" type="checkbox"/>
                            <div className="check rounded-circle">
                                <FontAwesomeIcon  icon={faCheck} className={"fs-icon "+(this.state.checkVisibleGratuit ? "" : "collapsing")} />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="item row mb-4">
                    <div className="col-12 mb-2">
                        <h3>Minimum par commande <FontAwesomeIcon icon={faInfoCircle} className="color-blue"/></h3>
                    </div>
                    <div className="col-12 mb-3">
                        <input type="radio" name="minimum" className="fs-radio me-2" defaultChecked/>Voir tout (117)
                    </div>
                    <div className="col-12 mb-3">
                        <input type="radio" name="minimum" className="fs-radio me-2"/>10,00&nbsp;€ ou moins (2)
                    </div>
                    <div className="col-12 mb-3">
                        <input type="radio" name="minimum" className="fs-radio me-2"/>15,00&nbsp;€ ou moins (22)
                    </div>
                </div>
                <div className="item row mb-2">
                    <div className="col-12 mb-2">
                        <h3>Évaluations du restaurant <FontAwesomeIcon icon={faInfoCircle} className="color-blue"/></h3>
                    </div>
                    <div className="col-12">
                        <RatingStar color="color-orange"/>
                    </div>
                </div>
                <div className="item row mb-2 mt-5">
                    <div className="col-12">
                        <h3>Réductions et économies <FontAwesomeIcon icon={faInfoCircle} className="color-blue"/></h3>
                    </div>
                    <div className="col-12 mb-3">
                        <input type="checkbox" className="fs-radio me-2"/>Réductions (4)
                    </div>
                    <div className="col-12 mb-3">
                        <input type="checkbox" className="fs-radio me-2"/>Carte de fidélité (42)
                    </div>
                </div>
        </div>
    }
}