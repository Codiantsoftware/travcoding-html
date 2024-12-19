import React from "react";
import { FRONTEND_IMAGE_URL } from '../../../../config';
export function VideosModal() {
    return (
        <>
            <div className="videoModal_box">                
                <video controls poster={`${FRONTEND_IMAGE_URL}/ship-video.webp`}>
                    <source src={`${FRONTEND_IMAGE_URL}/ship-video.mp4`} type="video/mp4" />
                    <source src={`${FRONTEND_IMAGE_URL}/ship-video.ogg`} type="video/ogg" />                
                </video>
            </div>
        </>
    );
}
