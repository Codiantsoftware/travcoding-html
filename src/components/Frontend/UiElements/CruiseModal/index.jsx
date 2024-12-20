import React from "react";
import { Image } from "../../../CommonElement";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CruiseModal() {
    return (
        <>
            <div className="sideModal_head mb-30">
                <h2 className="sideModal_head_title ">Cruise Itinerary</h2>
            </div>
            <div className="sideModal_body">
                <div className="sideModal_body_items">
                    <div className="sideModal_body_img">
                        <Image source="listing-img-1.webp" className="img-fluid w-100" alt="img" />
                    </div>
                    <div className="sideModal_body_head d-flex align-items-center">
                        <div className="sideModal_body_head_lft">
                            <span className="sideModal_body_head_day">Day</span>
                            <div className="sideModal_body_head_num font-md">1</div>
                        </div>
                        <div className="sideModal_body_head_rht">
                            <h3 className="sideModal_body_head_title font-md">Port Canaveral (Orlando) Florida</h3>
                            <p>Thu Dec 19, 2024 | Depart 05:00 PM</p>
                        </div>
                    </div>
                    <div className="sideModal_body_list">
                        <Row>
                            <Col md={6}>
                                <div className="sideModal_body_box d-flex">
                                    <div className="sideModal_body_box_lft">
                                        <em className="icon-bulb" />
                                    </div>
                                    <div className="sideModal_body_box_rht">
                                        <h4 className="sideModal_body_box_title font-md">About this Port</h4>
                                        <p>With miles of golden beaches and a glamorous downtown district brimming with trendy shops and gourmet eateries, Fort Lauderdale blends South Florida chic and oceanfront family-fun. </p>
                                        <Link to="#">Learn More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="sideModal_body_box d-flex">
                                    <div className="sideModal_body_box_lft">
                                        <em className="icon-telescope" />
                                    </div>
                                    <div className="sideModal_body_box_rht">
                                        <h4 className="sideModal_body_box_title font-md">Some Things to See & Do</h4>
                                        <ul className="list-unstyled">
                                            <li>Explore the shops, restaurants and attractions of Las Olas Boulevard</li>
                                            <li>Cruise the city's famous canals on a relaxing boat ride</li>
                                            <li>Stroll the scenic riverwalk in downtown Fort Lauderdale</li>
                                        </ul>
                                        <Link to="#">Learn More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="sideModal_body_items">
                    <div className="sideModal_body_img">
                        <Image source="listing-img-1.webp" className="img-fluid w-100" alt="img" />
                    </div>
                    <div className="sideModal_body_head d-flex align-items-center">
                        <div className="sideModal_body_head_lft">
                            <span className="sideModal_body_head_day">Day</span>
                            <div className="sideModal_body_head_num font-md">2</div>
                        </div>
                        <div className="sideModal_body_head_rht">
                            <h3 className="sideModal_body_head_title font-md">Fort Lauderdale, Florida</h3>
                            <p>Aboard: 3:00 PM</p>
                        </div>
                    </div>
                    <div className="sideModal_body_list">
                        <Row>
                            <Col md={6}>
                                <div className="sideModal_body_box d-flex">
                                    <div className="sideModal_body_box_lft">
                                        <em className="icon-bulb" />
                                    </div>
                                    <div className="sideModal_body_box_rht">
                                        <h4 className="sideModal_body_box_title font-md">About this Port</h4>
                                        <p>With miles of golden beaches and a glamorous downtown district brimming with trendy shops and gourmet eateries, Fort Lauderdale blends South Florida chic and oceanfront family-fun. </p>
                                        <Link to="#">Learn More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="sideModal_body_box d-flex">
                                    <div className="sideModal_body_box_lft">
                                        <em className="icon-telescope" />
                                    </div>
                                    <div className="sideModal_body_box_rht">
                                        <h4 className="sideModal_body_box_title font-md">Some Things to See & Do</h4>
                                        <ul className="list-unstyled">
                                            <li>Explore the shops, restaurants and attractions of Las Olas Boulevard</li>
                                            <li>Cruise the city's famous canals on a relaxing boat ride</li>
                                            <li>Stroll the scenic riverwalk in downtown Fort Lauderdale</li>
                                        </ul>
                                        <Link to="#">Learn More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
