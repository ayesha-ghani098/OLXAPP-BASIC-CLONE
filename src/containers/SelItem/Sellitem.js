import React, { useState } from "react";
import "./Sellitem.css";
import Logo from "../../assets/olx.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import db from "../../config/firebase";
import {storage} from '../../config/firebase';
import firebase from "firebase";
import Login from "../Login/Login";

function Sell() {
  const user_data = useSelector((state) => state.user);
  const { user } = user_data;
  const [modalShow, setModalShow] = useState(true);
  let history = useHistory();

  const [itemCategory, setitemCategory] = useState("");
  const [itemName, setitemName] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [address, setaddress] = useState("");
  const [itemDescription, setitemDescription] = useState("");
const [image, setimage] = useState("");

  const handleSubmit=(e)=>{
    //   cancel default events
      e.preventDefault();

      db.collection("sellitem").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          category: itemCategory,
          name: itemName,
          price: itemPrice,
          image: image.name,
          description: itemDescription,
          location: address,
          username: user.displayName,
          userimage: user.photoURL 
      })

      // const uploadphoto = storage.ref(`images/${image.name}`).put(image);
      // uploadphoto.on(
      //   "state_changed",
      //   snapshot => {},
      //   error => {
      //     console.log(error)
      //   },
      // )
     

      setitemName("");
      setaddress("");
      setitemDescription("");
      setitemPrice("");
      setitemCategory("");
      setimage("");

      history.push("/");

      console.log("image",image);

  };


  

  // const handleimageitem = (e)=>{
  //   if(e.target.files[0]){
  //     setimage(e.target.files[0]);
  //   }
  // }
  



  return (
    <div className="container">
      {!user ? (
        <Login show={modalShow} onHide={() => setModalShow(false)} />
      ) : (
        <>
          <div className="Sellitem">
            <div className="sell-page-logo">
              <img src={Logo} />
            </div>
            <div className="Sellitem-heading">
              <h1>Post Your AD</h1>
            </div>
            <div className="Sellitem-form">
              <form>
                <div className="select-category">
                  <label>Select Category</label>
                </div>
                <div className="select-category-options">
                  <select
                    id="category"
                    value={itemCategory}
                    onChange={(e) => setitemCategory(e.target.value)}
                  >
                    <option>Select Item Category</option>
                    <option>Houses</option>
                    <option>Cars</option>
                    <option>Mobile Phones</option>
                    <option>Motorcycles</option>
                    <option>TV-Video-Audio</option>
                    <option>Tablets</option>
                    <option>Land & Plots</option>
                  </select>
                </div>
                <div className="item-name">
                  <label>Item Name</label>
                </div>
                <div className="item-name-input">
                  <input 
                  placeholder="Enter Name"
                  value={itemName}
                  onChange={(e)=> setitemName(e.target.value)}
                  />
                </div>
                <div className="item-price">
                  <label>Item Price</label>
                </div>
                <div className="item-price-input">
                  <input
                   placeholder="Enter Price"
                   value={itemPrice}
                   onChange={(e)=> setitemPrice(e.target.value)}
                    />
                </div>
                <div className="item-image">
                  <label>Item Image</label>
                </div>
                <div className="item-image-input">
                  <input
                  // type="file"
                   placeholder="Upload Image"
                   value={image}
                  //  onChange={handleimageitem}
                  onChange={(e)=>setimage(e.target.value)}
                  /> 
                </div>
                <div className="item-location">
                  <label>Location</label>
                </div>
                <div className="item-location-input">
                  <input
                     placeholder="Where located?"
                     value={address}
                     onChange={(e)=> setaddress(e.target.value)}
                  />
                </div>
                <div className="item-description">
                  <label>Description</label>
                </div>
                <div className="item-description-text">
                  <textarea
                     placeholder="Write details of item"
                     value={itemDescription}
                     onChange={(e)=> setitemDescription(e.target.value)} />
                </div>
                <div className="ad-submit-button">
                    <Link to="/" id="submitt"> Cancel</Link>
                    <button onClick={handleSubmit} id="submitt">Post Ad</button>
                </div>
              </form>
           
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sell;
