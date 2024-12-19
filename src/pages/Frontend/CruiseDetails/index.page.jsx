import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Image } from '../../../components/CommonElement';
import { Col, Container, Dropdown, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Button, CruiseModal, DatesModal, MapsModal, Modal, RoomsCard, SideModal, VideosModal, ViewsModal } from '../../../components/Frontend';
import { Link } from 'react-router-dom';
import highlightsData from "./highlightsData.json";
import roomsData from "./roomsData.json";
import shipFacts from "./shipFacts.json";

const CruiseDetails = () => {
  const prevRefSwiper = useRef(null);
  const nextRefSwiper = useRef(null);

  const [deckPlan, setDeckPlan] = useState("Deck 19");
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

    const deckPreviewRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
  
    const handleFullscreen = () => {
      if (document.fullscreenElement) {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      } else {
        // Enter fullscreen
        if (deckPreviewRef.current.requestFullscreen) {
          deckPreviewRef.current.requestFullscreen();
        }
      }
    };
  
    useEffect(() => {
      const onFullscreenChange = () => {
        // Update the fullscreen state based on whether an element is in fullscreen
        setIsFullscreen(!!document.fullscreenElement);
      };
      // Add event listener for fullscreen changes
      document.addEventListener("fullscreenchange", onFullscreenChange);
      return () => {
        // Cleanup event listener
        document.removeEventListener("fullscreenchange", onFullscreenChange);
      };
    }, []);


  const bannerSlide = [
    "details-img-1",
    "details-img-2",
    "details-img-3",
    "details-img-1",
    "details-img-2",
    "details-img-3",
  ];
    
  return (
    <>
    <main className="detailsPage">
      <section className="detailsBanner position-relative">
        <Swiper 
          spaceBetween={5}
          slidesPerView={3} 
          // navigation={true} 
          modules={[Navigation]} 
          // loop={true}
          // navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          navigation={{
            prevEl: prevRefSwiper.current,
            nextEl: nextRefSwiper.current,
          }}
          onBeforeInit={(swiper) => {
            // Pass the references to Swiper instance
            swiper.params.navigation.prevEl = prevRefSwiper.current;
            swiper.params.navigation.nextEl = nextRefSwiper.current;
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              centeredSlides: false,
              loop: false
            },
            768: {
              slidesPerView: 1.9,
              centeredSlides: true,
              loop: true
            },
            576: {
              slidesPerView: 1.6,
              centeredSlides: true,
              loop: true
            },
            0: {
              slidesPerView: 1.3,
              centeredSlides: true,
              loop: true
            }
          }}
        >
           {bannerSlide.map((source, index) => (
              <SwiperSlide key={index}>
                <Image source={`${source}.webp`} alt={`banner-${source}`} className="img-fluid" />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className='swiper-navigation'>
          <button ref={prevRefSwiper} className="swiper-button-prev"></button>
          <button ref={nextRefSwiper} className="swiper-button-next"></button>
        </div>
        <div className="detailsBanner_curve ">
          <Image source="curve-gray.svg" className="img-fluid w-100" alt="banner-curve" />
        </div>
      </section>
      <section className='detailsContent'>
        <Container>
          <Row className='g-2 g-xl-3'>
            <Col lg={8} className='order-2 order-lg-1'>
              <div className='detailsCard pb-2'>
                <div className='tripInfoBox d-flex'>
                  <div className='tripInfoBox_left'>
                    <div className='tripInfoBox_left_top'>
                      <div className='d-flex align-items-center flex-wrap gap-2'>
                        <h1 className='tripTitle text-uppercase'>3 Nights</h1>
                        <div className="ratingStar">
                          <em className="icon-star active" />
                          <em className="icon-star active" />
                          <em className="icon-star active" />
                          <em className="icon-star active" />
                          <em className="icon-star half" />
                          <span>4.5</span>
                        </div>
                      </div>
                      <div className="locationInfo d-flex align-items-center">
                        <em className="icon-ship" />{" "}
                        <span className="locationInfo_sub">MSC Seashore</span>
                        <span className="locationInfo_tag">Bahamas</span>
                      </div>
                    </div>
                    <div className='tripInfoBox_left_body'>
                      <h3 className='tripInfoBox_left_body_title font-md'>Caribbean and Antilles, 3 Nights</h3>
                      <ul className="list-unstyled">
                        <li>
                          <span className="font-md">Roundtrip From:</span>
                          <span>Port Canaveral, Port Canaveral</span>
                        </li>
                        <li>
                          <span className="font-md">Cruise Line Tour:</span>
                          <span>Port Canaveral (Orlando) Florida</span> <span>Nassau Bahamas</span> <span> 
                          Ocean Cay Msc Marine Reserve Bahamas</span> <span>Port Canaveral (Orlando) Florida </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tripInfoBox_right text-right'>
                    <div className='priceInfo'>
                      <h2 className="priceInfo_title font-bd">
                        $248.91
                        <span className="font-rg">/Per Person</span>
                      </h2>
                      <span>Includes taxes and fees</span>
                    </div>
                    <div role="button" className="tripInfoBox_right_offer font-md">
                      <em className="icon-deals" /> Available Offers
                    </div>
                  </div>
                </div>
                <div className='tripInfoBox_action d-flex flex-wrap justify-content-between align-items-center'>
                  <div onClick={handlePortsShow} role="button" className="tripInfoBox_action_map font-md">
                    + View Ports & Map
                  </div>
                  <Button
                    onClick={innertoggleCruise}
                    type="button"
                    extraClass="text-uppercase"
                    variant="outline-secondary"
                    label="View Itinerary"
                  />
                </div>
                <div className='tripInfoBox_links'>
                  <Nav variant="pills" className="commonTabs border-lg">
                    <Nav.Item>
                      <Nav.Link href='#shipHighlights' className='active'>Ship Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#deckplans'>Deck Plans</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#staterooms'>Staterooms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#shipFacts'>Ship Facts</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className='detailsCard' id='shipHighlights'>
                <div className='detailsCard_head'>
                  <h2 className='detailsCard_head_title font-bd'>Ship Highlights</h2>
                </div>
                <div className='shipHighlight'>
                  <div className='shipHighlight_video position-relative'>
                    <Image source="ship-highlights.webp" alt='ship-highlights-video' className="w-100" />
                    <div onClick={handleVideosShow} role="button" className="videoBox">
                      <em className="icon-play" />
                    </div>  
                  </div>
                  <div className='shipHighlight_cnt'>
                    <p className='text-900-80'>The first of two enriched Seaside EVO Class ships. Building on the groundbreaking and pioneering design of the Seaside class of ship, aimed at bringing guests closer to the sea, MSC Seashore has been extended and enhanced with a variety of brand-new features, spaces and experiences for guests. MSC Seashore is equipped become the first cruise ship in the world to feature a new air sanitation system, ‘Safe Air’, which uses UV-C lamp technology to eliminate viruses and bacteria to guarantee clean and safe air for guests and crew.</p>
                    <ul className='list-unstyled mb-0 text-900-80'>
                      <li>Specialty restaurants allows waterfront seating on the iconic waterfront boardwalk bringing guests</li>
                      <li>The family offering has been expanded with an even bigger kids’ area and an ultimate state-of-the-art waterpark</li>
                      <li>The MSC Aurea Spa on MSC Seashore is a luxurious Balinese spa offering signature relaxation treatments</li>
                      <li>The stunning high-tech theatre is the ideal venue to enjoy spectacular Broadway-style shows</li>
                      <li>Enjoy enhanced 5D Cinema, Rafting simulator, VR Maze and the Formula 1 virtual-reality racing cars etc</li>
                    </ul>
                  </div>
                </div>
                <Row className='g-2 g-md-3'>
                {highlightsData.map((item, index) => (
                  <Col sm={6} md={4} key={index}>
                    <div className="highlightsCard pb-xl-0">
                      <div className="highlightsCard_thumb">
                        <Image source={`hilights/${item.image}.webp`} alt={`${item.image}-highlights`} className="img-fluid" />
                      </div>
                      <div className="highlightsCard_cnt">
                        <h3 className="highlightsCard_cnt_title font-bd">{item.title}</h3>
                        <p className="text-900-80">{item.description}</p>
                        <div className="highlightsCard_cnt_action d-flex justify-content-between align-items-center">
                          <Link to="#" className="text-uppercase font-md">
                            + View More
                          </Link>
                          <div role="button" className="view360 text-500 d-inline-flex">
                            <em className="icon-360-view" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
                </Row>
                <p className='notePara text-900-80'>Note: Details, ship facts, policies, images and descriptions are gathered for information only and subject to change without notice. Images and descriptions displayed are subject to change at any time without notice. Actual details, design and configuration may vary.</p>
              </div>
              <div className='detailsCard' id='deckplans'>
                <div className='deskPlanSec'>
                  <Row className='g-2'>
                    <Col lg={6}>
                      <div className='detailsCard_head'>
                        <h2 className='detailsCard_head_title font-bd'>Deck Plans</h2>
                      </div>
                      <div className='deskPlanSec_left'>
                        <Image source="deck-plan.webp" className="img-fluid" alt="deck-plan-img" />
                        <div className='deskPlanSec_left_card'>
                          <h3 className='deskPlanSec_left_card_title font-bd'>Deck Description</h3>
                          <p className='m-0'>MSC Aurea Bar, Top 19 Exclusive Solarium, Adventure Trail, Horizon Bar, Staterooms.</p>
                        </div>
                        <div className='deskPlanSec_left_card'>
                          <h3 className='deskPlanSec_left_card_title font-bd'>Category Codes</h3>
                          <div className='categoryCodes font-md'>
                              <span style={{color: '#DAD7D2'}}>YIN</span>
                              <span style={{color: '#B9B3A3'}}>YC1</span>
                              <span style={{color: '#B9B3A3'}}>YCP</span>
                              <span style={{color: '#4E4138'}}>YC4</span>
                          </div>
                        </div>
                        <div className='deskPlanSec_left_card'>
                          <h3 className='deskPlanSec_left_card_title font-bd'>Deck Plan Legends (Key to Symbols)</h3>
                          <ul className='keySymbols list-unstyled'>
                            <li><span className='icon-sofa-bed'></span>Sofa bed</li>
                            <li><span className='icon-double-sofa-bed'></span>Double sofa bed</li>
                            <li><span className='icon-bed'></span>3rd bed is a pullman bed</li>
                            <li><span className='icon-pullbed'></span>3rd & 4th beds are pullman beds</li>
                            <li><span className='icon-bunk-bed'></span>Sofa converts into bunk bed (3rd and 4th beds)</li>
                            <li><span className='icon-obst-cabin'></span>Cabins with obstructed views</li>
                            <li><span className='icon-bed' style={{color: '#93D5E1'}}></span>Balcony with half glass half metal balustrade </li>
                            <li><span className='icon-bed' style={{color: '#DFDBDD'}}></span>Balcony with metal balustrade</li>
                            <li><span className='icon-bed' style={{color: '#A8ACAF'}}></span>Balcony with partial or lateral view balustrade</li>
                            <li><span className='icon-terrace-bath'></span>Terrace with whirlpool bath</li>
                            <li><span className='icon-bathtub-shower'></span>Cabin with bathrtub and shower</li>
                            <li><span className='icon-whirlpool'></span>Balcony with whirlpool bath</li>
                            <li><span className='icon-terrace'></span>Cabin with terrace</li>
                            <li><span className='icon-staterooms'></span>Connecting staterooms</li>
                            <li><span className='icon-guest-cabin'></span>Cabin for guests with reduced mobility</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div ref={deckPreviewRef} className='deskPlanSec_right text-center bg-white'>
                        <div className='deskPlanSec_right_head text-center position-relative'>
                          <p>Showing Deck plans for:</p>
                          <Dropdown>
                            <Dropdown.Toggle as="span" role='button' variant="success" id="dropdown-basic">
                              {deckPlan}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item className={deckPlan === 'Deck 17' ? 'active' : ''} onClick={() => setDeckPlan('Deck 17')}>Deck 17</Dropdown.Item>
                              <Dropdown.Item className={deckPlan === 'Deck 18' ? 'active' : ''} onClick={() => setDeckPlan('Deck 18')}>Deck 18</Dropdown.Item>
                              <Dropdown.Item className={deckPlan === 'Deck 19' ? 'active' : ''} onClick={() => setDeckPlan('Deck 19')}>Deck 19</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <div onClick={handleFullscreen} className={`fullScreen ${isFullscreen ? 'fullScreen-active' : ''}`} role='button'>
                            <em className={`${isFullscreen ? 'icon-exit-full-screen' : 'icon-full-screen'}`} />
                          </div>
                        </div>
                        <div className='bg-white'>
                          <Image source="deck-preview-full.webp" className="img-fluid" alt="deck-preview-img" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <p className='notePara text-900-80'>Note: Deck names, descriptions, key legends, deck plans, onboard activity places, restaurants, bars and other entertainment places are informational only, details may vary and subject to change without notice. Furniture arrangements or design details may vary and subject to change without notice.</p>
              </div>
              <div className='detailsCard' id='staterooms'>
                <div className='detailsCard_head'>
                  <h2 className='detailsCard_head_title font-bd'>Staterooms</h2>
                </div>
                <div className=''>
                  <p className='text-900-80 mb-3 mb-xl-4'>Availability & prices can change frequently, please continue with the booking to check latest availability & prices. Final tax amount might change if prices are adjusted.</p>
                  <Tabs defaultActiveKey="Suite" variant="pills" className="commonTabs border-md">
                    <Tab eventKey="Suite" title="Suite">
                      <div className='roomsCardList'>
                      {roomsData.map((room) => (
                        <RoomsCard key={room.id} room={room} handleVideosShow={handleVideosShow} />
                      ))}
                      </div>
                    </Tab>
                    <Tab eventKey="Balcony" title="Balcony">
                      <div className='roomsCardList'>
                      {([...roomsData]).reverse().map((room) => (
                        <RoomsCard key={room.id} room={room} handleVideosShow={handleVideosShow} />
                      ))}
                      </div>
                    </Tab>
                    <Tab eventKey="Outside" title="Outside" >
                      <div className='roomsCardList'>
                      {roomsData.map((room) => (
                        <RoomsCard key={room.id} room={room} handleVideosShow={handleVideosShow} />
                      ))}
                      </div>
                    </Tab>
                    <Tab eventKey="Inside" title="Inside" >
                      <div className='roomsCardList'>
                      {([...roomsData]).reverse().map((room) => (
                        <RoomsCard key={room.id} room={room} handleVideosShow={handleVideosShow} />
                      ))}
                      </div>
                    </Tab>
                  </Tabs>
                </div>
                <p className='notePara text-900-80'>Note: Category & stateroom name and descriptions displayed are subject to change at any time. Photos shown are samples only and actual details may vary. Some staterooms in the same category may have different furniture arrangements. Amenities mentioned are subject to availability, may vary on each ship and subject to change at any time.</p>
              </div>
              <div className='detailsCard' id='shipFacts'>
                <div className='detailsCard_head'>
                  <h2 className='detailsCard_head_title font-bd'>Ship Facts</h2>
                </div>
                <div className='shipFactsSec'>
                  <Row className='g-xl-4 g-3'>
                    {shipFacts.map((fact, index) => (
                      <Col key={index}>
                        <div className="shipFactsBox">
                          <span className="shipFactsBox_icon">
                            <Image source={`ship-facts/${fact.icon}.svg`} alt={`${fact.icon}-icon`} />
                          </span>
                          <p>{fact.text}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                <p className='notePara text-900-80'>Note: Details, ship facts, policies, images and descriptions are gathered for information only and subject to change without notice. Images and descriptions displayed are subject to change at any time without notice. Actual details, design and configuration may vary.</p>
              </div>
            </Col>
            <Col lg={4} className='order-1 order-lg-2 mobileStickey'>
              <div className='bookingAction text-center'>
                <Button onClick={toggleViews} size='lg' variant="primary" label='Select date and Continue' extraClass='text-uppercase w-100'></Button>
                <p>Cancel up to 7 days before your trip and get a 50% refund plus service fees back.</p>
                <Link to="#">View Policies</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>  
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
  )
}

export default CruiseDetails;