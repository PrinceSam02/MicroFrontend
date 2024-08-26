import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCards = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/getallUserList');
                setUsers(response.data);
            } catch (err) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-8">User Details</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map(user => (
                    <div key={user.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{user.userName}</h3>
                            <p className="text-gray-600 mb-2">Email: {user.userEmail}</p>
                            <p className="text-gray-600 mb-4">Phone: {user.userPhoneNumber}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserCards;
