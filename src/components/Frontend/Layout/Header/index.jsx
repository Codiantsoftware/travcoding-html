import React, { useEffect, useRef, useState } from "react";
import {  Nav, Navbar } from "react-bootstrap";
import { Image } from "../../../CommonElement";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../UiElements";

export function Header() {
    // login and logout
    const [showSignupButton, setShowSignupButton] = useState(true);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        setShowLoginButton(false);
        setShowSignupButton(false);
    };

    const headerRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        const updateBodyPadding = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            if (
                location.pathname === "" ||
                location.pathname === "/" ||
                location.pathname === "/#!" ||
                location.pathname === "/listing"
            ) {
                document.body.style.paddingTop = "0";
            } else {
                document.body.style.paddingTop = `${headerHeight}px`;
            }
        };
        updateBodyPadding();
        window.addEventListener("resize", updateBodyPadding);
        return () => {
            window.removeEventListener("resize", updateBodyPadding);
            document.body.style.paddingTop = "";
        };
    }, [location]);
    useEffect(() => {
        const header = headerRef.current;
        let lastScrollY = window.scrollY;
        const updateHeaderClasses = () => {
            const currentScrollY = window.scrollY;
            if (
                location.pathname === "" ||
                location.pathname === "/" ||
                location.pathname === "/#!" ||
                location.pathname === "/listing"
            ) {
                if (currentScrollY >= 20) {
                    header?.classList.add("header_fixed");
                    header?.classList.remove("headerTransparent");
                } else {
                    header?.classList.remove("header_fixed");
                    header?.classList.add("headerTransparent");
                }

                if (currentScrollY < lastScrollY && currentScrollY < 20) {
                    header?.classList.add("headerTransparent");
                }
            }

            lastScrollY = currentScrollY;
        };
        const hash = window.location.hash;
        if (
            (location.pathname === "" || location.pathname === "/" || location.pathname === "/#!" || location.pathname === "/listing") &&
            (hash === "#Outside" || hash === "#Suite" || hash === "#Balcony" || hash === "#Inside")
        ) {
            header?.classList.add("headerTransparent");
        } else if (window.scrollY > 20) {
            header?.classList.remove("headerTransparent");
        }
        updateHeaderClasses();
        window.addEventListener("scroll", updateHeaderClasses);
        return () => {
            window.removeEventListener("scroll", updateHeaderClasses);
        };
    }, [location]);
    return (
        <>
            <header className="header position-fixed w-100" ref={headerRef}>
                <div className="header_inner">
                    <Navbar expand="xl">
                        <Navbar.Brand as="div">
                            <Link to="/">
                                <Image imageFor="frontend" source="logo.svg" className="img-fluid whiteLogo" alt="travcoding-logo" />
                                <Image imageFor="frontend" source="logo-dark.svg" className="img-fluid darkLogo" alt="travcoding-logo" />
                            </Link>
                        </Navbar.Brand>
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Item>
                                    <Nav.Link href="">Find A Cruise</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="">Deals</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="">Ships</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="">Destinations</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="">Manage My Cruise</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="" className="d-flex align-items-center"><em className="icon-deals" /> Today's Deals</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        {/* Book Button */}
                        <div className="d-flex header_right align-items-center">
                            <>
                                <ul className="header_right_list mb-0 d-flex align-items-center list-unstyled">
                                    <li className="d-flex align-items-center">
                                        <span className="me-1">Call:</span>
                                        <Link to="tel:866 562 7625">866 562 7625</Link>
                                    </li>
                                    {showSignupButton && (
                                        <li ><Link to="/" className="text-uppercase">Sign up</Link></li>
                                    )}
                                </ul>
                                    <Button as={Link} to="" variant="primary" size="sm" label="Log in" className="ripple-effect text-uppercase" ></Button>
                               
                            </>

                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <span className="navbar-toggler-icon" />
                                <span className="navbar-toggler-icon" />
                                <span className="navbar-toggler-icon" />
                            </Navbar.Toggle>
                        </div>
                    </Navbar>
                </div>
            </header>
        </>
    );
}