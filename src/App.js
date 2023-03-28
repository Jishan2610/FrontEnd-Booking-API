import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import Booking from './components/Home/Bookings'
import Input from './input'
import Edit from './components/Home/Edit'


import React from 'react'
import CreateUser from './components/Home/createUser'

function App() {

  return (
    <>
       <div id="addResult">
       <Input/>
       </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/:_id' element={<Booking/>}/>
          <Route path='/edit/:userId/:bookingId' element={<Edit/>}/>
          <Route path='/create/:userId/' element={<CreateUser/>}/>
        </Routes>
    </>
  )
}

export default App