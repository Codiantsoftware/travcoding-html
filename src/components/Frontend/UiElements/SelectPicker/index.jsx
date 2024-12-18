import React from "react";
import Select from "react-select";

export function SelectPicker({ options = [], iconShow = false, iconClass = "", iconPosition = "", ...props }) {
  return (
    <div className={`select-group ${iconShow ? "fieldicon position-relative" : ""}`}>
      {iconShow && (
        <em className={`icon-${iconClass} fieldicon-${iconPosition}`} />
      )}
      <Select 
        options={options}        
        classNamePrefix="customSelect" 
        {...props} 
      />
    </div>
  );
}
