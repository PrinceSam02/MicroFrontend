
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { FaEye, FaHotel } from 'react-icons/fa'; // Import eye icon for viewing image
import { FaArrowLeft } from 'react-icons/fa'; // Import arrow left icon for back button

const ViewRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:3031/room/all');
                setRooms(response.data);
            } catch (err) {
                setError('Failed to fetch rooms');
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    const handleUpdate = (roomId) => {
        navigate(`/UpdateRoom/${roomId}`);
    };

    const handleDelete = async (roomId) => {
        try {
            await axios.delete(`http://localhost:3031/room/deleteRoom/${roomId}`);
            setRooms(rooms.filter(room => room.id !== roomId));
        } catch (err) {
            setError('Failed to delete room');
        }
    };

    const handleViewImage = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-teal-700 text-white p-4 shadow-lg fixed w-full z-50 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/AdminDashboard')}>
                        <Link to="/">
                            <FaHotel className="text-white text-3xl mr-2" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels Admin</h1>
                    </div>
                <button 
                    onClick={() => navigate('/AdminDashboard')}
                    className="flex items-center bg-white text-teal-700 px-4 py-2 rounded hover:bg-teal-600 hover:text-white transition duration-300"
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>
            </nav>

            {/* Room Cards */}
            <div className="container mx-auto py-24">
                <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">Rooms</h1>
                <div className="flex justify-end mb-4">
                    {/* Button to navigate to manage-rooms page */}
                    <button
                        onClick={() => navigate('/manage-rooms')}
                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
                    >
                        Add Room +
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map(room => (
                        <div key={room.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                            <div className="mb-4">
                                <img 
                                    src={`data:image/jpeg;base64,${room.roomPhoto}`}
                                    alt={room.roomName}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-teal-700 mb-2">{room.roomName}</h2>
                            <p className="text-gray-600 mb-2">{room.roomType}</p>
                            <p className="text-gray-600 mb-2">{room.roomDescription}</p>
                            <p className="text-teal-600 font-bold mb-4">Rs.{room.price}</p>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => handleUpdate(room.id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none transition duration-300"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(room.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none transition duration-300"
                                >
                                    Delete
                                </button>
                                <button 
                                    onClick={() => handleViewImage(`data:image/jpeg;base64,${room.roomPhoto}`)}
                                    className="text-teal-700 hover:text-teal-900"
                                >
                                    <FaEye />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for image preview */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
                        <div className="bg-white p-4 rounded-lg">
                            <img src={selectedImage} alt="Room" className="max-w-full h-auto" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewRooms;
