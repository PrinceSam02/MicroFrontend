
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateRoom = () => {
    const { id } = useParams(); // Retrieve the room ID from the URL
    const navigate = useNavigate();
    const [roomData, setRoomData] = useState({
        roomNumber: '',
        roomName: '',
        roomType: '',
        roomDescription: '',
        price: '',
        roomPhoto: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const response = await axios.get(`http://localhost:3031/room/GetRoomId/${id}`);
                setRoomData(response.data);
            } catch (err) {
                setError('Failed to fetch room details');
            } finally {
                setLoading(false);
            }
        };

        fetchRoomData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setRoomData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));
        } else {
            setRoomData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('roomNumber', roomData.roomNumber);
        formData.append('roomName', roomData.roomName);
        formData.append('roomType', roomData.roomType);
        formData.append('roomDescription', roomData.roomDescription);
        formData.append('price', roomData.price);
        if (roomData.roomPhoto) {
            formData.append('roomPhoto', roomData.roomPhoto);
        }

        try {
            await axios.put(`http://localhost:3031/room/doRoomDetailsUpdate`, {
                id: roomData.id,
                roomNumber: roomData.roomNumber,
                roomName: roomData.roomName,
                roomType: roomData.roomType,
                roomDescription: roomData.roomDescription,
                price: roomData.price,
                roomPhoto: roomData.roomPhoto ? roomData.roomPhoto : roomData.existingPhoto,
            });
            alert('Room updated successfully!');
            navigate('/ViewRooms'); // Redirect to the ViewRooms page
        } catch (err) {
            setError('Failed to update room details');
        }
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Update Room</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Room Number</label>
                    <input
                        type="text"
                        name="roomNumber"
                        value={roomData.roomNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Room Name</label>
                    <input
                        type="text"
                        name="roomName"
                        value={roomData.roomName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Room Type</label>
                    <input
                        type="text"
                        name="roomType"
                        value={roomData.roomType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        name="roomDescription"
                        value={roomData.roomDescription}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={roomData.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Room Photo</label>
                    <input
                        type="file"
                        name="roomPhoto"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update Room
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateRoom;
