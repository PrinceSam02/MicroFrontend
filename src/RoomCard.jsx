


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const RoomCard = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [roomType, setRoomType] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:3031/room/all');
                setRooms(response.data);
                setFilteredRooms(response.data); // Initialize filteredRooms with fetched data
                console.log("response",response.data);
            } catch (err) {
                setError('Failed to fetch rooms');
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    useEffect(() => {
        let updatedRooms = rooms;

        // Filter by search term
        if (searchTerm) {
            updatedRooms = updatedRooms.filter(room =>
                room.roomName && room.roomName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by room type
        if (roomType) {
            updatedRooms = updatedRooms.filter(room =>
                room.roomType === roomType
            );
        }

        // Sort rooms
        updatedRooms = updatedRooms.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setFilteredRooms(updatedRooms);
    }, [searchTerm, roomType, sortOrder, rooms]);

    const handleBookNow = (room) => {
        console.log("Room Data in RoomCard:", room);  // Ensure room data is correct
        navigate('/Booking', { state: { room } });
        sessionStorage.setItem("roomName",room.roomName);
        sessionStorage.setItem("roomType",room.roomType);
    };
 
    

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

    return (
        <div className="bg-gray-100">
            {/* Navbar */}
            <nav className="bg-teal-600 py-4 px-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">
                        TAJ Hotel
                    </div>
                    
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search by room name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white border-none rounded-lg px-4 py-2 mr-4 focus:outline-none"
                        />
                        <select
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="bg-white border-none rounded-lg px-4 py-2 mr-4 focus:outline-none"
                        >
                            <option value="">All Room Types</option>
                            <option value="AC">AC</option>
                            <option value="NON AC">NON-AC</option>
                            <option value="Cottage">Cottage</option>
                        </select>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="bg-white border-none rounded-lg px-4 py-2 focus:outline-none"
                        >
                            <option value="desc">Price: Low to High</option>
                            <option value="asc">Price: High to Low</option>
                        </select>
                    </div>
                    <button 
                        onClick={() => navigate('/')} 
                        className="text-white font-bold text-lg bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    >
                        Back to Home
                    </button>
                </div>
            </nav>

            {/* Room Cards */}
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredRooms.map((room, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                            <img src={`data:image/jpeg;base64,${room.roomPhoto}`} alt={room.roomName} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                {/* <h2 className="text-xl font-semibold mb-2">Name:{room.roomName}</h2> */}
                                <h3 className="text-xl font-semibold mb-2">{room.roomName} ({room.roomType})</h3>
                                <p className="text-gray-600 mb-2">{room.roomDescription}</p>
                                <p className="text-black font-bold mb-4">Price: Rs.{room.price} per day</p>
                                <button onClick={() => handleBookNow(room)}  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors block text-center">Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomCard;