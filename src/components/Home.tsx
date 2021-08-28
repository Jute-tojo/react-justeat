import { faCheck, faHamburger, faMapMarkerAlt, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {Header} from "./head-foot/Header";
import './Home.css';
export class Home extends Component {
    
    render(){
        return <div>
            <Header />            
            <div className="header-container">
                    <div className="header-top">
                <div className="header">
                    <h1 className="header__title">C'est le moment de commander</h1>
                    <h2 className="header__subtitle">Trouvez les restaurants près de chez vous</h2>
                    <div className="header__location-panel">
                        
                    <form action="#" name="deliveryareaform" id="ideliveryareaform" method="POST" className="formstyle">
                        <input type="hidden" name="searchstring" id="isearchstring" defaultValue=""/>
                    <input type="hidden" name="type" defaultValue="postcode"/>    
                        <div className="deliveryareapanel clear">
                            <div className="lp">
                                <div className="lp__container inputs">
                                    <input className="lp__input active autocompletesearch nofocus outer location-panel-search-input" id="imysearchstring" name="mysearchstring" placeholder="Adresse, par ex. 1 Avenue de l'Europe" type="text" defaultValue=""/>
                                    <div id="geolocationnotice"></div>
                                    <div className="deliveryareaerror" id="ideliveryareaerror"></div>
                                    <div id="mapdummy"></div>
                                    <div className="lp__input-close">
                                        <i className="icon-ta-close-v2"></i>
                                    </div>
                                </div>
                                <a className="lp__search-button extralargebutton text-white" href="http" id="submit_deliveryarea" title="Voir restaurants">
                                    Continuer            </a>
                                <div className="lp__places-container autoCompleteDropDown">
                                    <div className="suggestions">
                                        Vous vouliez dire...                </div>
                                                        <div className="lp__warning">
                                            Entrez votre rue et votre numéro de maison                    </div>
                                                    <div className="auto-complete-drop-down-content" id="iautoCompleteDropDownContent"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className="header__payment-icons"></div>
                </div>
            </div>
                <div className="subheader">
                        <div className="subheader__slope"></div>
                        <div className="subheader__image" style={{ 
        backgroundImage: `url("./img/Burger_kinq.jpg")` 
        }}></div>
            </div>
            </div>
            <div className="content">
                <div className="content-steps">
                    <section className="steps-inner">
                        <h3 className="steps-subheadline">Comment ça marche ?</h3>
                        <h4 className="steps-mainheadline">C'est très simple !</h4>
                        <div className="row mt-5">
                            <div className="col-4 text-center">
                                <FontAwesomeIcon className="icon-marker color-orange" icon={faMapMarkerAlt} />
                                <span className="step-headline">Adresse</span>
                                <p>Entrez le nom de votre rue ou laissez-nous déterminer votre position.</p>
                            </div>
                            <div className="col-4 text-center">
                            <FontAwesomeIcon className="icon-marker color-orange" icon={faHamburger} />
                                <span className="step-headline">Sélection</span>
                                <p>Quelles sont vos envies du moment ? Parcourez les menus et les avis clients pour faire votre choix.</p>
                            </div>
                            <div className="col-4 text-center">
                            <FontAwesomeIcon className="icon-marker color-orange" icon={faMotorcycle} />
                                <span className="step-headline">Paiement et livraison</span>
                                        <p>
                                Réglez en espèces ou en ligne avec votre Carte de crédit, PayPal, Bitcoin. Bon appétit !        </p>
                                                <div id="promovideo" className=""></div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="content-apps content-apps--static-background">
                    <div className="apps-inner">
                        <div className="apps-text-inner">
                            <div className="apps-headline">
                                <h3 className="bg-dark p-2 text-white">
                                    <span>L’application JUST EAT</span>
                                </h3>
                            </div>
                            <div className="apps-headline apps-headline-sub">
                                <h3 className="bg-dark p-2 text-white">
                                    <span>Commandez où que vous soyez !</span>
                                </h3>
                            </div>
                        </div>
                        <div className="apps-logos">
                                                <a href="https://app.adjust.com/osh40i8?campaign=homepage-button&amp;utm_medium=site">
                                    <img className="lazy lazy-loaded" src="./img/android.png" alt="L’application JUST EATandroid"/>
                                </a>
                                                <a href="https://app.adjust.com/69pa95q?campaign=homepage-button&amp;utm_medium=site">
                                    <img className="lazy lazy-loaded" src="./img/ios.png" alt="L’application JUST EATios"/>
                                </a>
                                        </div>
                                    <div className="apps-static-image">
                            <img className="lazy lazy-loaded" src="./img/apps_207.png" alt="Phone image"/>
                        </div>
                                </div>
                </div>
                <div className="content-steps">
                    <section className="steps-inner">
                        <h3 className="steps-subheadline">JUST EAT</h3>
                        <h4 className="steps-mainheadline">Le meilleur endroit pour commander !</h4>
                        <div className="row mt-5">
                            <div className="col-12 col-md-4">
                                <div className="card text-left shadow">
                                  <div className="card-body">
                                    <h6 className="card-title text-center"><b>Vos privilèges</b></h6>
                                    <p className="card-text mt-5">
                                        <ul>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Le programme de Points : accumulez des points et échangez-les contre des offres exceptionnelles</li>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Cumulez des tampons virtuels et profitez des dernières réductions, offres et nouveautés via notre newsletter ainsi que sur les réseaux sociaux</li>
                                        </ul>
                                    </p>
                                  </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card text-left shadow">
                                  <div className="card-body">
                                    <h6 className="card-title text-center"><b>Vos garanties</b></h6>
                                    <p className="card-text mt-5">
                                        <ul>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Service excellent et gratuit</li>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Avis clients authentiques</li>
                                        </ul>
                                    </p>
                                  </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card text-left shadow">
                                  <div className="card-body">
                                    <h6 className="card-title text-center"><b>Vos avantages</b></h6>
                                    <p className="card-text mt-5">
                                        <ul>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Avec plus de 16000 restaurants partenaires, vous bénéficiez d'un choix incroyable</li>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Paiements en ligne ou en liquide</li>
                                            <li className="mb-3"><FontAwesomeIcon icon={faCheck} className="ps-2 fs-check color-orange" /> Commandez quand vous le souhaitez et où que vous soyez, depuis n'importe quel appareil</li>
                                        </ul>
                                    </p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <footer>
    <div className="mainfooter">
        <div className="keywordpanel">

                        <div className="container">
                        <div className="text-center">
                        <img className="mt-4" src="./img/justeat.svg" alt="Logo" width="200px" />
                        </div><br />
                <div className="row text-white">
                    <div className="col-4 col-md-3 list">
                        <p><b>JUST EAT</b></p>
                        <p>Service Client</p>
                        <p> Recommander un restaurant</p>
                        <p>Inscrire un restaurant</p>
                        <p>Offres d'emploi</p>
                        <p>Conditions d'utilisation</p>
                        <p>Carte de fidélité</p>
                        <p>Déclaration de confidentialité</p>
                        <p>Mentions légales</p>
                        <p>Politique des cookies</p>
                    </div>
                    <div className="col-4 col-md-3 list">
                        <p><b>Nourriture</b></p>
                        <p>Nourriture</p>
                        <p>Boissons et glaces</p>
                        <p>Pizza</p>
                        <p>Méditerranéen</p>
                        <p>Viande et grillades</p>
                        <p>Asiatique</p>
                        <p>Internationale</p>
                        <p>Autre</p>
                        <p>Petit-déjeuner</p>
                        <p>Plus de spécialités...</p>
                    </div>
                    <div className="col-4 col-md-3 list">
                        <p><b>Régions</b></p>
                        <p>Alsace</p>
                        <p>Aquitaine</p>
                        <p>Auvergne</p>
                        <p>Basse-Normandie</p>
                        <p>Bourgogne</p>
                        <p>Bretagne</p>
                        <p>Centre</p>
                        <p>Champagne-Ardenne</p>
                        <p>Corse</p>
                        <p>Franche-Comte</p>
                    </div>
                    <div className="col-4 col-md-3 list">
                        <p><b>Nouveaux restaurants</b></p>
                        <p>Pépita, Paris</p>
                        <p>M & Mme Poutine, Gennevilliers</p>
                        <p>T Berry, Paris</p>
                        <p>Pizza House - Paris, Paris</p>
                        <p>SushiSha, Villemomble</p>
                        <p>Gyros, Toulouse</p>
                        <p>Yaki & Soba, Marseille</p>
                        <p>My chicken, Martigues</p>
                        <p>Bento Sushi, Lyon</p>
                        <p>PIZZA TIME, Rueil Malmaison</p>
                    </div>
                </div>
                        <hr className="text-white" />
                <div className="links p-5 text-center">
                    <a href="/recommander" title="Recommander un restaurant">Recommander un restaurant</a>
                    <a href="/inscription" title="Inscrire un restaurant">Inscrire un restaurant</a>
                    <a href="https://www.takeaway.com/jobs/fr" title="Offres d'emploi">Offres d'emploi</a>
                    <a href="/conditions-d-utilisation">Conditions d'utilisation</a>
                    <a href="/privacy-statement" title="Déclaration de confidentialité JUST EAT">Déclaration de confidentialité</a><a href="/colofon" title="Mentions légales JUST EAT"> <br /><br />  Mentions légales</a><a href="/cookiestatement" title="Politique des cookies JUST EAT">Politique des cookies</a><a href="/bugbounty" title="Bug Bounty JUST EAT">Bug Bounty</a>     <br />      <br />          <div className="copyright">
                        © 2021 JUST EAT                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
        </div>
    }
}