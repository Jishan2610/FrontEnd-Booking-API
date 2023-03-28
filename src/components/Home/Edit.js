import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';
function Edit() {
    const param=useParams();
    console.log(param)
    const userId=param.userId
    const bookingId=param.bookingId
    const baseURL = "http://localhost:5000/api/v1/bookings";
    const config = {
        headers:{
            authorization: userId,
        }
      };
      const [booking,setBooking]=useState({});
      const [postalCode, setPostalCode] = useState();
  const [droneShotID, setDroneShotID] = useState();
  const [duration, setDuration] = useState();
  useEffect(() => {
    axios.get(`${baseURL}/${bookingId}`,config).then((response) => {
        const result=response.data.booking
        setBooking(result)
        console.log(result.pin_code,result.drone_shot_id,result.duration);
        setPostalCode(result.pin_code)
        setDroneShotID(result.drone_shot_id)
        setDuration(result.duration)
    });
     
  }, []);
  const submitHandler=async (e)=>{
    e.preventDefault();
   
    try{
        const response = await axios
            .patch(`${baseURL}/${bookingId}`, {
                pin_code:postalCode,
                drone_shot_id:droneShotID,
                duration:duration
              },config)
            console.log(response);
    }catch{

    }
  }
  const navigate=useNavigate();
  return (
    <div className="container mt-2">
      <h2>Edit booking for the User</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Postal Code"
            required
            className="form-control"
            onChange={(event) => {
                setPostalCode(event.target.value)
            }}
            value={postalCode}
          />
        </div>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Drone Shot ID"
            required
            className="form-control"
            onChange={(event) => {
                setDroneShotID(event.target.value)
            }}
            value={droneShotID}
          />
        </div>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Duration in Hour"
           
            className="form-control"
            onChange={(event) => {
                setDuration(event.target.value)
            }}
            value={duration}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <button type="submit" className="btn btn-primary " style={{marginLeft:"10px"}} onClick={()=>navigate(-1)}>
          Go Back
        </button>
      </form>
    </div>
  )
}

export default Edit