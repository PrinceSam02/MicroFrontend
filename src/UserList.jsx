import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch users
        axios.get('http://localhost:8080/user/getallUserList')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));

        // Fetch bookings
        axios.get('http://localhost:8080/booking/all')
            .then(response => setBookings(response.data))
            .catch(error => console.error('Error fetching bookings:', error));
    }, []);

    const getUserBookings = (userId) => {
        return bookings.filter(booking => booking.userId === userId);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">User List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">User ID</th>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Phone Number</th>
                            <th className="py-2 px-4 border">Booking Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.userId}>
                                <td className="py-2 px-4 border">{user.userId}</td>
                                <td className="py-2 px-4 border">{user.userName}</td>
                                <td className="py-2 px-4 border">{user.userEmail}</td>
                                <td className="py-2 px-4 border">{user.userPhone}</td>
                                <td className="py-2 px-4 border">
                                    {getUserBookings(user.userId).map(booking => (
                                        <div key={booking.bookingId}>
                                            <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                                            <p><strong>Room Type:</strong> {booking.roomType}</p>
                                            <p><strong>Price:</strong> ${booking.price}</p>
                                            <p><strong>Status:</strong> {booking.bookingStatus}</p>
                                            <hr className="my-2" />
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
