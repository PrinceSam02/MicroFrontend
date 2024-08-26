import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        cleanliness: 0,
        cleanlinessDescription: '',
        service: 0,
        serviceDescription: '',
        amenities: 0,
        amenitiesDescription: '',
        valueForMoney: 0,
        valueForMoneyDescription: '',
        comments: '',
        recommend: '',
    });

    const descriptions = ["", "Not bad", "Good", "Nice", "Excellent", "Perfect"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({
            ...feedback,
            [name]: value,
        });
    };

    const handleRatingChange = (name, value) => {
        setFeedback({
            ...feedback,
            [name]: value,
            [`${name}Description`]: descriptions[value],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        // Add your form submission logic here
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Leave a Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={feedback.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Star Ratings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['cleanliness', 'service', 'amenities', 'valueForMoney'].map((category) => (
                        <div key={category}>
                            <label className="block text-sm font-medium text-gray-700 capitalize">{category}</label>
                            <div className="flex space-x-1 mt-1">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name={category}
                                                value={ratingValue}
                                                onClick={() => handleRatingChange(category, ratingValue)}
                                                className="hidden"
                                            />
                                            <FaStar
                                                size={24}
                                                color={ratingValue <= feedback[category] ? "#f5c518" : "#e4e5e9"}
                                                className="cursor-pointer"
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                            <p className="mt-2 text-sm text-gray-500">{feedback[`${category}Description`]}</p>
                        </div>
                    ))}
                </div>

                {/* Comments */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Comments</label>
                    <textarea
                        name="comments"
                        value={feedback.comments}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Write your comments here..."
                        rows="5"
                        required
                    />
                </div>

                {/* Recommend */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Would you recommend this hotel?</label>
                    <select
                        name="recommend"
                        value={feedback.recommend}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;
