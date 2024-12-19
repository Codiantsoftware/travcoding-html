import React, { useState, useEffect } from "react";
import { Accordion, Col, Container, Row, Nav, Tab} from "react-bootstrap";
import { Button, CheckRadio, CruiseModal, DatesModal, MapsModal, Modal, SearchFilter, SelectPicker, SideModal, VideosModal} from "../../../components/Frontend";
import { Image } from "../../../components/CommonElement";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";
import { FRONTEND_IMAGE_URL } from '../../../config';
import { ViewsModal } from "../../../components/Frontend/UiElements/ViewsModal";

function Listing() {
  // Select option
  const sortOptions = [
    { value: 'Lowest', label: 'Price, Lowest First' },
  ]  
  //card
  const [likedCards, setLikedCards] = useState({});
  const cards = [
    {
      id: 1,
      images: ["card-img-01.webp", "card-img-01.webp"],
      logo: ["card-logo-1.webp", "card-logo-1.webp"],
      video: [true, false],
      nights: ["3 Nights", "3 Nights"],
      ship: "MSC Seashore",
      destination: "Bahamas",
      title: "Caribbean and Antilles, 3 Nights",
      from: "Port Canaveral, Port Canaveral",
      itinerary: [
        "Port Canaveral (Orlando) Florida",
        "Nassau Bahamas",
        "Ocean Cay MSC Marine Reserve Bahamas",
        "Port Canaveral (Orlando) Florida",
      ],
      path: frontendRouteMap.LISTING.path,
      price: "$248.91",
      additional: "Includes taxes and fees",
      para: "Ports of Call may vary by departure date and subject to weather and other conditions.",
      roundtrip: "Roundtrip From"
    },
    {
      id: 2,
      images: ["card-img-02.webp", "card-img-02.webp"],
      video: [false, true],
      logo: ["card-logo-2.webp", "card-logo-2.webp"],
      nights: ["3 Nights", "3 Nights"],
      ship: "Liberty of the Seas",
      destination: "Bahamas",
      title: "3 Night Bahamas & Perfect Day Cruise",
      from: "Ft Lauderdale, Ft Lauderdale",
      itinerary: [
        "Fort Lauderdale", "Florida, Nassau", "Bahamas", "Perfect Day Cococay", "Bahamas", "Fort Lauderdale", "Florida"
      ],
      path: frontendRouteMap.LISTING.path,
      price: "$363.58",
      additional: "Includes taxes and fees",
      para: "Ports of Call may vary by departure date and subject to weather and other conditions.",
      roundtrip: "Roundtrip From"
    },
    {
      id: 3,
      images: ["card-img-03.webp", "card-img-03.webp"],
      logo: ["card-logo-2.webp", "card-logo-2.webp"],
      nights: ["11 Nights", "11 Nights"],
      video: [true, true],
      ship: "Amacerto",
      destination: "Europe",
      title: "7 Night Enticing Douro Modified With 3 Nights Lisbon Pre-Cruise",
      from: "Lisbon, Porto",
      itinerary: ["Zurich", "Lucerne", "Basel", "Breisach", "Strasbourg", "Ludwigshafen", "Rdesheim", "Rhine Gorge", "Lahnstein", "Dsseldorf", "Amsterdam"],
      price: "$5,603.00",
      path: frontendRouteMap.LISTING.path,
      additional: "Includes taxes and fees",
      para: "Ports of Call may vary by departure date and subject to weather and other conditions.",
      roundtrip: "Singletrip From"
    },
    {
      id: 4,
      images: ["card-img-04.webp", "card-img-04.webp"],
      logo: ["card-logo-2.webp", "card-logo-2.webp"],
      nights: ["11 Nights", "11 Nights"],
      video: [true, true],
      ship: "Amacerto",
      destination: "Europe",
      title: "7 Night Christmas Markets on the Rhine with 2 nights Zurich, 2 Nights Lake Lucerne Pre-Cruise",
      from: "Zurich, Zurich",
      itinerary: ["Zurich", "Lucerne", "Basel", "Breisach", "Strasbourg", "Ludwigshafen", "Rdesheim", "Rhine Gorge", "Lahnstein", "Dsseldorf", "Amsterdam"],
      price: "$5,603.00",
      path: frontendRouteMap.LISTING.path,
      additional: "Includes taxes and fees",
      para: "Ports of Call may vary by departure date and subject to weather and other conditions.",
      roundtrip: "Roundtrip From"
    },
    {
      id: 5,
      images: ["card-img-05.webp", "card-img-05.webp"],
      logo: ["card-logo-2.webp", "card-logo-2.webp"],
      nights: ["11 Nights", "11 Nights"],
      video: [false, false],
      ship: "Amacerto",
      destination: "Europe",
      title: "7 Night Christmas Markets on the Rhine with 2 nights Zurich, 2 Nights Lake Lucerne Pre-Cruise",
      from: "Zurich, Zurich",
      itinerary: ["Zurich", "Lucerne", "Basel", "Breisach", "Strasbourg", "Ludwigshafen", "Rdesheim", "Rhine Gorge", "Lahnstein", "Dsseldorf", "Amsterdam"],
      price: "$5,603.00",
      path: frontendRouteMap.LISTING.path,
      additional: "Includes taxes and fees",
      para: "Ports of Call may vary by departure date and subject to weather and other conditions.",
      roundtrip: "Roundtrip From"
    },
    {
      id: 6,
      images: ["card-img-06.webp", "card-img-06.webp"],
      logo: ["card-logo-2.webp", "card-logo-2.webp"],
      nights: ["11 Nights", "11 Nights"],
      video: [false, false],
      ship: "Amacerto",
      destination: "Europe",
      title: "7 Night Christmas Markets on the Rhine with 2 nights Zurich, 2 Nights Lake Lucerne Pre-Cruise",
      from: "Zurich, Zurich",
      itinerary: ["Zurich", "Lucerne", "Basel", "Breisach", "Strasbourg", "Ludwigshafen", "Rdesheim", "Rhine Gorge", "Lahnstein", "Dsseldorf", "Amsterdam"],
      price: "$5,603.00",
      path: frontendRouteMap.LISTING.path,
      additional: "Includes taxes and fees",
      para: "Ports of Call may vary by departure date and subject to weather and other conditions.",
      roundtrip: "Roundtrip From"
    },
  ];
  const handleLike = (cardId) => {
    setLikedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  //Year
  const [selectedYears, setSelectedYears] = useState({
    2024: Array(12).fill(false),
    2025: Array(12).fill(false),
    2026: Array(12).fill(false),
    2027: Array(12).fill(false),
  });
  const handleCheckboxChange = (year, index) => {
    setSelectedYears((prevState) => ({
      ...prevState,
      [year]: prevState[year].map((checked, i) => (i === index ? !checked : checked)),
    }));
  };
  const handleCheckAllChange = (year) => {
    const allChecked = selectedYears[year].every((checked) => checked);
    setSelectedYears((prevState) => ({
      ...prevState,
      [year]: prevState[year].map(() => !allChecked),
    }));
  };
  const renderCheckboxes = (year) => (
    <>
      {selectedYears[year].map((isChecked, index) => (
        <Col xs={4} key={`year-${year}-${index}`}>
          <CheckRadio
            type="checkbox"
            label={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}
            id={`year-${year}-${index + 1}`}
            name={`year${year}`}
            checked={isChecked}
            onChange={() => handleCheckboxChange(year, index)}
          />
        </Col>
      ))}
      <Col md={12}>
        <CheckRadio
          extraClass="allCheck"
          type="checkbox"
          label="Check All"
          id={`check-all-${year}`}
          name={`check-all-${year}`}
          checked={selectedYears[year].every((checked) => checked)}
          onChange={() => handleCheckAllChange(year)}
        />
      </Col>
    </>
  );   
  //Modal Map
  const [showPortsModal, setShowPortsModal] = useState(false);
  const handlePortsShow = () => setShowPortsModal(true);
  const handlePortsClose = () => setShowPortsModal(false);
  //Modal Video
  const [showVideosModal, setShowVideosModal] = useState(false);
  const handleVideosShow = () => setShowVideosModal(true);
  const handleVideosClose = () => setShowVideosModal(false);
  //Cruise Side Modal
  const [isCruiseOpen, setCruiseOpen] = useState(false);
  const toggleCruise = () => {
    setCruiseOpen((prevState) => !prevState);
  };
  //View Plan Side Modal
  const [isViewsOpen, setViewsOpen] = useState(false);
  const toggleViews = () => {
    setViewsOpen((prevState) => !prevState);
  };
  const innertoggleCruise = () => {
    setViewsOpen(false);
    setCruiseOpen(true);
  };
  //Dates Side Modal
  const [isDatesOpen, setDatesOpen] = useState(false);
  const toggleDates = () => {
    setViewsOpen(false);
    setDatesOpen((prevState) => !prevState);
  };
  const toggleBack = () => {
    setViewsOpen(true);
    setDatesOpen(false);
  };
  //Filter Toggle
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    if (showFilter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {     
      document.body.classList.remove("overflow-hidden");
    };
  }, [showFilter]);
  const handleFilterClick = () => {
    setShowFilter((prev) => !prev);
  };
  const handleOverlayClick = () => {
    setShowFilter(false);
  };
  return (
    <>
      <main className="listingPage">
        

        {/* Banner Section @S */}
        <section className="innerBanner" style={{ backgroundImage: `url(${FRONTEND_IMAGE_URL}/inner-banner-bg.webp)` }}>
          <div className="innerBanner_overlay">
            <Image className="w-100 h-100 object-fit-cover" source="inner-banner-overlay.webp" alt="overlay-img" />
          </div>
          <Container>
            <div className="innerBanner_inner text-center">
              <h1 className="innerBanner_title fw-bold">Explore Sales, Deals, and <br className="d-none d-md-block" /> Special Promotions</h1>
              <Link to="#" className="innerBanner_link">Explore More <em className="icon-arrow-right" /></Link>
            </div>
            <SearchFilter />
          </Container>
          <div className="innerBanner_curve">
            <Image source="curve.svg" className="img-fluid w-100" alt="innerbanner-curve-img" />
          </div>
        </section>
        {/* Banner Section @E */}

        {/* List Section @S */}
        <section className="listSec">
          <Container>
            <div className="listSec_head d-flex justify-content-between">
              <div className="listSec_head_left">
                <h2 className="listSec_head_left_title font-bd">Cruise Results</h2>
                <p>Showing 1-20 out of 485 Cruise</p>
              </div>
              <div className="listSec_head_center d-flex align-items-center flex-grow-1 flex-wrap">
                <div className="listSec_head_tags">
                  <span>New York State, USA</span>
                  <div className="listSec_head_tags_cross" role="button" aria-label="Close Button"><em className="icon-cross" /></div>
                </div>
                <div className="listSec_head_tags">
                  <span>Los Angeles, California</span>
                  <div className="listSec_head_tags_cross" role="button" aria-label="Close Button"><em className="icon-cross" /></div>
                </div>
                <div className="listSec_head_tags">
                  <span>Sep 1 - Sep 30, 2025</span>
                  <div className="listSec_head_tags_cross" role="button" aria-label="Close Button"><em className="icon-cross" /></div>
                </div>
                <div role="button" className="listSec_head_link">Clear all</div>
              </div>
              <div className="listSec_head_right">
                <div className="listSec_head_sort">
                  <div className="select-group">
                    <span className="select-group-sort text-capitalize">Sort By:</span>
                    <SelectPicker options={sortOptions} placeholder="Select" classNamePrefix="customSelect" />
                  </div>
                </div>
              </div>
            </div>
            <div className="listSec_body">
              <Row className="g-20">
                <Col xl={3}>
                  <div role="button" aria-label="Filter Button" onClick={handleFilterClick} className="listSec_filterBtn d-xl-none">
                    <em className="icon-filter"/>
                  </div>
                  <div className={`listSec_filter ${showFilter ? "show" : ""}`}>
                    <div className="listSec_filter_head d-flex justify-content-between align-items-center">
                      <h2 className="listSec_filter_title font-bd text-capitalize">Filter your search</h2>
                      <div role="button" className="listSec_filter_clear font-bd">CLEAR ALL</div>
                    </div>
                    <div className="listSec_filter_body">
                      <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen>
                        <Accordion.Item className="rounded-0" eventKey="0">
                          <Accordion.Header>Cruises Type</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="radio" label="All Cruises" id="type01" name="cruises" />
                            <CheckRadio type="radio" label="Ocean Cruises" id="type02" name="cruises" />
                            <CheckRadio type="radio" label="River Cruises" id="type03" name="cruises" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="1">
                          <Accordion.Header>Tour Type</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="radio" label="Cruise Only" id="tour01" name="tour" />
                            <CheckRadio type="radio" label="Cruise Line Tour" id="tour02" name="tour" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="2">
                          <Accordion.Header>Sailing Dates</Accordion.Header>
                          <Accordion.Body>
                            <Tab.Container defaultActiveKey="2024">
                              <Nav as="ul">
                                {["2024", "2025", "2026", "2027"].map((year) => (
                                  <Nav.Item as="li" key={year}>
                                    <Nav.Link as="button" eventKey={year}>
                                      {year}
                                    </Nav.Link>
                                  </Nav.Item>
                                ))}
                              </Nav>
                              <Tab.Content>
                                {["2024", "2025", "2026", "2027"].map((year) => (
                                  <Tab.Pane eventKey={year} key={year}>
                                    <Row className="gy-3">{renderCheckboxes(year)}</Row>
                                  </Tab.Pane>
                                ))}
                              </Tab.Content>
                            </Tab.Container>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="3">
                          <Accordion.Header>Price Per Person</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="0 To 1000" id="price01" name="price" />
                            <CheckRadio type="checkbox" label="1001 To 2000" id="price02" name="price" />
                            <CheckRadio type="checkbox" label="2001 To 4000" id="price03" name="price" />
                            <CheckRadio type="checkbox" label="4001 and More" id="price04" name="price" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="4">
                          <Accordion.Header>Cruise Length</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="1 to 3 nights" id="length01" name="length" />
                            <CheckRadio type="checkbox" label="4 to 6 nights" id="length02" name="length" />
                            <CheckRadio type="checkbox" label="7 to 9 nights" id="length03" name="length" />
                            <CheckRadio type="checkbox" label="10 to 13 nights" id="length04" name="length" />
                            <CheckRadio type="checkbox" label="14 and more nights" id="length05" name="length" />
                            <CheckRadio type="checkbox" label="30 and more nights" id="length06" name="length" />
                            <CheckRadio type="checkbox" label="100 and more nights" id="length07" name="length" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="5">
                          <Accordion.Header>Destination/River</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="River" id="river01" name="river" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="6">
                          <Accordion.Header>Departure Port</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="Port" id="port01" name="port" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="7">
                          <Accordion.Header>Cruise Line</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="Line" id="line01" name="line" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="8">
                          <Accordion.Header>Cruise Ship</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="Ship" id="ship01" name="ship" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="9">
                          <Accordion.Header>Arrival Port</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="Port" id="port01" name="port" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="10">
                          <Accordion.Header>Max Occupancy</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="Occupancy" id="occupancy01" name="occupancy" />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="rounded-0" eventKey="11">
                          <Accordion.Header>Supplier Promotions</Accordion.Header>
                          <Accordion.Body>
                            <CheckRadio type="checkbox" label="Promotions" id="promotions01" name="promotions" />
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                  {showFilter && <div className="listSec_overlay" onClick={handleOverlayClick}></div>}
                </Col>
                <Col xl={9}>
                  <div className="listSec_card">
                    {cards.map((card) => (
                      <div className="listSec_card_box" key={card.id}>
                        <div className="listSec_card_lft">
                          <div role="button" aria-label="Like Button" className={`listSec_card_like ${likedCards[card.id] ? "active" : ""}`} onClick={() => handleLike(card.id)} >
                            <em className={likedCards[card.id] ? "icon-heart-fill" : "icon-heart"} />
                          </div>
                          <Swiper navigation={true} modules={[Navigation]} loop={true} className="h-100">
                            {card.images.map((image, index) => (
                              <SwiperSlide key={`${card.id}-${index}`}>
                                <div className="listSec_card_slider h-100">
                                  {card.video[index] ? (
                                    <div role="button" aria-label="Video Button" className="videoBox" onClick={handleVideosShow}>
                                      <em className="icon-play" />
                                    </div>
                                  ) : (<></>)}
                                  <Image
                                    source={image}
                                    className="w-100 h-100 object-fit-cover"
                                    alt="card-image"
                                  />
                                  <div className="listSec_card_tag d-flex justify-content-between align-items-center w-100">
                                    <div className="listSec_card_badges font-md text-uppercase">
                                      {Array.isArray(card.nights) ? card.nights[index] : card.nights}
                                    </div>
                                    <Image
                                      source={Array.isArray(card.logo) ? card.logo[index] : card.logo}
                                      className="img-fluid"
                                      alt="card-logo"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                        <div className="listSec_card_rht">
                          <div className="listSec_card_top d-sm-flex justify-content-sm-between align-items-sm-center">
                            <div className="listSec_card_top_txt">
                              <em className="icon-ship" />{" "}
                              <span className="listSec_card_top_sub">{card.ship}</span>
                              <span className="listSec_card_top_tag">{card.destination}</span>
                            </div>
                            <div className="ratingStar">
                              <em className="icon-star active" />
                              <em className="icon-star active" />
                              <em className="icon-star active" />
                              <em className="icon-star active" />
                              <em className="icon-star half" />
                              <span>4.5</span>
                            </div>
                          </div>
                          <div className="listSec_card_body">
                            <h2 className="listSec_card_title font-md"><Link to={card.path}>{card.title}</Link></h2>
                            <ul className="list-unstyled">
                              <li>
                                <span className="font-md">{card.roundtrip}</span>
                                <span> {card.from}</span>
                              </li>
                              <li>
                                <span className="font-md">Cruise Line Tour:</span>
                                {card.itinerary.map((item, idx) => (
                                  <span key={idx}> {item}</span>
                                ))}
                              </li>
                            </ul>
                            <div className="listSec_card_ports d-flex justify-content-between align-items-center">
                              <div role="button" className="listSec_card_map font-md" onClick={handlePortsShow}>
                                + View Ports & Map
                              </div>
                              <div role="button" className="listSec_card_offer d-flex align-items-center font-md">
                                <em className="icon-deals" /> Available Offers
                              </div>
                            </div>
                            <div className="listSec_card_btns d-lg-flex justify-content-lg-between align-items-lg-center">
                              <div className="listSec_card_price">
                                <h3 className="listSec_card_price_title font-bd">
                                  {card.price}
                                  <span className="font-rg">/Per Person</span>
                                </h3>
                                <span>{card.additional}</span>
                              </div>
                              <div className="listSec_card_view">
                                <Button
                                  type="button"
                                  extraClass="text-uppercase"
                                  variant="outline-secondary"
                                  label="View Itinerary"
                                  onClick={toggleCruise}
                                />
                                <Button
                                  type="button"
                                  extraClass="text-uppercase"
                                  variant="primary"
                                  label="View 17 dates"
                                  onClick={toggleViews}
                                />
                              </div>
                            </div>
                            <div className="listSec_card_other">{card.para}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button type="button" label="Load more" extraClass="text-uppercase" variant="grays" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        {/* Listing Section @E */}
      </main>

      {/* Modals */}
      <Modal show={showPortsModal} className="mapModal" handleClose={handlePortsClose} size="lg">
        <MapsModal/>
      </Modal>
      <SideModal showModal={isCruiseOpen} extraClass="pd-40 pb-0" onClose={toggleCruise}>
        <CruiseModal/>
      </SideModal>
      <SideModal showModal={isViewsOpen} onClose={toggleViews}>
        <ViewsModal handlePortsShow={handlePortsShow} innertoggleCruise={innertoggleCruise } toggleDates={toggleDates}/>
      </SideModal>
      <SideModal showModal={isDatesOpen} extraClass="pd-40" closeBtn={false} onClose={toggleDates}>
        <DatesModal toggleBack={toggleBack}/>
      </SideModal>
      <Modal show={showVideosModal} className="videoModal" handleClose={handleVideosClose} size="md">
        <VideosModal/>
      </Modal>
    </>
  );
}

export default Listing;
