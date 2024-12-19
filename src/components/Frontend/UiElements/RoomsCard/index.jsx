import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button";
import { Navigation } from 'swiper/modules';
import { Image } from "../../../CommonElement";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../../routes/Frontend/frontendRouteMap";

export function RoomsCard({ room, handleVideosShow }) {
  return (
    <>
        <div className="roomsCard bg-white d-flex align-items-xxl-center">
          <div className="roomsCard_img position-relative">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              className="h-100"
            >
              {room.images.map((image, index) => (
                <SwiperSlide key={index}>
                  {image.hasVideo && (
                    <div
                      onClick={handleVideosShow}
                      role="button"
                      className="videoBox"
                    >
                      <em className="icon-play" />
                    </div>
                  )}
                  <Image
                    source={image.src}
                    className="w-100 h-100 object-fit-cover"
                    alt={`select-room-${room.id}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="roomsCard_right">
            <div className="roomsCardInfo d-xxl-flex justify-content-between">
              <div>
                <h3 className="roomsCardInfo_title">Deck(s): {room.deck}</h3>
                <p className="m-0">Max Guests: {room.maxGuests}</p>
              </div>
              <div className="roomsCardInfo_category text-end">
                <h5 className="roomsCardInfo_category_title">
                  Category: <span>{room.category}</span>
                </h5>
                <p className="mb-0 text-500">
                  <em className="icon-360-view me-2" /> Virtual Tour
                </p>
              </div>
            </div>
            <div className="roomsCard_body">
              <ul className="mb-0">
                {room.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="roomsCard_action d-flex flex-wrap align-items-center justify-content-between gap-2">
            {
                room.price && (
                    <div>
                        <h5 className="roomsCard_action_price">
                            {room.price}<sub>/Onwards</sub>
                        </h5>
                        <p className="mb-0">Includes taxes and fees</p>
                    </div>
                )
            }
            {
                room.price ? (
                    <div className="d-flex flex-wrap align-items-center">
                        <Link to="#" className="roomsCard_action_links">
                        View Details
                        </Link>
                        <Button as={Link} to={frontendRouteMap.DECKPLAN.path}
                        type="button"
                        extraClass="text-uppercase"
                        variant="primary"
                        label="Select"
                        />
                    </div>
                )
                :
                (
                    <div className="d-flex flex-wrap align-items-center">
                        <Button
                        type="button"
                        extraClass="text-uppercase"
                        variant="primary"
                        label="View Details"
                        />
                    </div>
                )
            }
            </div>
          </div>
        </div>
    </>
  );
}
