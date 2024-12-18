import React from "react";
import { FormControl } from "react-bootstrap";

export function Input ({...props}) {
    return (
        <>
            <FormControl {...props}/>
        </>
    );
}

