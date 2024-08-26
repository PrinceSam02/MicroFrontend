import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png'; // Make sure you have a logo.png in your project

const Booking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const today = new Date().toISOString().split('T')[0];

    // Get the room data from RoomCard and user ID from session storage
    const roomData = location.state?.room;
    const userId = sessionStorage.getItem('id');
  

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userAge: '',
        address: '',
        phoneNumber: '',
        email: '',
        numAdults: '',
        numChildren: '',
        totalGuests: '',
        roomType: roomData?.roomType || '',
        totalDays: '',
        price: roomData?.price || '',
        proofCard: null,
        bookingStatus: 'Pending',
        checkInDate: '',
        checkOutDate: '',
    });

    const [error, setError] = useState({
        age: '',
        phoneNumber: '',
        email: '',
        numAdults: '',
        numChildren: '',
    });

    useEffect(() => {
        const numAdults = parseInt(formData.numAdults || '0');
        const numChildren = parseInt(formData.numChildren || '0');
        const totalGuests = numAdults + numChildren;

        const checkInDate = new Date(formData.checkInDate);
        const checkOutDate = new Date(formData.checkOutDate);

        const totalDays = checkInDate && checkOutDate && checkInDate < checkOutDate
            ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
            : '';

        const price = totalDays && roomData?.price ? totalDays * parseFloat(roomData.price) : '';

        setFormData((prevData) => ({
            ...prevData,
            totalGuests,
            totalDays,
            price,
        }));
    }, [formData.numAdults, formData.numChildren, formData.checkInDate, formData.checkOutDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'userAge') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));

            if (value && value < 21) {
                setError((prevError) => ({
                    ...prevError,
                    age: 'Age must be at least 21',
                }));
            } else {
                setError((prevError) => ({
                    ...prevError,
                    age: '',
                }));
            }
            return;
        }

        if (name === 'phoneNumber') {
            if (value.length <= 10) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
            }
            if (value.length === 10 && isNaN(value)) {
                setError((prevError) => ({
                    ...prevError,
                    phoneNumber: 'Phone number must be exactly 10 digits',
                }));
            } else {
                setError((prevError) => ({
                    ...prevError,
                    phoneNumber: '',
                }));
            }
            return;
        }

        if (name === 'email') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));

            if (value && !value.endsWith('@gmail.com')) {
                setError((prevError) => ({
                    ...prevError,
                    email: 'Email must end with @gmail.com',
                }));
            } else {
                setError((prevError) => ({
                    ...prevError,
                    email: '',
                }));
            }
            return;
        }

        if (name === 'numAdults' || name === 'numChildren') {
            const maxAdults = 4;
            const maxChildren = 2;
            const valueInt = parseInt(value);

            if (name === 'numAdults' && valueInt <= maxAdults) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setError((prevError) => ({
                    ...prevError,
                    numAdults: '',
                }));
            } else if (name === 'numAdults' && valueInt > maxAdults) {
                setError((prevError) => ({
                    ...prevError,
                    numAdults: `Maximum of ${maxAdults} adults allowed`,
                }));
            }

            if (name === 'numChildren' && valueInt <= maxChildren) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setError((prevError) => ({
                    ...prevError,
                    numChildren: '',
                }));
            } else if (name === 'numChildren' && valueInt > maxChildren) {
                setError((prevError) => ({
                    ...prevError,
                    numChildren: `Maximum of ${maxChildren} children allowed`,
                }));
            }
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            proofCard: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (error.age || error.phoneNumber || error.email || error.numAdults || error.numChildren) {
            alert('Please fix the errors before submitting.');
            return;
        }

        sessionStorage.setItem("roomPrice",formData.price);
        
        const data = new FormData();
        data.append('userId', userId);
        data.append('firstName', formData.firstName);        data.append('lastName', formData.lastName);
        data.append('userAge', formData.userAge);
        data.append('address', formData.address);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('email', formData.email);
        data.append('numAdults', formData.numAdults);
        data.append('numChildren', formData.numChildren);
        data.append('totalGuests', formData.totalGuests);
        data.append('totalDays', formData.totalDays);
        data.append('roomType', formData.roomType);
        data.append('price', formData.price);
        data.append('proofCard', formData.proofCard);
        data.append('bookingStatus', 'Pending');
        data.append('paymentStatus', 'Completed');

        try {
            const response = await axios.post('http://localhost:3031/booking/create', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                // Set payment status to "Completed"
                const updatedFormData = {
                    ...formData,
                    paymentStatus: 'Completed'
                };


                navigate('/payment', { state: { formData: updatedFormData, userId } });
            } else {
                alert('Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('There was an error creating the booking!', error);
            alert('An error occurred while processing your booking. Please try again.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="bg-teal-500 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <img
                                    src={logo}
                                    alt="Taj Hotel Logo"
                                    className="h-8 w-auto cursor-pointer"
                                    onClick={() => navigate('/')}
                                />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                                <span className="text-2xl font-extrabold text-white tracking-wide self-center">
                                    Taj Hotel
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => navigate('/')}
                                className="text-white font-semibold hover:text-gray-300"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Booking Form */}
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    {Object.values(error).some(msg => msg) && (
                        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
                            {Object.values(error).filter(msg => msg).join(', ')}
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userAge" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            id="userAge"
                            name="userAge"
                            value={formData.userAge}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {error.age && <p className="text-red-600 text-sm mt-1">{error.age}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {error.phoneNumber && <p className="text-red-600 text-sm mt-1">{error.phoneNumber}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {error.email && <p className="text-red-600 text-sm mt-1">{error.email}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="numAdults" className="block text-sm font-medium text-gray-700">Number of Adults</label>
                            <input
                                type="number"
                                id="numAdults"
                                name="numAdults"
                                value={formData.numAdults}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                max="4"
                                required
                            />
                            {error.numAdults && <p className="text-red-600 text-sm mt-1">{error.numAdults}</p>}
                        </div>
                        <div>
                            <label htmlFor="numChildren" className="block text-sm font-medium text-gray-700">Number of Children</label>
                            <input
                                type="number"
                                id="numChildren"
                                name="numChildren"
                                value={formData.numChildren}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                max="2"
                            />
                            {error.numChildren && <p className="text-red-600 text-sm mt-1">{error.numChildren}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in Date</label>
                            <input
                                type="date"
                                id="checkInDate"
                                name="checkInDate"
                                value={formData.checkInDate}
                                onChange={handleChange}
                                min={today}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out Date</label>
                            <input
                                type="date"
                                id="checkOutDate"
                                name="checkOutDate"
                                value={formData.checkOutDate}
                                onChange={handleChange}
                                min={formData.checkInDate}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="totalDays" className="block text-sm font-medium text-gray-700">Total Days</label>
                        <input
                            type="text"
                            id="totalDays"
                            name="totalDays"
                            value={formData.totalDays}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Total Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="proofCard" className="block text-sm font-medium text-gray-700">Upload Proof of Identity</label>
                        <input
                            type="file"
                            id="proofCard"
                            name="proofCard"
                            onChange={handleFileChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
