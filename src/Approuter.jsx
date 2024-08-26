import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from './Home';




import Register from "./Register";
import Login from "./Login";
import RoomCard from "./RoomCard";
import AdminLogin from "./AdminLogin"
import { FaHome, FaUser, FaSignInAlt } from 'react-icons/fa'; 
import BookingForm from "./Booking";
import Booking from "./Booking";
import BookingDone from "./BookingDone";
import AdminDashboard from "./AdminDashboard";
import AddRooms from "./AddRooms";
import UserCards from "./UserCards";
import Payment from "./Payment";
import UserList from "./UserList";
import BookingView from "./BookingView";
import ContactUs from "./ContactUs";

import ViewRooms from "./ViewRooms";
import UpdateRoom from "./UpdateRoom";
import UserTable from "./UserTable";
import FeedbackForm from "./FeedbackForm";
function Approuter() {
  return (
    
    <div class="nav111">
      <Router>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0" />
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" ><Link class="text-light" to="#">Home</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" ><Link class="text-light" to="/addcustomer">Admin Login</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" ><Link class="text-light" to="/Register">User Login</Link></a>
                </li>
            
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      
      
      
      
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/Register"  element={<Register />} />
          <Route path="/Login"  element={<Login />} />
          <Route path="/RoomCard"  element={<RoomCard />} />
          <Route path="/Booking"  element={<Booking />} />
          <Route path="/BookingDone"  element={<BookingDone />} />
          <Route path="/AdminLogin"  element={<AdminLogin />} />
          <Route path="/AdminDashboard"  element={<AdminDashboard />} />
          <Route path="/manage-rooms" element={<AddRooms />} />
          <Route path="/userCards" element={<UserCards />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/bookingview" element={<BookingView />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ViewRooms" element={<ViewRooms />} />
          <Route path="/UpdateRoom" element={<UpdateRoom />} />
          <Route path="/UserTable" element={<UserTable />} />
          <Route path="/FeedbackForm" element={<FeedbackForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Approuter
