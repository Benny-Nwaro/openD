import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import PriceLabel from "./PriceLabel";

function Item(props) {
  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();
  const [button, setButton] = useState();
  const [priceInput, setPriceInput] = useState();
  const [blur, setBlur] = useState();
  const [sellStatus, setSellStatus] = useState("");
  const [priceLabel, setPriceLabel] = useState();
  const [shouldDisplay, setDisplay] = useState(true);

  return (
    <div
      style={{ display: "block" }}
      className="disGrid-item"
    >
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded" style={{width:"500px"}}>
      <video  style={{width:"500px",  objectFit:"cover", controls:"disabled"}}  controls={shouldDisplay} width="100%">
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
          <Button text="Buy movie"/>
                  </div>
      </div>
    </div>
  );
}

export default Item;
