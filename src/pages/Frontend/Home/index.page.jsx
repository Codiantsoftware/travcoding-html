import React, { useEffect, useRef, useState } from "react";
import { Image } from "../../../components/CommonElement";
import {  Col, Container, Row, Nav, Tab, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigation, } from 'swiper/modules';
import { FRONTEND_IMAGE_URL } from '../../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "../../../components/Frontend";
import frontendRouteMap from "../../../routes/Frontend/frontendRouteMap";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Modal, SearchFilter, VideosModal } from "../../../components/Frontend/UiElements";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
      setActiveIndex(index);
  };

    // State to manage the like status for individual cards
  const [likedCards, setLikedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  //Modal Video
    const [showVideosModal, setShowVideosModal] = useState(false);
    const handleVideosShow = () => setShowVideosModal(true);
    const handleVideosClose = () => setShowVideosModal(false);
  // Function to toggle like/unlike for specific cards
  const handleLikeClick = (cardKey) => {
    setLikedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };
  // swiper nav
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRefAdventures = useRef(null);
  const nextRefAdventures = useRef(null);
  return (
    <>
      <main className="homePage">
        {/*  Banner Section @S  */}
        <section className="bannerSec position-relative">
          <div className="bannerSec_inner position-relative z-1" style={{ backgroundImage: `url(${FRONTEND_IMAGE_URL}/banner.webp)` }}>
        
            <Container>
              <div className="bannerSec_cnt d-sm-flex align-items-end justify-content-between">
                <div className="bannerSec_cnt_inner">
                  {/* <Image source="banner-text.svg" className="img-fluid bannerSec_cnt_img" /> */}
                  <span className="bannerSec_cnt_subTitle text-white">Find Your Dream Cruise</span>
                  <h1 className="text-white bannerSec_cnt_title fw-bold">From Popular Lines
                    To Luxury Voyages</h1>
                  <p className="mb-0">Discover why cruising is the ultimate vacation and unlock insider tips and
                    tricks. Start
                    your journey now!</p>
                </div>
                  <Button variant="light" as={Link} to={frontendRouteMap.LISTING.path} extraClass="btn-lg" iconPosition="right" label="Explore More" showIcon={true} iconClass="arrow-right" /> 
              </div>              
               <SearchFilter />
            </Container>     
            <div className="bannerSec_overlay position-absolute w-100 h-100 start-0 top-0">
              <Image source="banner-overlay.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="banner-overlay" />
            </div>       
            <div className="bannerSec_curve">
              <Image source="curve.svg" className="img-fluid w-100" alt="banner-curve" />
            </div>
          </div>
        </section>
        {/*  Banner Section @E  */}

        {/*  Explore Section @S  */}
        <section className="exploreSec">
          <Container>
            <div className="commonHead">
              <Row>
                <Col md={6} lg={5}>
                  <span className="commonHead_subTitle text-uppercase mb-2">
                    Recommended
                  </span>
                  <h2 className="commonHead_title mb-0 fw-bold">
                    Explore Sales, Deals, and Special Promotions
                  </h2>
                </Col>
                <Col md={6} lg={7} className="text-end align-self-end d-flex justify-content-end mt-2 mt-md-0 align-items-center">
                  <Button variant="primary" type="button" extraClass="text-uppercase" label="View All" />
                  <div className="sliderBtn d-flex">
                    <button type="button" className="prev sm me-2" ref={prevRef}>
                      <em className="icon-chevron-left" />
                    </button>
                    <button ref={nextRef} variant="outline" type="button" className="next sm">
                      <em className="icon-chevron-right" />
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
            <Swiper
              spaceBetween={15}
              slidesPerView={4}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                820: {
                  slidesPerView: 3,
                },
                1420: {
                  slidesPerView: 4,
                },
              }}
              className="px-1"
            >
              <SwiperSlide>
                <div className="exploreSec_card">
                  <div className="exploreSec_card_img overflow-hidden position-relative">
                    <Image source="homepage/explore-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    <div role="button"
                      className={likedCards.card1 ? "active" : ""}
                      onClick={() => handleLikeClick("card1")}
                    >
                      <em
                        className={likedCards.card1 ? "icon-heart-fill" : "icon-heart"}
                      ></em>
                    </div>
                  </div>
                  <div className="exploreSec_card_cnt d-flex flex-column justify-content-between">
                    <div>
                      <div className="exploreSec_card_itinerary d-flex align-items-center justify-content-between mb-2 font-md">
                        <span>Carnival Conquest</span>
                        <Link to="#!">View Itinerary</Link>
                      </div>
                      <h3 className="mb-0"><Link to="#!" className="exploreSec_card_title font-bd">4-Day The Bahamas from Miami, FL</Link> </h3>
                    </div>
                    <div className="g-2 d-flex align-items-end justify-content-between flex-wrap">
                      <div className="exploreSec_card_price">
                        <span className="text-500 font-bd">$258</span>
                        / per person
                      </div>
                      <Link to="#!" className="exploreSec_card_date font-md text-uppercase">
                        Show 3 Dates
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="exploreSec_card">
                  <div className="exploreSec_card_img overflow-hidden position-relative">
                    <Image source="homepage/explore-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    <div role="button"
                      className={likedCards.card2 ? "active" : ""}
                      onClick={() => handleLikeClick("card2")}
                    >
                      <em
                        className={likedCards.card2 ? "icon-heart-fill" : "icon-heart"}
                      ></em>
                    </div>
                  </div>
                  <div className="exploreSec_card_cnt d-flex flex-column justify-content-between">
                    <div>
                      <div className="exploreSec_card_itinerary d-flex align-items-center justify-content-between mb-2 font-md">
                        <span>Carnival Conquest</span>
                        <Link to="#!">View Itinerary</Link>
                      </div>
                      <h3 className="mb-0"><Link to="#!" className="exploreSec_card_title font-bd">3-Night Bruges Weekend Getaway Cruise</Link> </h3>
                    </div>
                    <div className="g-2 d-flex align-items-end justify-content-between flex-wrap">
                      <div className="exploreSec_card_price">
                        <span className="text-500 font-bd">$289</span>
                        / per person
                      </div>
                      <Link to="#!" className="exploreSec_card_date font-md text-uppercase">
                        Show 3 Dates
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="exploreSec_card">
                  <div className="exploreSec_card_img overflow-hidden position-relative">
                    <Image source="homepage/explore-3.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    <div role="button"
                      className={likedCards.card3 ? "active" : ""}
                      onClick={() => handleLikeClick("card3")}
                    >
                      <em
                        className={likedCards.card3 ? "icon-heart-fill" : "icon-heart"}
                      ></em>
                    </div>
                  </div>
                  <div className="exploreSec_card_cnt d-flex flex-column justify-content-between">
                    <div>
                      <div className="exploreSec_card_itinerary d-flex align-items-center justify-content-between mb-2 font-md">
                        <span>Carnival Conquest</span>
                        <Link to="#!">View Itinerary</Link>
                      </div>
                      <h3 className="mb-0"><Link to="#!" className="exploreSec_card_title font-bd">3-Day The Bahamas from Miami, FL</Link> </h3>
                    </div>
                    <div className="g-2 d-flex align-items-end justify-content-between flex-wrap">
                      <div className="exploreSec_card_price">
                        <span className="text-500 font-bd">$365</span>
                        / per person
                      </div>
                      <Link to="#!" className="exploreSec_card_date font-md text-uppercase">
                        Show 3 Dates
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="exploreSec_card">
                  <div className="exploreSec_card_img overflow-hidden position-relative">
                    <Image source="homepage/explore-4.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    <div role="button"
                      className={likedCards.card4 ? "active" : ""}
                      onClick={() => handleLikeClick("card4")}
                    >
                      <em
                        className={likedCards.card4 ? "icon-heart-fill" : "icon-heart"}
                      ></em>
                    </div>
                  </div>
                  <div className="exploreSec_card_cnt d-flex flex-column justify-content-between">
                    <div>
                      <div className="exploreSec_card_itinerary d-flex align-items-center justify-content-between mb-2 font-md">
                        <span>Carnival Conquest</span>
                        <Link to="#!">View Itinerary</Link>
                      </div>
                      <h3 className="mb-0"><Link to="#!" className="exploreSec_card_title font-bd">2-Night Disney Magic at Sea Cruise from Sydney</Link> </h3>
                    </div>
                    <div className="g-2 d-flex align-items-end justify-content-between flex-wrap">
                      <div className="exploreSec_card_price">
                        <span className="text-500 font-bd">$412</span>
                        / per person
                      </div>
                      <Link to="#!" className="exploreSec_card_date font-md text-uppercase">
                        Show 3 Dates
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="exploreSec_card">
                  <div className="exploreSec_card_img overflow-hidden position-relative">
                    <Image source="homepage/explore-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    <div role="button"
                      className={likedCards.card5 ? "active" : ""}
                      onClick={() => handleLikeClick("card5")}
                    >
                      <em
                        className={likedCards.card5 ? "icon-heart-fill" : "icon-heart"}
                      ></em>
                    </div>
                  </div>
                  <div className="exploreSec_card_cnt d-flex flex-column justify-content-between">
                    <div>
                      <div className="exploreSec_card_itinerary d-flex align-items-center justify-content-between mb-2 font-md">
                        <span>Carnival Conquest</span>
                        <Link to="#!">View Itinerary</Link>
                      </div>
                      <h3 className="mb-0"><Link to="#!" className="exploreSec_card_title font-bd">4-Day The Bahamas from Miami, FL</Link> </h3>
                    </div>
                    <div className="g-2 d-flex align-items-end justify-content-between flex-wrap">
                      <div className="exploreSec_card_price">
                        <span className="text-500 font-bd">$412</span>
                        / per person
                      </div>
                      <Link to="#!" className="exploreSec_card_date font-md text-uppercase">
                        Show 3 Dates
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </section>
        {/*  Explore Section @E  */}

        {/*  Deals Section @E  */}
        <section className="dealsSec py-70">
          <Container>
            <div className="commonHead">
              <Row className="justify-content-between align-items-end">
                <Col md={5} lg={6} xxl={5}>
                  <span className="commonHead_subTitle text-uppercase mb-2">
                    Special DEALS
                  </span>
                  <h2 className="commonHead_title mb-0 fw-bold">
                    Fun from Coast to Coast
                  </h2>
                </Col>
                <Col md={7} lg={6} xxl={6} className="mt-2 mt-md-0">
                  <p className="commonHead_para ms-lg-5 mb-0">Don’t let these savings sail without you! Find onboard spending deals, limited-time sales, and more, turning your dream escape into a riveting reality.</p>
                </Col>
              </Row>
            </div>
            <Row className="g-3 g-xxl-4 justify-content-center">
              <Col sm={6} md={4} xl={3}>
                <div className="dealsSec_card">
                  <Image imageFor="frontend" source="homepage/deals-img-1.webp" className="img-fluid dealsSec_card_img" alt="deals-img" />
                  <div className="dealsSec_card_cnt text-center">
                    <h3 className="dealsSec_card_title">The Bahamas Sailings</h3>
                    <div className="d-flex align-items-center justify-content-center dealsSec_card_price">
                      <span>Starting From</span>
                      <p className="mb-0">$4588*</p>
                      <span>Per Person</span>
                    </div>
                    <Button variant="primary" as={Link} to="/" extraClass="ripple-effect text-uppercase" label="View All" />
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} xl={3}>
                <div className="dealsSec_card">
                  <Image imageFor="frontend" source="homepage/deals-img-2.webp" className="img-fluid dealsSec_card_img" alt="deals-img" />
                  <div className="dealsSec_card_cnt text-center">
                    <h3 className="dealsSec_card_title">The Mexico Sailings</h3>
                    <div className="d-flex align-items-center justify-content-center dealsSec_card_price">
                      <span>Starting From</span>
                      <p className="mb-0">$4588*</p>
                      <span>Per Person</span>
                    </div>
                    <Button variant="primary" as={Link} to="/" extraClass="ripple-effect text-uppercase" label="View All" />
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} xl={3}>
                <div className="dealsSec_card">
                  <Image imageFor="frontend" source="homepage/deals-img-3.webp" className="img-fluid dealsSec_card_img" alt="deals-img" />
                  <div className="dealsSec_card_cnt text-center">
                    <h3 className="dealsSec_card_title">The Europe Sailing</h3>
                    <div className="d-flex align-items-center justify-content-center dealsSec_card_price">
                      <span>Starting From</span>
                      <p className="mb-0">$4588*</p>
                      <span>Per Person</span>
                    </div>
                    <Button variant="primary" as={Link} to="/" extraClass="ripple-effect text-uppercase" label="View All" />
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} xl={3}>
                <div className="dealsSec_card">
                  <Image imageFor="frontend" source="homepage/deals-img-4.webp" className="img-fluid dealsSec_card_img" alt="deals-img" />
                  <div className="dealsSec_card_cnt text-center">
                    <h3 className="dealsSec_card_title">The Bahamas Sailings</h3>
                    <div className="d-flex align-items-center justify-content-center dealsSec_card_price">
                      <span>Starting From</span>
                      <p className="mb-0">$4588*</p>
                      <span>Per Person</span>
                    </div>
                    <Button variant="primary" as={Link} to="/" extraClass="ripple-effect text-uppercase" label="View All" />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="dealsSec_bottom d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-start align-items-sm-center"><em className="icon-mail" /><p className="mb-0 ms-1">Save your precious time and effort spent for finding a solution.</p></div><Link to="">Contact us now</Link>
            </div>
          </Container>
        </section>
        {/*  Deals Section @E  */}

        {/*  Innovate Section @S  */}
        <section className="innovateSec py-70">
          <div className="innovateSec_bg">
            <Image imageFor="frontend" source="innovate-img.webp" className="img-fluid" alt="innovate-img" />
          </div>
          <div className="innovateSec_top position-relative">
            <Container>
              <div className="commonHead text-center mx-auto">
                <h2 className="commonHead_title text-white fw-bold">We Strive To Innovate</h2>
                <p className="commonHead_para lg">Discover why cruising is the ultimate vacation and unlock insider tips and tricks. Start your journey now!</p>
              </div>
              <div className="innovateSec_top_support d-flex mx-auto">
                <div className="innovateSec_top_box text-center">
                  <em className="icon-onboard" />
                  <h3 className="font-bd">Get Onboard Spending</h3>
                  <p className="mb-0">Enjoy all the benefits of your cruise line - plus extra perks from us.</p>
                </div>
                <div className="innovateSec_top_box text-center">
                  <em className="icon-guarantee" />
                  <h3 className="font-bd">Best Price Guarantee</h3>
                  <p className="mb-0">We'll refund you 110% of the difference if you find a lower price elsewhere.</p>
                </div>
                <div className="innovateSec_top_box text-center">
                  <em className="icon-support" />
                  <h3 className="font-bd">Get 24/7 Support</h3>
                  <p className="mb-0">Talk to a Cruise Expert before or during your trip.</p>
                </div>
              </div>
            </Container>
          </div>
          <div className="innovateSec_bottom position-relative">
            <Container>
              <div className="commonHead text-center mx-auto">
                <h2 className="commonHead_title text-white fw-bold">Newest. Boldest. Best.</h2>
                <p className="commonHead_para lg">Explore endless bucket list adventures as we await the Star of the Seas℠. From the iconic Oasis Class to the game-changing Icon of Vacations℠, discover our best ships yet.</p>
              </div>
            </Container>
            <div className="innovateSec_bottom_slider position-relative">
              <Swiper
                spaceBetween={20}
                slidesPerView={6.1}
                modules={[Navigation]}
                centeredSlides={true} // Center the active slide
                loop={true}
                navigation={{
                  prevEl: prevRefAdventures.current,
                  nextEl: nextRefAdventures.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefAdventures.current;
                  swiper.params.navigation.nextEl = nextRefAdventures.current;
                }}
                breakpoints={{

                  1200: {
                    slidesPerView: 5.1,
                  },
                  1420: {
                    slidesPerView: 6.1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-1.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">CAPE LIBERTY</span>
                      <h3 className="font-bd">SYMPHONY OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-2.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">PORT CANAVERAL</span>
                      <h3 className="font-bd">STAR OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-3.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">PORT CANAVERAL</span>
                      <h3 className="font-bd">UTOPIA OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-4.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">MIAMI</span>
                      <h3 className="font-bd">ICON OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-5.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">PORT CANAVERAL</span>
                      <h3 className="font-bd">WONDER OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-6.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">FORT LAUDERDALE</span>
                      <h3 className="font-bd">ODYSSEY OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-7.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">CAPE LIBERTY</span>
                      <h3 className="font-bd">SYMPHONY OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="innovateSec_sliderCard">
                    <div className="innovateSec_sliderCard_img position-relative overflow-hidden">
                      <Image imageFor="frontend" source="homepage/adventures-img-1.webp" className="img-fluid" alt="adventures-img" />
                    </div>
                    <div className="innovateSec_sliderCard_cnt text-center">
                      <span className="font-bd">CAPE LIBERTY</span>
                      <h3 className="font-bd">SYMPHONY OF THE SEAS</h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="sliderBtn d-flex justify-content-between">
                <button ref={prevRefAdventures} type="button" className="prev md me-2">
                  <em className="icon-chevron-left" />
                </button>
                <button ref={nextRefAdventures} type="button" className="next md">
                  <em className="icon-chevron-right" />
                </button>
              </div>
            </div>
            <div className="innovateSec_bottom_btn text-center">
            <Button variant="primary" as={Link} to="" extraClass="btn-lg" label="Explore More" iconPosition="right" showIcon={true} iconClass="arrow-right" iconExtraClass="ms-3" />
            </div>
          </div>
        </section>
        {/*  Innovate Section @E  */}        

        {/* Travellers Section @S */}
        <section className="py-70 travellerSec">
          <Container>
            <div className="commonHead text-center">
              <h2 className="commonHead_title fw-bold">
                What Our Travellers Say
              </h2>
              <p className="commonHead_para lg mx-auto mb-0">Hear it from the ones who’ve been there and done that.</p>
            </div>
          </Container>
             <div className="overflow-hidden">
                <div className="d-flex align-items-center travellerSec_inner horizontalCarousel">
                  <div className={`travellerSec_card d-flex ${activeIndex === 1 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(1)}>
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className='travellerSec_card travellerSec_card-video d-flex'>
                    <div className="travellerSec_card_img">
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                        <div role="button" className="videoBox" onClick={handleVideosShow}>
                          <em className="icon-play" />
                        </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 3 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(3)}>
                      <Image source="homepage/traveller-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 4 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(4)}>
                      <Image source="homepage/traveller-3.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 5 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(5)}>
                      <Image source="homepage/traveller-4.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 6 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(6)}>
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className='travellerSec_card travellerSec_card-video d-flex'>
                    <div className="travellerSec_card_img">
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                        <div role="button" className="videoBox" onClick={handleVideosShow}>
                          <em className="icon-play" />
                        </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 8 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(8)}>
                      <Image source="homepage/traveller-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 9 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(9)}>
                      <Image source="homepage/traveller-3.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className='travellerSec_card travellerSec_card-video d-flex'>
                    <div className="travellerSec_card_img">
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                        <div role="button" className="videoBox" onClick={handleVideosShow}>
                          <em className="icon-play" />
                        </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 11 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(11)}>
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 12 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(12)}>
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 13 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(13)}>
                      <Image source="homepage/traveller-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 14 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(14)}>
                      <Image source="homepage/traveller-3.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 15 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(15)}>
                      <Image source="homepage/traveller-4.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className='travellerSec_card travellerSec_card-video d-flex'>
                    <div className="travellerSec_card_img">
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                        <div role="button" className="videoBox" onClick={handleVideosShow}>
                          <em className="icon-play" />
                        </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 17 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(17)}>
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 18 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(18)}>
                      <Image source="homepage/traveller-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 19 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(19)}>
                      <Image source="homepage/traveller-3.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                  <div className={`travellerSec_card d-flex ${activeIndex === 20 ? 'active' : ''}`}>
                    <div className="travellerSec_card_img" onClick={() => handleImageClick(20)}>
                      <Image source="homepage/traveller-4.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="travellerSec_card_cnt w-100 flex-grow-1">
                      <div className="travellerSec_card_space h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                          <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                        </div>
                        <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star fill"></em>
                          <em className="icon-star"></em>
                        </div>
                      </div>
                      <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="d-flex align-items-center travellerSec_inner horizontalReverse">
                    <div className={`travellerSec_card d-flex ${activeIndex === 21 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(21)}>
                        <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className='travellerSec_card travellerSec_card-video d-flex'>
                    <div className="travellerSec_card_img">
                      <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                        <div role="button" className="videoBox" onClick={handleVideosShow}>
                          <em className="icon-play" />
                        </div>
                    </div>
                  </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 23 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(23)}>
                        <Image source="homepage/traveller-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 24 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(24)}>
                        <Image source="homepage/traveller-3.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 25 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(25)}>
                        <Image source="homepage/traveller-4.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className='travellerSec_card travellerSec_card-video d-flex'>
                      <div className="travellerSec_card_img">
                        <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                          <div role="button" className="videoBox" onClick={handleVideosShow}>
                            <em className="icon-play" />
                          </div>
                          </div>
                      </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 27 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(27)}>
                        <Image source="homepage/traveller-6.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 28 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(28)}>
                        <Image source="homepage/traveller-7.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className='travellerSec_card travellerSec_card-video d-flex'>
                      <div className="travellerSec_card_img">
                        <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                          <div role="button" className="videoBox" onClick={handleVideosShow}>
                            <em className="icon-play" />
                          </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 30 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(30)}>
                        <Image source="homepage/traveller-9.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 31 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(31)}>
                        <Image source="homepage/traveller-8.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 32 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(32)}>
                        <Image source="homepage/traveller-9.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className='travellerSec_card travellerSec_card-video d-flex'>
                      <div className="travellerSec_card_img">
                        <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                          <div role="button" className="videoBox" onClick={handleVideosShow}>
                            <em className="icon-play" />
                          </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 34 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(34)}>
                        <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 35 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(35)}>
                        <Image source="homepage/traveller-2.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className='travellerSec_card travellerSec_card-video d-flex'>
                      <div className="travellerSec_card_img">
                        <Image source="homepage/traveller-1.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                          <div role="button" className="videoBox" onClick={handleVideosShow}>
                            <em className="icon-play" />
                          </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 37 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(37)}>
                        <Image source="homepage/traveller-4.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 38 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(38)}>
                        <Image source="homepage/traveller-5.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 39 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(39)}>
                        <Image source="homepage/traveller-6.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                    <div className={`travellerSec_card d-flex ${activeIndex === 40 ? 'active' : ''}`}>
                      <div className="travellerSec_card_img" onClick={() => handleImageClick(40)}>
                        <Image source="homepage/traveller-7.webp" className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <div className="travellerSec_card_cnt w-100 flex-grow-1">
                        <div className="travellerSec_card_space h-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="travellerSec_card_name font-bd text-truncate">Pooja Nair</h3>
                            <address className="travellerSec_card_loc d-block mb-0">Bangalore, India</address>
                          </div>
                          <div className="d-flex align-items-center justify-content-between travellerSec_card_rating">
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star fill"></em>
                            <em className="icon-star"></em>
                          </div>
                        </div>
                        <p className="travellerSec_card_txt mt-3 mb-0">Amazing! Can't even justify the experience aboard this city on the sea! You will find everything that you could possibly need. Good music plays round the clock.</p>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
        </section>
        {/* Travellers Section @E */}

        {/* Popular Section @S */}
        <section className="popularSec py-70">
          <Container>
            <div className="commonHead text-center mb-0">
              <Row className="justify-content-center">
                <Col lg={6}>
                  <h2 className="commonHead_title fw-bold">
                    Popular Destinations & Ports
                  </h2>
                  <p className="commonHead_para pb-1 lg">Discover the breathtaking beauty of International destinations and
                    Ports with Trav Coding Cruises.</p>
                </Col>
              </Row>
            </div>
            <Tab.Container defaultActiveKey="destination">
              <Nav as="ul" className="justify-content-center">
                <Nav.Item as="li">
                  <Nav.Link as="button" eventKey="destination">Destinations</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as="button" eventKey="popular">Popular Ports</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="destination">
                  <Row className="g-4">
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-1.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Caribbean Cruises</h3>
                          <p>Soak in the vitamin sea</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-2.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Asia Cruises</h3>
                          <p>Excitement lies east</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-3.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">European Cruises</h3>
                          <p>The ultimate euro adventure
                          </p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-4.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Singapore Cruises​</h3>
                          <p>Soak in the vitamin sea</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-5.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Thailand Cruises​</h3>
                          <p>Temples to modern towers</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-6.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Perfect Day at CocoCay​</h3>
                          <p>This is the island of all</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-7.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Mediterranean Cruises</h3>
                          <p>Sea the way: the best</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-8.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Bahamas Cruises</h3>
                          <p>Real-life water world</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-9.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Baltic Cruises​</h3>
                          <p>Baltic & scandinavian cruises</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-10.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Greece & Greek Isles</h3>
                          <p>Adventure on the aegean</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-11.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Alaska Cruises​</h3>
                          <p>Adventure on the wild side</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-12.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Spain Cruises</h3>
                          <p>Spain & The Canary Islands Cruises</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="popular">
                <Row className="g-4">
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-4.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Singapore Cruises​</h3>
                          <p>Soak in the vitamin sea</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-5.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Thailand Cruises​</h3>
                          <p>Temples to modern towers</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-6.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Perfect Day at CocoCay​</h3>
                          <p>This is the island of all</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-7.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Mediterranean Cruises</h3>
                          <p>Sea the way: the best</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-8.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Bahamas Cruises</h3>
                          <p>Real-life water world</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-9.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Baltic Cruises​</h3>
                          <p>Baltic & scandinavian cruises</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-10.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Greece & Greek Isles</h3>
                          <p>Adventure on the aegean</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-11.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Alaska Cruises​</h3>
                          <p>Adventure on the wild side</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-12.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Spain Cruises</h3>
                          <p>Spain & The Canary Islands Cruises</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>                    
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-1.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Caribbean Cruises</h3>
                          <p>Soak in the vitamin sea</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-2.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">Asia Cruises</h3>
                          <p>Excitement lies east</p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={3} md={4}>
                      <div className="popularSec_box d-flex align-items-center">
                        <div className="popularSec_box_img overflow-hidden flex-shrink-0">
                          <Image source="homepage/popular-3.webp" className="img-fluid w-100 h-100 object-fit-cover" alt="popular" />
                        </div>
                        <div>
                          <h3 className="popularSec_box_title font-bd mb-2">European Cruises</h3>
                          <p>The ultimate euro adventure
                          </p>
                          <Link to="#!" className="font-md popularSec_box_link link-600">Book Now<em className="icon-arrow-right ms-2" /></Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </section>
        {/* Popular Section @E */}
          <Modal show={showVideosModal} className="videoModal" handleClose={handleVideosClose} size="md">
            <VideosModal/>
          </Modal>
      </main>
    </>
  );
}

export default Home;
