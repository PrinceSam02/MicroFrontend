
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaHotel, FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';

// const AdminLogin = () => {
//     const [formData, setFormData] = useState({
//         adminEmail: '',
//         adminPassword: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validateForm = () => {
//         const { adminEmail, adminPassword } = formData;
//         const newErrors = {};

//         // Email validation
//         if (!adminEmail) {
//             newErrors.adminEmail = 'Email is required';
//         }

//         // Password validation
//         if (!adminPassword || adminPassword.length < 6) {
//             newErrors.adminPassword = 'Password must be at least 6 characters long';
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             try {
//                 // Construct the URL with the adminEmail and adminPassword
//                 const response = await axios.get(`http://localhost:3031/admin/loginadmin/${formData.adminEmail}/${formData.adminPassword}`);

//                 // Check the response boolean value
//                 if (response.data) {
//                     setSuccessMessage('Login successful!');
//                     // Redirect to dashboard on successful login
//                     navigate('/AdminDashboard');
//                 } else {
//                     setErrorMessage('Invalid email or password');
//                 }
//             } catch (error) {
//                 console.error('Login failed:', error);
//                 setErrorMessage('An error occurred. Please try again.');
//             }
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="bg-teal-600 shadow-md fixed w-full z-10">
//                 <div className="container mx-auto flex justify-between items-center p-4">
//                     {/* Logo Section */}
//                     <div className="flex items-center space-x-4">
//                         <Link to="/">
//                             <FaHotel className="text-white text-3xl cursor-pointer" />
//                         </Link>
//                         <h1 className="text-white text-2xl font-extrabold">Taj Hotels</h1>
//                     </div>

//                     {/* Navigation Links */}
//                     <div className="flex space-x-4">
//                         <Link to="/" className="text-white hover:bg-teal-700 px-3 py-2 rounded-md transition-colors duration-300">
//                             <FaHome className="inline-block mr-2" /> Home
//                         </Link>
//                     </div>
//                 </div>
//             </nav>

//             {/* Main Content */}
//             <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://www.travelandleisure.com/thmb/o7LEqLUpOtf0nIm7ErqGrsVA3yo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hotel-room-interior-bed-BOOKHOTEL0223-786eb1910382404a8806d1e1e8ed7716.jpg")' }}>
//                 <div className="bg-black bg-opacity-50 backdrop-blur-md shadow-md rounded-lg w-full max-w-md p-8">
//                     <h2 className="text-2xl font-bold text-center mb-6 text-white">Admin Login</h2>
//                     {successMessage && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">{successMessage}</div>}
//                     {errorMessage && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">{errorMessage}</div>}
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label htmlFor="adminEmail" className="block font-bold mb-2 text-gray-300">Email</label>
//                             <input
//                                 type="email"
//                                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.adminEmail ? 'border-red-500' : 'border-gray-300'}`}
//                                 id="adminEmail"
//                                 name="adminEmail"
//                                 value={formData.adminEmail}
//                                 onChange={handleChange}
//                             />
//                             {errors.adminEmail && <div className="text-red-500 text-sm mt-1">{errors.adminEmail}</div>}
//                         </div>
//                         <div className="mb-6 relative">
//                             <label htmlFor="adminPassword" className="block font-bold mb-2 text-gray-300">Password</label>
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 className={`w-full border rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.adminPassword ? 'border-red-500' : 'border-gray-300'}`}
//                                 id="adminPassword"
//                                 name="adminPassword"
//                                 value={formData.adminPassword}
//                                 onChange={handleChange}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute inset-y-0 right-3 flex items-center"
//                             >
//                                 {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//                             </button>
//                             {errors.adminPassword && <div className="text-red-500 text-sm mt-1">{errors.adminPassword}</div>}
//                         </div>
//                         <button type="submit" className="bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors w-full">Login</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AdminLogin;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaHotel, FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        adminEmail: '',
        adminPassword: ''
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
        const { adminEmail, adminPassword } = formData;
        const newErrors = {};

        // Email validation
        if (!adminEmail) {
            newErrors.adminEmail = 'Email is required';
        }

        // Password validation
        if (!adminPassword || adminPassword.length < 6) {
            newErrors.adminPassword = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Construct the URL with the adminEmail and adminPassword
                const response = await axios.get(`http://localhost:3031/admin/loginadmin/${formData.adminEmail}/${formData.adminPassword}`);

                // Check the response boolean value
                if (response.data) {
                    setSuccessMessage('Login successful!');
                    // Redirect to dashboard on successful login
                    navigate('/AdminDashboard');
                } else {
                    setErrorMessage('Invalid email or password');
                }
            } catch (error) {
                console.error('Login failed:', error);
                setErrorMessage('An error occurred. Please try again.');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-teal-600 shadow-md fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center p-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <Link to="/">
                            <FaHotel className="text-white text-3xl cursor-pointer" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        <Link to="/" className="text-white hover:bg-teal-700 px-3 py-2 rounded-md transition-colors duration-300">
                            <FaHome className="inline-block mr-2" /> Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://www.travelandleisure.com/thmb/o7LEqLUpOtf0nIm7ErqGrsVA3yo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hotel-room-interior-bed-BOOKHOTEL0223-786eb1910382404a8806d1e1e8ed7716.jpg")' }}>
                <div className="bg-black bg-opacity-50 backdrop-blur-md shadow-md rounded-lg w-full max-w-md p-8">
                    <h2 className="text-2xl font-bold text-center mb-6 text-white">Admin Login</h2>
                    {successMessage && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">{successMessage}</div>}
                    {errorMessage && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">{errorMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="adminEmail" className="block font-bold mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.adminEmail ? 'border-red-500' : 'border-gray-300'}`}
                                id="adminEmail"
                                name="adminEmail"
                                value={formData.adminEmail}
                                onChange={handleChange}
                            />
                            {errors.adminEmail && <div className="text-red-500 text-sm mt-1">{errors.adminEmail}</div>}
                        </div>
                        <div className="mb-6 relative">
                            <label htmlFor="adminPassword" className="block font-bold mb-2 text-gray-300">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className={`w-full border rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.adminPassword ? 'border-red-500' : 'border-gray-300'}`}
                                id="adminPassword"
                                name="adminPassword"
                                value={formData.adminPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center p-1 text-white hover:text-teal-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors.adminPassword && <div className="text-red-500 text-sm mt-1">{errors.adminPassword}</div>}
                        </div>
                        <button type="submit" className="bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors w-full">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
