import React from "react";
import { Form as BsForm } from "react-bootstrap";

export function CheckRadio({ label = {label}, extraClass = "", ...props}) {
    return (
        <BsForm.Check className={` ${extraClass}`} label={label} {...props}/>
    );
}