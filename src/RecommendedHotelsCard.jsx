import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const RecommendedHotelsCard = ({ onViewMore }) => {
    const navigate = useNavigate();

    const handleViewMore = (roomId) => {
        navigate(`/RoomCard`);
    };

    return (
        <div className="fixed top-1/4 right-4 bg-white shadow-lg rounded-lg w-80 p-4 border border-teal-300">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">Recommended Hotels</h3>
            <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                    <h4 className="text-lg font-semibold">Deluxe Suite</h4>
                    <p className="text-teal-600">Luxury</p>
                    <p className="text-gray-600">$150 per night</p>
                    <p className="text-gray-800">A spacious room with a king-sized bed and a stunning city view.</p>
                    <button
                        onClick={() => handleViewMore(1)}
                        className="mt-2 text-teal-600 flex items-center"
                    >
                        View More <FaArrowRight className="ml-2" />
                    </button>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                    <h4 className="text-lg font-semibold">Standard Room</h4>
                    <p className="text-teal-600">Comfort</p>
                    <p className="text-gray-600">$100 per night</p>
                    <p className="text-gray-800">A cozy room with modern amenities for a comfortable stay.</p>
                    <button
                        onClick={() => handleViewMore(2)}
                        className="mt-2 text-teal-600 flex items-center"
                    >
                        View More <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendedHotelsCard;
