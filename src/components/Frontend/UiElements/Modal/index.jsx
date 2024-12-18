import React from "react";
import { Modal as BsModal } from "react-bootstrap";

export function Modal({ show, handleClose, children, ...props }) {
    return (
        <BsModal show={show} onHide={handleClose} backdrop="static" centered {...props}>
            <div role="button" onClick={handleClose} className="modal-cross">
                <em className="icon-cross"/>
            </div>
            <BsModal.Body>
                {children}
            </BsModal.Body>
        </BsModal>
    );
}