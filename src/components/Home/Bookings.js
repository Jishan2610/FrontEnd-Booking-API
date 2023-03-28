import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import './Bookings.css'
import { Link } from "react-router-dom";

const baseURL = "http://localhost:5000/api/v1/bookings";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const params=useParams();
//   console.log(params);
  const id=params._id;
  console.log(id)
  const config = {
    headers:{
        authorization: id,
    }
  };
  useEffect(() => {
    axios.get(`${baseURL}`,config).then((response) => {
        setBookings(response.data.bookings);
    });
  }, [bookings]);
  const deleteHandler=async (bookingId)=>{
    const responseObj=await axios.delete(`${baseURL}/${bookingId}`,config);
    console.log(responseObj);
  }
  
  return <div className="BookingContainer">{bookings.length===0?<div>No Bookings to show,please create one</div>:bookings.map((item)=>{
    return (<main  key={item._id} className="solo-booking">
        <h2>userId:{item.bookedBy}</h2>
        <h2>Booked At:{item.createdAt}</h2>
        <h2>Postal Code:{item.pin_code}</h2>
        <h3>Drone Shot Id:{item.drone_shot_id}</h3>
        <h3>Current Status:{item.status}</h3>
        <div>
        <button className="btn btn-success">
        <Link to={`/edit/${id}/${item._id}`} className='edit-btn' type='button' style={{textDecoration:"none",color:"White"}}>
                  Edit
        </Link>
        </button>
        <button style={{marginLeft:"10px"}} className="btn btn-danger" onClick={()=>deleteHandler(item._id)}>
            Delete
        </button>
        </div>
    </main>
    )
  })}</div>;
};

export default Booking;
