import React, {useState} from "react";
import { Form, Tooltip, OverlayTrigger, Row, Col  } from "react-bootstrap";
import { CheckRadio } from "../CheckRadio";
import { Button } from "../Button";
import { SelectPicker } from "../SelectPicker";
import { Input } from "../Input";

export function DatesModal({toggleBack}) {
  const countryOptions = [
    { value: 'US', label: 'US - United States X' },
  ]
  const stateOptions = [
    { value: 'Alaska', label: 'Alaska' },
  ]
  //Increase
  const [counts, setCounts] = useState({
    rooms: 1,
    adultsRoom1: 2,
    adultsRoom2: 0,
  });
  const handleIncrease = (key) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [key]: prevCounts[key] + 1,
    }));
  };
  const handleDecrease = (key) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [key]: prevCounts[key] > 0 ? prevCounts[key] - 1 : 0,
    }));
  };
  const handleInputChange = (key, value) => {
    const parsedValue = parseInt(value, 10);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [key]: !isNaN(parsedValue) && parsedValue >= 0 ? parsedValue : 0,
    }));
  };
  return (
    <>
      <div className="sideModal_head mb-30">
        <h2 className="sideModal_head_title pe-0 d-flex align-items-center"><div role="button" onClick={toggleBack} className="sideModal_head_back"><em className="icon-arrow-left" /></div> Guest Information</h2>
      </div>
      <Form className="sideModal_form">
        <div className="sideModal_form_top d-flex h-100 flex-column">
          <Form.Group className="form-group">
            <h3 className="sideModal_form_title font-md">How many rooms do you need?</h3>
            <p className="sideModal_form_para">Most rooms sleep up to 2 guests</p>
            <div className="sideModal_counts">
              <div className="sideModal_counts_items">
                <div className="sideModal_counts_box">
                  <div role="button" onClick={() => handleDecrease("rooms")} className="sideModal_counts_left"><em className="icon-minus" /></div>
                  <div className="sideModal_counts_center"><input type="text" min={0} value={counts.rooms} onChange={(e) => handleInputChange("rooms", e.target.value)} /></div>
                  <div role="button" onClick={() => handleIncrease("rooms")} className="sideModal_counts_right"><em className="icon-plus" /></div>
                </div>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="form-group">
            <h3 className="sideModal_form_title font-md">How many guests in your room?</h3>
            <p className="sideModal_form_para">Most rooms sleep up to 4 guests</p>
            <div className="sideModal_counts">
              <div className="sideModal_counts_items">
                <label className="sideModal_counts_label">Adults</label>
                <div className="sideModal_counts_box">
                  <div role="button" onClick={() => handleDecrease("adultsRoom1")} className="sideModal_counts_left"><em className="icon-minus" /></div>
                  <div className="sideModal_counts_center"><input type="text" min={0} value={counts.adultsRoom1} onChange={(e) => handleInputChange("adultsRoom1", e.target.value)} /></div>
                  <div role="button" onClick={() => handleIncrease("adultsRoom1")} className="sideModal_counts_right"><em className="icon-plus" /></div>
                </div>
              </div>
              <div className="sideModal_counts_items">
                <label className="sideModal_counts_label">Children <span>(Ages 0-12)</span></label>
                <div className="sideModal_counts_box">
                  <div role="button" onClick={() => handleDecrease("adultsRoom2")} className="sideModal_counts_left"><em className="icon-minus" /></div>
                  <div className="sideModal_counts_center"><input type="text" min={0} value={counts.adultsRoom2} onChange={(e) => handleInputChange("adultsRoom2", e.target.value)} /></div>
                  <div role="button" onClick={() => handleIncrease("adultsRoom2")} className="sideModal_counts_right"><em className="icon-plus" /></div>
                </div>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="form-group">
            <h3 className="sideModal_form_title font-md d-flex align-items-center mb-3">Guest's Age <span className="d-flex align-items-center">at time of sailling <OverlayTrigger placement="top" overlay={<Tooltip>More Info</Tooltip>}><em className="icon-info" /></OverlayTrigger></span></h3>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group className="mb-0 form-group">
                  <Form.Label>Age Guest 1 <span className="text-500">*</span>  </Form.Label>
                  <Input placeholder="Enter" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-0 form-group">
                  <Form.Label>Age Guest 2 <span className="text-500">*</span>  </Form.Label>
                  <Input placeholder="Enter" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-0 form-group">
                  <Form.Label>Country <span className="text-500">*</span>  </Form.Label>
                  <SelectPicker options={countryOptions} placeholder="Select" classNamePrefix="customSelect" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-0 form-group">
                  <Form.Label>State <span className="text-500">*</span>  </Form.Label>
                  <SelectPicker options={stateOptions} placeholder="Select" classNamePrefix="customSelect" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-0 form-group">
                  <CheckRadio type="checkbox" label="I need an accessible room" id="11" />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        </div>
        <div className="sideModal_form_bottom text-end">
          <Button variant="primary" extraClass="text-uppercase" label="CONTINUE" />
        </div>
      </Form>
    </>
  );
}
