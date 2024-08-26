import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Success</h2>
                <p>{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
