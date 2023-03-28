import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import User from "./user"
import './Home.css'

const baseURL = "http://localhost:5000/api/v1/user";
function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    try {
      axios.get(`${baseURL}`).then((response) => {
        setPost(response.data.users);
      });
    } catch (error) {
      console.log(error);
    }
  }, [post]);

  return (
    <div className="allUsers">
      {post.map((item) => 
        <User _id={item._id} name={item.name} email={item.email} number={item.number?item.number:"No Number is provided"} key={item._id}></User>
        // <span>
        //   <div>{item._id}</div>
        //   <div>{item.name}</div>
        //   <div>{item.email}</div>
        //   <div>{item.number?item.number:"No Number is provided"}</div>
        // </span>
      )}
    </div>
  );
}


export default Home;
