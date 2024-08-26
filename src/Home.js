import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaHome, FaSignInAlt, FaUser, FaBed, FaMapMarkerAlt, FaInfoCircle, FaConciergeBell, FaCar, FaWifi, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import Rooms from './Rooms';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [roomCards, setRoomCards] = useState([]);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    
    const slides = [
        'https://media.radissonhotels.net/image/radisson-blu-style-hotel-vienna/exteriorview/16256-114308-f66987125_3xl.jpg',
        'https://pix10.agoda.net/hotelImages/109034/-1/ae45c7fccd7d3a200a2a5dc6a507dc7c.jpg?s=1024x768',
        'https://img.freepik.com/free-photo/climate-landscape-paradise-hotel-sunset_1203-5734.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        const fetchRoomCards = async () => {
            try {
                const response = await axios.get('http://localhost:3031/api/room-cards');
                setRoomCards(response.data);
            } catch (error) {
                console.error("Error fetching room cards:", error);
            }
        };

        fetchRoomCards();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleSearch = () => {
        // Handle search logic here
        console.log("Check-in:", checkInDate, "Check-out:", checkOutDate);
    };
    
    return (
        <div className="font-sans bg-gray-100">
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
                        <NavLink to="/AdminLogin" icon={<FaSignInAlt />} text="Admin Login" />
                        <NavLink to="/Login" icon={<FaUser />} text="User Login" />
                        <NavLink to="/Contact" icon={<FaInfoCircle />} text="Contact Us" />
                    </div>
                </div>
            </nav>

            {/* Hero Section with Carousel */}
            <div className="relative h-screen overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img src={slide} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                ))}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                    <FaHotel className="text-6xl mb-4 animate-bounce" />
                    <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Taj Hotels</h1>
                    <p className="text-xl mb-8 animate-fadeIn">Experience luxury like never before</p>
                </div>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-teal-300 transition-colors duration-300">
                    <FaChevronLeft />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-teal-300 transition-colors duration-300">
                    <FaChevronRight />
                </button>
            </div>

            {/* Room Cards Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-teal-700 animate-fadeIn">Featured Rooms</h2>
                    
                    {/* Check-In, Check-Out, and Search Buttons */}
                    <div className="flex justify-center items-center mb-8 space-x-4">
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-teal-500 text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Search
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                        {roomCards.slice(0, 2).map((room, index) => (
                            <RoomCard key={index} {...room} />
                        ))}
                    </div>
                    <Rooms />
                    <div className="text-center">
                        <Link
                            to="/RoomCard"
                            className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Information Cards Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-teal-700 animate-fadeIn">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard icon={<FaBed />} title="Luxurious Rooms" description="Comfortable and well-furnished rooms to ensure a pleasant stay." />
                        <InfoCard icon={<FaMapMarkerAlt />} title="Prime Location" description="Located in the heart of the city with easy access to popular attractions." />
                        <InfoCard icon={<FaInfoCircle />} title="Exceptional Service" description="Our staff is dedicated to providing the best service for our guests." />
                        <InfoCard icon={<FaConciergeBell />} title="Concierge Service" description="24/7 concierge service to cater to all your needs and preferences." />
                        <InfoCard icon={<FaCar />} title="Complimentary Parking" description="Enjoy free parking with our valet service or self-parking options." />
                        <InfoCard icon={<FaWifi />} title="Free Wi-Fi" description="Stay connected with high-speed internet available throughout the hotel." />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-teal-700 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Taj Hotels</h3>
                    <p className="mb-2">&copy; {new Date().getFullYear()} Taj Hotels. All Rights Reserved.</p>
                    <p className="mb-2">123 Luxury St, Comfort City, CC 12345</p>
                    <p>Phone: (123) 456-7890 | Email: info@tajhotels.com</p>
                </div>
            </footer>
        </div>
    );
};

const NavLink = ({ to, icon, text }) => (
    <Link
        to={to}
        className="flex items-center space-x-2 text-white font-semibold hover:text-teal-300 transition-colors duration-300"
    >
        {icon}
        <span>{text}</span>
    </Link>
);

const InfoCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-teal-700 text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

const RoomCard = ({ roomName, roomType, roomPhoto, price }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={roomPhoto} alt={roomName} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">{roomName}</h3>
        <p className="text-gray-600 mb-4">{roomType}</p>
        <p className="text-teal-700 font-bold text-lg">{price}</p>
        <Link
            to="/RoomCard"
            className="mt-4 block bg-teal-500 text-white text-center py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
        >
            View More
        </Link>
    </div>
);

export default Home;
