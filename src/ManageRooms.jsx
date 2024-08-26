import React, { useState } from 'react';

const RoomForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        roomNumber: '',
        roomType: '',
        roomPhotoUrl: '',
        roomDescription: '',
        price: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        const { roomNumber, roomType, roomPhotoUrl, roomDescription, price } = formData;

        // Room Number validation
        if (!roomNumber) {
            newErrors.roomNumber = 'Room number is required';
        }

        // Room Type validation
        if (!roomType) {
            newErrors.roomType = 'Room type is required';
        }

        // Room Photo URL validation
        if (!roomPhotoUrl) {
            newErrors.roomPhotoUrl = 'Room photo URL is required';
        }

        // Room Description validation
        if (!roomDescription) {
            newErrors.roomDescription = 'Room description is required';
        }

        // Price validation
        if (!price || isNaN(price) || price <= 0) {
            newErrors.price = 'Price must be a positive number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Form submitted successfully!');
            // You can handle form submission here
            // For example, send formData to your backend API
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Room Form</h2>
            {successMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{successMessage}</div>}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="roomNumber" className="block text-gray-700 font-bold mb-2">Room Number</label>
                    <input
                        type="text"
                        id="roomNumber"
                        name="roomNumber"
                        value={formData.roomNumber}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.roomNumber ? 'border-red-500' : 'border-gray-300'} rounded`}
                    />
                    {errors.roomNumber && <p className="text-red-500 text-sm">{errors.roomNumber}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="roomType" className="block text-gray-700 font-bold mb-2">Room Type</label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.roomType ? 'border-red-500' : 'border-gray-300'} rounded`}
                    >
                        <option value="">Select Room Type</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        {/* Add more options as needed */}
                    </select>
                    {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="roomPhotoUrl" className="block text-gray-700 font-bold mb-2">Room Photo URL</label>
                    <input
                        type="text"
                        id="roomPhotoUrl"
                        name="roomPhotoUrl"
                        value={formData.roomPhotoUrl}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.roomPhotoUrl ? 'border-red-500' : 'border-gray-300'} rounded`}
                    />
                    {errors.roomPhotoUrl && <p className="text-red-500 text-sm">{errors.roomPhotoUrl}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="roomDescription" className="block text-gray-700 font-bold mb-2">Room Description</label>
                    <textarea
                        id="roomDescription"
                        name="roomDescription"
                        value={formData.roomDescription}
                        onChange={handleChange}
                        rows="4"
                        className={`w-full p-2 border ${errors.roomDescription ? 'border-red-500' : 'border-gray-300'} rounded`}
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
                        className={`w-full p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded`}
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RoomForm;
