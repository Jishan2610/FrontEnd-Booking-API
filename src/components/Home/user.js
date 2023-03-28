import React from "react";
import { NavLink ,Link} from "react-router-dom";
import Booking from "./Bookings";
import { Route,Routes ,useNavigate} from "react-router-dom";
import './user.css';


function User({ _id, name, email, number }) {
    const navigate=useNavigate();
  return (
    <main className="usersClass">
    <span >
      <h2>Name:{name}</h2>
      <h3>userId:{_id}</h3>
      <div>Email:{email}</div>
      <div>Number:{number}</div>
      {/* <Booking _id={_id} key={_id}></Booking> */}
      <button onClick={()=>navigate(`${_id}`)} className="btn btn-info">Explore User</button>
      <button className="btn btn-success" style={{marginLeft:"1em"}}>
        <Link to={`/create/${_id}`} className='edit-btn' type='button' style={{textDecoration:"none",color:"White"}}>
                  Create Booking For User
        </Link>
        </button>
    </span>
    </main>
  );
}

export default User;
