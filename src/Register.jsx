import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        userPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { userName, userEmail, userPhoneNumber, userPassword } = formData;
        const newErrors = {};

        // Name validation
        if (!userName) {
            newErrors.userName = 'Name is required';
        }

        // Email validation
        if (!userEmail || !userEmail.endsWith('@gmail.com')) {
            newErrors.userEmail = 'Email must be a valid Gmail address';
        }

        // Phone number validation
        if (!userPhoneNumber || !/^\d{10}$/.test(userPhoneNumber)) {
            newErrors.userPhoneNumber = 'Phone number must be 10 digits';
        }

        // Password validation
        if (!userPassword || userPassword.length < 8 || !/[!@#$%^&*]/.test(userPassword)) {
            newErrors.userPassword = 'Password must be at least 8 characters long and include a symbol';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:3031/user/douserinsert', formData);

                if (response.status === 200) {
                    setSuccessMessage('Registration successful!');
                    setShowPopup(true); // Show popup
                    setFormData({
                        userName: '',
                        userEmail: '',
                        userPhoneNumber: '',
                        userPassword: ''
                    });
                    setTimeout(() => {
                        setShowPopup(false); // Hide popup after 3 seconds
                        navigate('/login');
                    }, 3000); // Adjust the timeout duration as needed
                }
            } catch (error) {
                setErrorMessage(error.response?.data?.message || 'An error occurred');
                setTimeout(() => setErrorMessage(''), 5000);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <nav className="bg-teal-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <button 
                        onClick={() => navigate('/')} 
                        className="text-white font-bold text-lg bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    >
                        Back to Home
                    </button>
                    <div className="text-white text-xl font-semibold">Welcome to Taj Hotels</div>
                </div>
            </nav>

            {/* Register Form */}
            <div className="container mx-auto p-4 flex-1">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-teal-700 text-center">Register</h2>
                    {/* {successMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{successMessage}</div>} */}
                    {/* {errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{errorMessage}</div>} */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                className={`w-full p-2 border ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded`}
                                id="userName"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                            />
                            {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="userEmail" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                className={`w-full p-2 border ${errors.userEmail ? 'border-red-500' : 'border-gray-300'} rounded`}
                                id="userEmail"
                                name="userEmail"
                                value={formData.userEmail}
                                onChange={handleChange}
                            />
                            {errors.userEmail && <p className="text-red-500 text-sm">{errors.userEmail}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="userPhoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                            <input
                                type="text"
                                className={`w-full p-2 border ${errors.userPhoneNumber ? 'border-red-500' : 'border-gray-300'} rounded`}
                                id="userPhoneNumber"
                                name="userPhoneNumber"
                                value={formData.userPhoneNumber}
                                onChange={handleChange}
                                maxLength="10" // Limit phone number input to 10 digits
                            />
                            {errors.userPhoneNumber && <p className="text-red-500 text-sm">{errors.userPhoneNumber}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="userPassword" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input
                                type="password"
                                className={`w-full p-2 border ${errors.userPassword ? 'border-red-500' : 'border-gray-300'} rounded`}
                                id="userPassword"
                                name="userPassword"
                                value={formData.userPassword}
                                onChange={handleChange}
                            />
                            {errors.userPassword && <p className="text-red-500 text-sm">{errors.userPassword}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-3 text-center">
                        Already have an account? <a href="/login" className="text-teal-600 font-semibold">Login</a>
                    </p>
                </div>

                {/* Popup for success message */}
                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-xl font-bold mb-2">Registration Successful!</h2>
                            <p className="text-gray-700 mb-4">You have been registered successfully.</p>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
