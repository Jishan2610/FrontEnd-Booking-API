import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Input() {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const baseURL="http://localhost:5000/api/v1/user/register"
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
   
    
    // console.log(post.name,post.email)
    // if(userNumber)post.number=userNumber;
    try {
      let response = await axios.post(baseURL,{
        name:userName,
        email:userEmail
      })
    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }
    console.log(response.data.user);

    //   let result = await response.json();
      var collection = document.getElementById("addResult");
      var para = document.createElement("p");
      para.innerHTML='New User is successfully created.'
      collection.appendChild(para);
      //console.log('result is: ', JSON.stringify(result, null, 4));

      //setData(result);
      setUserName('');
      setUserEmail('');
      setUserNumber('');
    } catch (err) {
      setErr(err.message);
      console.log(err)
    } finally {
      setIsLoading(false);
      
    }
  };
  return (
    <div className="container mt-2">
      <h2>CREATE NEW USER</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Name"
            required
            className="form-control"
            onChange={(event) => {
                setUserName(event.target.value)
            }}
            value={userName}
          />
        </div>
        <div className="mb-2 mt-3">
          <input
            type="text"
            placeholder="Email"
            required
            className="form-control"
            onChange={(event) => {
                setUserEmail(event.target.value)
            }}
            value={userEmail}
          />
        </div>
        <div className="mb-2 mt-3">
          <input
            type="number"
            placeholder="Mobile Number"
            pattern="[0-9]*"
            className="form-control"
            onChange={(event) => {
                setUserNumber(event.target.value)
            }}
            value={userNumber}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Create
        </button>
      </form>
    </div>
  )
}
