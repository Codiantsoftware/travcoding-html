import React, { useEffect } from "react";

export function SideModal({ extraClass = "", children, showModal = false, onClose, closeBtn = true }) {
    useEffect(() => {
        if (showModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showModal]);
    return (
        <>
            <div className={`sideModal ${showModal ? "show" : ""} ${extraClass}`}>
                {closeBtn ? (<><div role="button" aria-label="close-btn" className="sideModal_close" onClick={onClose}>
                    <em className="icon-cross" />
                </div></>) : (<></>)}
                {children}
            </div>
            {showModal && <div className="overlay" onClick={onClose}></div>}
        </>
    );
}
