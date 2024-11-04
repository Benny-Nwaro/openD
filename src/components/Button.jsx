import React from "react";

function Button(props) {
  return (
    <div style={{marginTop:"0px"}} className="Chip-root makeStyles-chipBlue-108 Chip-clickable">
      <span onClick={props.handleClick} className="form-Chip-label">
        {props.text}
      </span>
    </div>
  );
}

export default Button;
