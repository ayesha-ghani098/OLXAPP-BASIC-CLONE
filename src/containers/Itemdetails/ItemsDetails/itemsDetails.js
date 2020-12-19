import React from "react";
import "./itemsDetails.css";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

function ItemsDetails({
  id,
  image,
  name,
  location,
  description,
  price,
  timestamp,
  userImg,
  userName,
},props) 
{
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="item-img">
            <img className="img-fluid" src={image} />
          </div>
          <div className="item-details">
            <h2>Details</h2>
            <p>{name}</p>
          </div>
          <div className="item-desc">
            <h2>Description</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="date-price">
            <div className="item-pprice">
              <h3>RS. {price}</h3>
              <div className="detail__icons">
                <IconButton>
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </div>
            </div>
            <div>
              <span className="detail__location">{location}</span>
              <span className="detail__timestamp">
                {new Date(timestamp?.toDate()).toDateString()}
              </span>
            </div>
          </div>
          <div className="item-sell-desc">
            <h2>Seller Description</h2>
            <div className="user">
              <img src={userImg} />
              <h5>{userName}</h5>
            </div>
            <button className="details-btn">Chat with Seller</button>
            <button className="details-btn">Make an Offer</button>
          </div>
          <div className="map">
          <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">related ads</div>
        <div className="col-sm-4">google ads</div>
      </div>
    </div>
  );
}

export default ItemsDetails;
