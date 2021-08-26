import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class HeaderTake extends Component {
    render() {
        return <header className="head">
                    <div className="barnav head">
                    <div className="head-start ms-2">
                        <div className="head-back me-2">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="d-none d-sm-block">
                        <Link to="/" className="text-white">
                            <img className="logo-just-take" src="./img/takeaway-pay-logo-orange-194b.svg" alt="Logo Just Eat" />
                        </Link>
                        </div>
                        <div className="d-block d-sm-none logo-justeat">
                            <svg viewBox="0 0 32 32" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true"><path d="M15.117 2.298a1.503 1.503 0 011.796 0 56.974 56.974 0 013.992 2.78s.3.199.4-.199a4.08 4.08 0 01.1-1.489.748.748 0 01.698-.496s1.497.099 2.495.198a.995.995 0 01.798.894s.599 4.17.798 5.66c.21.787.622 1.506 1.198 2.084a41.683 41.683 0 012.495 3.774s.499 1.092-.599 1.191c0 0-2.096.199-2.295.298a.557.557 0 00-.5.596s-.099 7.248-.598 10.822c0 0-.1 1.39-.898 1.39 0 0-2.096-.099-2.595-.099 0 0-.2 0-.2-.298 0 0 1.098-11.319.4-17.078a.993.993 0 00-.6-.893s-.498-.199-.997.496a17.9 17.9 0 00-3.393 10.227c-.065.767.003 1.54.2 2.284 0 0 .2.298 1.097.397l1.098.198s.2 0 .2.298c0 0-.3 3.376-.3 3.972.015.14-.02.28-.1.397a.581.581 0 01-.399.1H13.92a.49.49 0 01-.299-.1c-.1-.198-.3-4.27-.3-4.865 0-.1.1-.199.2-.298a2.977 2.977 0 001.397-2.184 7.755 7.755 0 000-1.887s.2-6.355.2-7.447c0 0 .1-.298-.4-.397a.38.38 0 00-.498.298s-.3 4.27-.3 5.858c0 0 .1 1.092-.598 1.092 0 0-.699.1-.799-.794 0 0 .1-4.07.2-6.156a.428.428 0 00-.4-.397c-.199-.1-.498.1-.498.397 0 0-.3 3.972-.3 5.957 0 0 .1.993-.698.993 0 0-.699.1-.699-.794 0 0 .2-5.66.2-6.057a.457.457 0 00-.4-.496h-.1c-.199 0-.498.1-.498.397v.1s-.32 6.751-.32 8.737a3.599 3.599 0 001.497 2.88c.114.057.19.17.2.297 0 0 .2 3.575.3 4.766 0 0 .1.298-.2.298l-3.793-.199s-.598.1-.798-.695a93.854 93.854 0 01-.698-11.418.557.557 0 00-.5-.596s-1.896-.198-2.395-.298a.824.824 0 01-.598-.993c0-.099.1-.099.1-.198A41.024 41.024 0 0115.116 2.298z" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className="head-center mx-2">
                        <div>
                            <span>{this.props.title}</span>
                        </div>
                    </div>
                    <div className="head-end">
                    <img src="https://takeawaypayprod.azureedge.net/landing-page/contact-phone-icon-blue-4ccf.svg" className="me-4" alt="contact via phone"/>
                    <img src="https://takeawaypayprod.azureedge.net/landing-page/contact-email-icon-blue-1fa9.svg" className="me-5" alt="contact via email"></img>    
                    <a href="/takeawaypay/login" class="btn border text-primary me-3" id="header-login-button"><b className="fs-conx">Se connecter</b></a>
                        <div className="flag">
                            <svg viewBox="0 0 24 24"
                                width="1em" height="1em" role="presentation" focusable="false"
                                aria-hidden="true">
                                <g fill="none" fillRule="evenodd">
                                    <circle fill="#FFF" cx="12" cy="12" r="12"></circle>
                                    <g fillRule="nonzero">
                                        <path
                                            d="M12 24.001c-6.618 0-12-5.383-12-12S5.382 0 12 0c6.616 0 12 5.384 12 12 0 6.618-5.384 12.001-12 12.001zm0-23C5.932 1 .998 5.934.998 12s4.934 11 11 11 11-4.934 11-11S18.066 1 12 1z"
                                            fill="#EFF3F5"></path>
                                        <path
                                            d="M11.986 3a8.951 8.951 0 00-3.996.935v16.11a9.002 9.002 0 007.99 0V3.935A8.953 8.953 0 0011.987 3z"
                                            fill="#FFF"></path>
                                        <path
                                            d="M15.98 3.935v16.11a8.99 8.99 0 004.995-8.055 8.988 8.988 0 00-4.994-8.055z"
                                            fill="#ED2939"></path>
                                        <path
                                            d="M2.995 11.99a8.988 8.988 0 004.995 8.055V3.935a8.99 8.99 0 00-4.995 8.055z"
                                            fill="#012395"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
        </header>
    }
}