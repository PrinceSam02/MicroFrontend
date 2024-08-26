
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHotel, FaBed, FaUsers, FaMoneyBillWave, FaChartLine, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleManageRooms = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleManageRoomClick = (path) => {
        navigate(path);
        setDropdownOpen(false);
    };

    const handleManageUsers = () => {
        navigate('/bookingview');
    };

    const handleManageAllUsers = () => {
        navigate('/UserTable');
    };

    const handleLogout = () => {
        if (window.confirm("Do you want to logout?")) {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col" style={{ backgroundImage: 'url("https://www.example.com/your-background-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Navbar */}
            <nav className="bg-teal-700 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <Link to="/">
                            <FaHotel className="text-white text-3xl mr-2" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels Admin</h1>
                    </div>
                    <div className="space-x-6 flex items-center">
                        <div className="relative group">
                            <button onClick={handleManageRooms} className="hover:text-teal-200 transition duration-300 flex items-center">
                                {/* <FaBed className="mr-2" /> Manage Rooms */}
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-10">
                                    <button
                                        onClick={() => handleManageRoomClick('/manage-rooms')}
                                        className="block px-4 py-2 text-gray-800 hover:bg-teal-100 w-full text-left"
                                    >
                                        Add Rooms
                                    </button>
                                    <button
                                        onClick={() => handleManageRoomClick('/ViewRooms')}
                                        className="block px-4 py-2 text-gray-800 hover:bg-teal-100 w-full text-left"
                                    >
                                        Update Rooms
                                    </button>
                                </div>
                            )}
                        </div>
                        <button onClick={handleManageUsers} className="hover:text-teal-200 transition duration-300 flex items-center">
                            {/* <FaCalendarAlt className="mr-2" /> View Bookings */}
                        </button>
                        <button onClick={handleManageAllUsers} className="hover:text-teal-200 transition duration-300 flex items-center">
                            {/* <FaUsers className="mr-2" /> Manage Users */}
                        </button>
                        <button onClick={handleLogout} className="hover:text-teal-200 transition duration-300 flex items-center">
                            <FaSignOutAlt className="mr-2" /> Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="flex-grow container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">
                    Hotel Administration Dashboard
                </h1>

                {/* Data Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <DashboardCard icon={<FaCalendarAlt />} title="Total Bookings" value="150" subtitle="This month" />
                    <DashboardCard icon={<FaBed />} title="Rooms Available" value="25" subtitle="Out of 100" />
                    <DashboardCard icon={<FaMoneyBillWave />} title="Revenue" value="₹120,000" subtitle="This month" />
                    <DashboardCard icon={<FaChartLine />} title="Occupancy Rate" value="75%" subtitle="Last 30 days" />
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <QuickActionButton onClick={() => handleManageRoomClick('/ViewRooms')} icon={<FaBed />} text="View Rooms" />
                        <QuickActionButton onClick={() => handleManageRoomClick('/manage-rooms')} icon={<FaBed />} text="Add New Room" />
                        <QuickActionButton onClick={handleManageUsers} icon={<FaCalendarAlt />} text="View Bookings" />
                        <QuickActionButton onClick={handleManageAllUsers} icon={<FaUsers />} text="View Customers" />
                    </div>
                </div>

                {/* Quotes Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-teal-700 mb-6">Inspirational Quotes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <QuoteCard quote="A guest is the most important visitor on our premises. He is not dependent on us. We are dependent on him." author="Mahatma Gandhi" />
                        <QuoteCard quote="The best way to find yourself is to lose yourself in the service of others." author="Mahatma Gandhi" />
                        <QuoteCard quote="Good service is good business." author="Siebel Ad" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-teal-800 text-white py-6 mt-12">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Taj Hotels Administration. All rights reserved.</p>
                    <p className="mt-2">For support, contact: admin@tajhotels.com</p>
                </div>
            </footer>
        </div>
    );
};

const DashboardCard = ({ icon, title, value, subtitle }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-teal-700">{title}</h2>
            <div className="text-teal-500 text-3xl">{icon}</div>
        </div>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
    </div>
);

const QuickActionButton = ({ onClick, icon, text }) => (
    <button
        onClick={onClick}
        className="flex items-center justify-center bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
    >
        <span className="mr-2">{icon}</span>
        {text}
    </button>
);

const QuoteCard = ({ quote, author }) => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <p className="italic text-gray-700 mb-4">"{quote}"</p>
        <p className="text-right text-teal-600 font-semibold">- {author}</p>
    </div>
);

export default AdminDashboard;
