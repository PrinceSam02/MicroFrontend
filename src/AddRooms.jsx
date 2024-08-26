import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';
import axios from 'axios';
import Modal from './Modal'; // Adjust the import path as needed

const AddRooms = () => {
    const [formData, setFormData] = useState({
        roomNumber: '',
        roomName: '',
        roomType: '',
        roomPhoto: null,
        roomDescription: '',
        price: ''
    });

    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'roomPhoto') {
            setFormData({ ...formData, roomPhoto: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const { roomNumber, roomName, roomType, roomPhoto, roomDescription, price } = formData;

        if (!roomNumber) {
            newErrors.roomNumber = 'Room number is required';
        }
        if (!roomName) {
            newErrors.roomName = 'Room name is required';
        }
        if (!roomType) {
            newErrors.roomType = 'Room type is required';
        }
        // if (!roomPhoto) {
        //     newErrors.roomPhoto = 'Room photo is required';
        // }
        if (!roomDescription) {
            newErrors.roomDescription = 'Room description is required';
        }
        if (!price || isNaN(price) || price <= 0) {
            newErrors.price = 'Price must be a positive number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitError('');
            setSuccessMessage('');

            const formDataToSend = new FormData();
            formDataToSend.append('roomNumber', formData.roomNumber);
            formDataToSend.append('roomName', formData.roomName);
            formDataToSend.append('roomType', formData.roomType);
            formDataToSend.append('roomPhoto', formData.roomPhoto);
            formDataToSend.append('roomDescription', formData.roomDescription);
            formDataToSend.append('price', formData.price);

            try {
                await axios.post('http://localhost:3031/room/createRoom', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setSuccessMessage('Room added successfully!');
                setIsModalOpen(true);
                setTimeout(() => navigate('/ViewRooms'), 2000);
            } catch (error) {
                setSubmitError('There was an error submitting the form. Please try again.');
            }
        }
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-teal-700 text-white p-4 shadow-lg fixed w-full z-50 top-0 left-0">
                <div className="flex justify-between items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => navigate('/AdminDashboard')}>
                        <Link to="/">
                            <FaHotel className="text-white text-3xl mr-2" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels Admin</h1>
                    </div>
                    <button 
                        onClick={() => navigate(-1)} // Navigate back to the previous page
                        className="bg-white text-teal-700 px-4 py-2 rounded hover:bg-teal-600 hover:text-white transition duration-300"
                    >
                        Back
                    </button>
                </div>
            </nav>

            <div className="container mx-auto p-4 max-w-lg mt-24">
                <h2 className="text-3xl font-bold mb-4 text-teal-700">Add Room</h2>
                {successMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{successMessage}</div>}
                {submitError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{submitError}</div>}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="roomNumber" className="block text-gray-700 font-bold mb-2">Room Number</label>
                        <input
                            type="number"
                            id="roomNumber"
                            name="roomNumber"
                            value={formData.roomNumber}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.roomNumber ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                        {errors.roomNumber && <p className="text-red-500 text-sm">{errors.roomNumber}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="roomName" className="block text-gray-700 font-bold mb-2">Room Name</label>
                        <input
                            type="text"
                            id="roomName"
                            name="roomName"
                            value={formData.roomName}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.roomName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                        {errors.roomName && <p className="text-red-500 text-sm">{errors.roomName}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="roomType" className="block text-gray-700 font-bold mb-2">Room Type</label>
                        <select
                            id="roomType"
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.roomType ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        >
                            <option value="">Select Room Type</option>
                            <option value="AC">AC</option>
                            <option value="Non-AC">Non-AC</option>
                            <option value="Cottage">Cottage</option>
                        </select>
                        {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="roomPhoto" className="block text-gray-700 font-bold mb-2">Room Photo</label>
                        <input
                            type="file"
                            id="roomPhoto"
                            name="roomPhoto"
                            accept="image/*"
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.roomPhoto ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                        {errors.roomPhoto && <p className="text-red-500 text-sm">{errors.roomPhoto}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="roomDescription" className="block text-gray-700 font-bold mb-2">Room Description</label>
                        <textarea
                            id="roomDescription"
                            name="roomDescription"
                            value={formData.roomDescription}
                            onChange={handleChange}
                            rows="4"
                            className={`w-full p-2 border ${errors.roomDescription ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                        {errors.roomDescription && <p className="text-red-500 text-sm">{errors.roomDescription}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                message={successMessage}
            />
        </div>
    );
};

export default AddRooms;
