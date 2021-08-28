import React, { Component } from "react";
import { Header } from '../head-foot/Header';
import { Type } from './Type';
import { FilterNavigation } from './Filter-navigation';
import { Filtre } from './Filtre';
import { Search } from './Search';
import { Liste } from './Liste';

export class Livraison extends Component {
    render(){
        return <div>   
            <Header title="Où souhaitez-vous être livré?" />   
            <Type />
            <div className="container-md">
              <FilterNavigation />
              <br/>
              <div className="row">
                <section className="col-3 d-none d-lg-block">
                  <Filtre />
                </section>
                <section className="col-8 ms-4">
                  <Search />
                  <div className="row mt-3">
                      <div className="col-12 mb-2">
                          <b>117 restaurants disponibles en livraison</b>
                      </div>   
                        <Liste />                                 
                      <Liste />
                      <Liste />
                      <Liste />
                  </div>            
                </section>
              </div>
            </div>     
        </div>

    }
}