
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import GlobalNavbar from './GlobalNavbar';
import { FaEye, FaEyeSlash, FaHome, FaHotel } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { userEmail, userPassword } = formData;
        const newErrors = {};

        // Email validation
        if (!userEmail || !userEmail.endsWith('@gmail.com')) {
            newErrors.userEmail = 'Email must be a valid Gmail address';
        }

        // Password validation
        if (!userPassword || userPassword.length < 6) {
            newErrors.userPassword = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Make a GET request to the backend API for authentication
                const response = await axios.post(`http://localhost:3031/user/loginuser/${formData.userEmail}/${formData.userPassword}`);

                if (response.data) {
                    setSuccessMessage('Login successful!');
                    const { id, userEmail } = response.data;

                    sessionStorage.setItem('id', id);
                    sessionStorage.setItem('userEmail', userEmail);
                    navigate('/RoomCard');
                } else {
                    setErrorMessage('Invalid email or password');
                }
            } catch (error) {
                setErrorMessage('An error occurred during login');
                console.error('Login failed', error);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="bg-teal-700 shadow-lg fixed w-full z-50 transition-all duration-300 hover:bg-teal-800">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="transform transition-transform duration-300 hover:scale-110">
                            <FaHotel className="text-white text-3xl cursor-pointer" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels</h1>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink to="/" icon={<FaHome />} text="Home" />
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="text-white font-bold text-lg bg-teal-700 px-4 py-2 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    >
                        Back to Home
                    </button>
                </div>
            </nav>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        {/* <div className="text-teal-600 font-bold text-2xl">TAJ Hotel</div> */}
                        <h2 className="text-2xl font-bold">Login</h2>
                    </div>
                    {successMessage && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">{successMessage}</div>}
                    {errorMessage && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">{errorMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="userEmail" className="block font-bold mb-2">Email</label>
                            <input
                                type="email"
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600 ${errors.userEmail ? 'border-red-500' : 'border-gray-300'}`}
                                id="userEmail"
                                name="userEmail"
                                value={formData.userEmail}
                                onChange={handleChange}
                            />
                            {errors.userEmail && <div className="text-red-500 text-sm mt-1">{errors.userEmail}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="userPassword" className="block font-bold mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600 ${errors.userPassword ? 'border-red-500' : 'border-gray-300'}`}
                                    id="userPassword"
                                    name="userPassword"
                                    value={formData.userPassword}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center px-3"
                                >
                                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                </button>
                            </div>
                            {errors.userPassword && <div className="text-red-500 text-sm mt-1">{errors.userPassword}</div>}
                        </div>
                        <button type="submit" className="bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors w-full">Login</button>
                    </form>
                    <p className="mt-4 text-center">
                        Don't have an account? <a href="/register" className="text-teal-600 font-bold hover:underline">Register</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
