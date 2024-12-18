import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Image } from "../../../CommonElement";

export function MapsModal() {
    return (
        <>
            <div className="mapModal_head">
                <span className="mapModal_head_sub">3 NIGHTS</span>
                <h3 className="mapModal_head_title">Caribbean and Antilles, 3 Nights</h3>
                <div className="mapModal_head_list">
                    <em className="icon-ship" /><span>MSC Seashore</span><span>Bahamas</span>
                </div>
            </div>
            <div className="mapModal_map">
                <Image source="map-img.webp" className="img-fluid" alt="card-image" />
            </div>
            <div className="mapModal_slider">
                <Swiper modules={[Navigation]} slidesPerView={4} spaceBetween={20} loop={true} navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="mapModal_slider_box">
                            <h4 className="mapModal_slider_box_title">Day 1</h4>
                            <span className="mapModal_slider_box_date">Thu Dec 19, 2024</span>
                            <h5 className="mapModal_slider_box_port">Port Canaveral (Orlando) Florida</h5>
                            <span className="mapModal_slider_box_time">Depart 05:00 PM</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mapModal_slider_box">
                            <h4 className="mapModal_slider_box_title">Day 2</h4>
                            <span className="mapModal_slider_box_date">Fri Dec 20, 2024</span>
                            <h5 className="mapModal_slider_box_port">Nassau Bahamas</h5>
                            <span className="mapModal_slider_box_time">10:00 AM To 07:00 PM</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mapModal_slider_box">
                            <h4 className="mapModal_slider_box_title">Day 3</h4>
                            <span className="mapModal_slider_box_date">Sat Dec 21, 2024 </span>
                            <h5 className="mapModal_slider_box_port">Ocean Cay Msc Marine Reserve Bahamas</h5>
                            <span className="mapModal_slider_box_time">07:00 AM To 06:00 PM</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mapModal_slider_box">
                            <h4 className="mapModal_slider_box_title">Day 4</h4>
                            <span className="mapModal_slider_box_date">Sun Dec 22, 2024</span>
                            <h5 className="mapModal_slider_box_port">Port Canaveral (Orlando) Florida</h5>
                            <span className="mapModal_slider_box_time">Arrive 07:00 AM</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mapModal_slider_box">
                            <h4 className="mapModal_slider_box_title">Day 5</h4>
                            <span className="mapModal_slider_box_date">Sun Dec 23, 2024</span>
                            <h5 className="mapModal_slider_box_port">Port Canaveral (Orlando) Florida</h5>
                            <span className="mapModal_slider_box_time">Arrive 07:00 AM</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="mapModal_slider_arrow">
                    <div role="button" className="swiper-prev">
                        <em className="icon-chevron-left" />
                    </div>
                    <div role="button" className="swiper-next">
                        <em className="icon-chevron-right" />
                    </div>
                </div>
            </div>
        </>
    );
}
