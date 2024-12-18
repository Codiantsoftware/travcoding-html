import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

export function DateSelectPicker({placeholderText=""}) {    
  // Datepicker
  const [isFocused, setIsFocused] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const formatDateRange = (start, end) => {
    if (start && end) {
      return `${format(start, "MMM d, yyyy")} - ${format(end, "MMM d, yyyy")}`;
    }
    return "";
  };

  return (
    <>
      <div className="fieldicon position-relative">
        <em className={`icon-calender fieldicon-right ${isFocused ? "active" : ""}`}></em>
        <DatePicker 
          placeholderText={placeholderText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          selected={startDate}
          onChange={(update) => setDateRange(update)}
          onKeyDown={(e) => { e.preventDefault(); }}
          dateFormat="MMM d, yyyy"
          customInput={<input className="form-control fieldicon-input-right" value={formatDateRange(startDate, endDate)} readOnly />}
        />
      </div>     
    </>
  );
}
