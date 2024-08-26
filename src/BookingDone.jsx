import React from 'react';

const BookingDone = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Successful</h2>
                <p className="text-gray-600 mb-4">Thank you for booking with us! Your reservation has been confirmed.</p>
                <div className="flex justify-center">
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline"> Your booking was successful.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDone;
