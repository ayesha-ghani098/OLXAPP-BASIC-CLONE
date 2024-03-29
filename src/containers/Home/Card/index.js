import React, { useEffect, useState } from "react";
import "./Cardbox.css";
import Cards from "./Cards/index";
import db, { storage } from "../../../config/firebase";

function CardBox() {
  // --------SellItem State---------//

  const [sellitem, setSellitem] = useState([]);

  // --------Get Data from Database--------//

  useEffect(() => {
    db.collection("sellitem")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setSellitem(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  //   const getphoto=(imagephoto)=>{
  // storage.ref("images").child(imagephoto.name).getDownloadURL().then(url=>{
  //   console.log("url",url);
  // })
  //   }

  return (
    <div className="container">
      <div className="card__box_heading">
        <h2>Fresh Recommendation</h2>
      </div>
      <div className="card__box">
        <div className="Cards">
          {sellitem.map((sellitems) => {
            // console.log('data =>', sellitem[id])
            return (
              <Cards
                key={sellitems.id}
                id={sellitems.id}
                title={sellitems.data.name}
                price={sellitems.data.price}
                category={sellitems.data.category}
                image={sellitems.data.image}
                description={sellitems.data.description}
                location={sellitems.data.location}
                timestamp={sellitems.data.timestamp}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardBox;
