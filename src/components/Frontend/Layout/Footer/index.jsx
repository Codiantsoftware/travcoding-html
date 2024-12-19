import React, { useEffect, useState } from "react";
import { Col, Container, FormGroup, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "../../../CommonElement";
import { CheckRadio, Button } from "../../UiElements";

export function Footer() {  

    const [isVisible, setIsVisible] = useState(false); // Track visibility of the arrow button

     // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true); // Show button if scrolled down 300px
      } else {
        setIsVisible(false); // Hide button if scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
    
    return (
        <>
           <div className="footer">
                <Container>
                    <div className="footer_top">
                        <Row className="justify-content-between">
                            <Col sm={6} lg={5} xl={4} className="footer_top_left">
                                <h2 className="footer_top_title">Get Cruise Deals Directly In Your Inbox</h2>
                                <Form>
                                    <FormGroup className="form-group">
                                        <Form.Control
                                            placeholder="name@example.com"
                                            aria-label="Username"
                                            className="form-control"
                                        />
                                        <Button variant="secondary" label="send" type="submit"/>
                                    </FormGroup>
                                </Form>
                                <div className="footer_top_privacy">
                                    <CheckRadio name="agree" type="checkbox" label={<>I agree to the <Link to="/">privacy statement</Link></>} id="checkbox01" extraClass="form-check-inline d-block"/>                                    
                                </div>
                            </Col>
                            <Col sm={6} md={5} xl={4} className="footer_top_right text-sm-end">
                                <Image imageFor="frontend" source="logo.svg" alt="travcoding-logo"/>
                                <h2 className="footer_top_title mb-2 mb-sm-3">Have a question or
                                need <span>assistance?</span></h2>
                                <p className="mb-0 d-flex align-items-center justify-content-sm-end">Call us at: <a href="tel:0123456789" className="ms-1"> 012 345 6789</a></p>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer_center">
                        <div className="footer_center_inner d-flex">
                            <div className="footer_center_first">
                                <h3 className="footer_center_title">Directly to</h3>
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="#!">About Us</Link></li>
                                    <li><Link to="#!">Contact Us</Link></li>
                                    <li><Link to="#!">Travel Updates</Link></li>
                                    <li><Link to="#!">FAQs</Link></li>
                                    <li><Link to="#!">Careers</Link></li>
                                    <li><Link to="#!">News and Blog</Link></li>
                                    <li><Link to="#!">Articles</Link></li>
                                </ul>
                            </div>
                            <div className="footer_center_second">
                                <h3 className="footer_center_title">FIND A CRUISE</h3>
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="#!">Last Minute Cruises</Link></li>
                                    <li><Link to="#!">Largest Cruise Ships</Link></li>
                                    <li><Link to="#!">Weekend Cruises</Link></li>
                                    <li><Link to="#!">Family Vacations</Link></li>
                                    <li><Link to="#!">Holiday Cruises</Link></li>
                                    <li><Link to="#!">Royal Weddings</Link></li>
                                    <li><Link to="#!">2024-2025 Cruises</Link></li>
                                    <li><Link to="#!">Themed Cruises</Link></li>
                                </ul>
                            </div>
                            <div className="footer_center_three">
                                <h3 className="footer_center_title">Links</h3>
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="#!">Top Cruise Lines</Link></li>
                                    <li><Link to="#!">Top Rivers</Link></li>
                                    <li><Link to="#!">Top Departure Ports</Link></li>
                                    <li><Link to="#!">Top Ports</Link></li>
                                    <li><Link to="#!">Top Destinations</Link></li>
                                    <li><Link to="#!">Top Cruise </Link></li>
                                    <li><Link to="#!">Top Occasions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom d-flex align-items-center justify-content-between">
                        <div className="footer_bottom_left">
                            <p className="mb-0">© 2024 Trav Coding. All Rights Reserved.</p>
                        </div>
                        <ul className="footer_bottom_center list-unstyled mb-0 d-flex align-items-center">
                            <li>
                                <Link to="#!">Booking Conditions  </Link>
                            </li>
                            <li>
                                <Link to="#!">Privacy   </Link>
                            </li>
                            <li>
                                <Link to="#!">Terms of Use</Link>
                            </li>
                        </ul>
                        <ul className="footer_bottom_right list-unstyled mb-0 d-flex align-items-center">
                            <li><Link to="#!" aria-label="facebook"><em className="icon-facebook" /></Link></li>
                            <li><Link to="#!" aria-label="instagram"><em className="icon-instagram" /></Link></li>
                            <li><Link to="#!" aria-label="linkedin"><em className="icon-linkedin" /></Link></li>
                            <li><Link to="#!" aria-label="youtube"><em className="icon-youtube" /></Link></li>
                            <li><Link to="#!" aria-label="twitter"><em className="icon-twitter" /></Link></li>
                        </ul>
                    </div>
                </Container>
                <Link as="button" aria-label="scroll to top" className= {`footer_scrollBtn ${isVisible ? "show" : ""}`}  onClick={scrollToTop} ><em className="icon-arrow-top" /></Link>
            </div>
        </>
    );
}