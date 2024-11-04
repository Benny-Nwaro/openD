import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

function Item(props) {


  return (
    <div
      style={{ display: "block" }}
      className="disGrid-item"
    >
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded" style={{width:"500px"}}>
      <video  style={{width:"500px",  objectFit:"cover", controls:"disabled"}}  controls={props.control} width="100%">
      <source src={props.url} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>   
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {props.name}
          </h2>
          <span className="purple-text">category: {props.category}</span>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            size: {props.size}
          </p>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            price: {props.price}
          </p>
          <Button text={props.text}/>
                  </div>
      </div>
    </div>
  );
}

export default Item;
