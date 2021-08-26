import React, { Component } from "react";
import { Header } from "../head-foot/Header";
import './Point.css';

export class Point extends Component {
    render() {
        return <div>
            <Header title="Points"/>
                <img src="./img/header-desktop.png" width="100%" alt="background" />
                <nav class="container-fluid second">
                    <div class="container">
                        <div class="row fast_selection">
                            <div class="col-md-3"></div>
                            <div class="col-md-3"></div>
                            <div class="col-md-3">
                                <article class="arti">Voir tout (17)</article>
                            </div>
                            <div class="col-md-3">
                                <article class="arti">Popularité</article>
                            </div>
                        </div>
                    </div>
                </nav>

                <section class="container section_main">
                    <div class="row">
                        <div class="col-md-3 col-xs-9 left_section">
                            <h1 class="h1_bienvenue">Bienvenue !</h1>
                            <p class="p_bienvenue">Utilisez vos points pour profiter des offres de grandes marques et de réductions auprès de Just Eat.</p>
                            <input type="submit" value="Je me connecte" class="je_me_connecte"/>
                        </div>
                        <div class="col-md-8 offset-1 col-xs-9 right_section">
                            <div class="row">
                                <div class="col-md-12 ligne1">
                                    <p class="p_profiter">Profitez de l'été avec ces offres exclusives ⛱️</p>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/Just Eat_500x500.png" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Just Eat</p>
                                        <p>Offre de bienvenue Just Eat 5€ 🎁</p>
                                        <span class="color-orange float-end me-2"><b>75</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/PICTO BLEU_500x500.png " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Pumpkin</p>
                                        <p>10€ offerts sur votre compte Pumpkin</p>
                                        <span class="color-orange float-end me-2"><b>25</b> points</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12 ligne3 ">
                                    <div class="container ">
                                        <div class="row ">
                                            <div class="col-md-6 left_art ">
                                                <p class="p p_reduction ">10% de réduction sur votre voyage avec FlixBus !</p>
                                            </div>
                                            <div class="col-md-6 bg-white mt-3 pub text-size">
                                                <p class="mt-4">10% de réduction sur votre voyage avec FlixBus</p>
                                                <span class="color-orange float-end me-2"><b>20</b> points</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>asgoodasnew</p>
                                        <p>55€ de réduction de top marques</p>
                                        <span class="color-orange float-end me-2"><b>50</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/NILK_500x500.jpg " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Nilk</p>
                                        <p>Coffret découverte 3 variétés</p>
                                        <span class="color-orange float-end me-2"><b>40</b> points</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/World of Warships_500x500.jpg" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>World</p>
                                        <p>Pack camouflages</p>
                                        <span class="color-orange float-end me-2"><b>30</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/coquedetelephone-resized.png " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Coquedetelephone.fr</p>
                                        <p>15% de réduction</p>
                                        <span class="color-orange float-end me-2"><b>15</b> points</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12 ligne3 ">
                                    <div class="container ">
                                        <div class="row ">
                                            <div class="col-md-6 left_art ">
                                                <p class="p p_reduction ">mymuesli: Coffret 6 minis d été offert*</p>
                                            </div>
                                            <div class="col-md-6 bg-white mt-3 pub text-size">
                                                <p class="mt-4">Coffret 6 minis d été offert*</p>
                                                <span class="color-orange float-end me-2"><b>20</b> points</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/CBMFR_500x500.jpg" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Cafebonmarche.fr</p>
                                        <p>5 de réduction supplémentaire</p>
                                        <span class="color-orange float-end me-2"><b>25</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/Untitled design(1).png " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Tree of Tea</p>
                                        <p>Coofret de 3 délicieux minis </p>
                                        <span class="color-orange float-end me-2"><b>40</b> points</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/desenio loyalty shop image.jpg" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>DESENIO</p>
                                        <p>Décorez vos murs à nouveau! Economisez 5 sur les affiches.*</p>
                                        <span class="color-orange float-end me-2"><b>25</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/Untitled design(2).png " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>mymuesli</p>
                                        <p>Coffret échantillon* 6 mymuesli2go</p>
                                        <span class="color-orange float-end me-2"><b>40</b> points</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12 ligne3 ">
                                    <div class="container ">
                                        <div class="row ">
                                            <div class="col-md-6 left_art ">
                                                <p class="p p_reduction ">Offre spéciale: 3 de remise sur Just Eat</p>
                                            </div>
                                            <div class="col-md-6 bg-white mt-3 pub text-size">
                                                <p class="mt-4">Offre spéciale: 3 de remise sur Just Eat</p>
                                                <span class="color-orange float-end me-2"><b>75</b> points</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/CBMFR_500x500.jpg" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Cafebonmarche.fr</p>
                                        <p>5 de réduction supplémentaire</p>
                                        <span class="color-orange float-end me-2"><b>25</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/Untitled design(1).png " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>Tree of Tea</p>
                                        <p>Coofret de 3 délicieux minis </p>
                                        <span class="color-orange float-end me-2"><b>40</b> points</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/desenio loyalty shop image.jpg" alt="" class="ligne2" width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>DESENIO</p>
                                        <p>Décorez vos murs à nouveau! Economisez 5 sur les affiches.*</p>
                                        <span class="color-orange float-end me-2"><b>25</b> points</span>
                                    </div>
                                </div>
                                <div class="col-6 border p-0">
                                    <div class="float-start me-3">
                                        <img src="./img/Untitled design(2).png " alt=" " class=" " width="110px"/>
                                    </div>
                                    <div class="text-size mt-4">
                                        <p>mymuesli</p>
                                        <p>Coffret échantillon* 6 mymuesli2go</p>
                                        <span class="color-orange float-end me-2"><b>40</b> points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    </div>
    }
}