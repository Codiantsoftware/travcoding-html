import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Image } from '../../../components/CommonElement';
import { Col, Container, Nav, Row, } from 'react-bootstrap';
import { Button, CruiseModal, DatesModal, MapsModal, Modal, SideModal, VideosModal, ViewsModal } from '../../../components/Frontend';
import { Link } from 'react-router-dom';
import highlightsData from "./highlightsData.json";

const CruiseDetails = () => {
  const prevRefSwiper = useRef(null);
  const nextRefSwiper = useRef(null);

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
          <SwiperSlide>
            <Image source="details-img-1.webp" alt="details-banner" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="details-img-2.webp" alt="details-banner" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="details-img-3.webp" alt="details-banner" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="details-img-1.webp" alt="details-banner" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="details-img-2.webp" alt="details-banner" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <Image source="details-img-3.webp" alt="details-banner" className="img-fluid" />
          </SwiperSlide>
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