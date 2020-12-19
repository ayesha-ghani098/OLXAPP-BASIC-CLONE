import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Navbar from '../Home/Navbar/Navbar';
import db from '../../config/firebase';
import ItemsDetails from './ItemsDetails/itemsDetails';


function Itemdetails() {
    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        db.collection("sellitem").doc(id).onSnapshot(snapshot => (
            setItems(snapshot.data())
        ))
    }, [])

    return (
        <div className="Items__page">
            <Header />
            <Navbar />
            <ItemsDetails
                key={id}
                id={id}
                name={items.name}
                price={items.price}
                image={items.image}
                category={items.category}
                description={items.description}
                timestamp={items.timestamp}
                userImg={items.userimage}
                userName={items.username}
                location={items.location}
            />
            <Footer />
        </div>
    )
}

export default Itemdetails
