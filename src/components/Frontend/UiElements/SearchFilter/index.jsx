import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "../Button";
import { DateSelectPicker } from "../DateSelectPicker";
import { SelectPicker } from "../SelectPicker";
import { Link } from "react-router-dom";
import frontendRouteMap from "../../../../routes/Frontend/frontendRouteMap";

export function SearchFilter() {    
    
  //Select option
  const options = [
    { value: 'Newyork', label: 'New York State, USA' },
    { value: 'california', label: 'Los Angeles, California' },
    { value: 'texas', label: 'Texas, USA' }
  ]
    return (
        <>
            <div className="searchFilter bg-white position-relative">
                <h2 className="searchFilter_title font-bd">Find Your Dream Cruise</h2>
                <Form>
                    <div className="searchFilter_inner d-flex align-items-end">
                        <Form.Group className="mb-0 form-group" controlId="cruisingTo">
                            <Form.Label>Cruising To</Form.Label>
                            <SelectPicker iconShow={true} iconClass="map" placeholder="Select" iconPosition="left" options={options} defaultValue={options[2]} />
                        </Form.Group>
                        <Form.Group className="mb-0 form-group" controlId="departingFrom">
                            <Form.Label>Departing From</Form.Label>
                            <SelectPicker placeholder="Select" options={options} defaultValue={options[1]}/>
                        </Form.Group>
                        <Form.Group className="mb-0 form-group " controlId="leaving">
                            <Form.Label>Leaving</Form.Label>
                           <DateSelectPicker placeholderText="Select Date" />
                        </Form.Group>
                        <div className="searchFilter_btn">
                            <Button as={Link} to={frontendRouteMap.LISTING.path} variant="secondary" label="Search" iconPosition="left" showIcon={true} iconClass="search" iconExtraClass="me-xxl-3 me-2" extraClass="text-uppercase w-100"/>                            
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

