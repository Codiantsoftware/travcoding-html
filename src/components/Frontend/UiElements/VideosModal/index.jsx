import React from "react";
import { FRONTEND_IMAGE_URL } from '../../../../config';
export function VideosModal() {
    return (
        <>
            <div className="videoModal_box">
                <video src={`${FRONTEND_IMAGE_URL}/ship-video.mp4`} controls />
            </div>
        </>
    );
}
