import React from 'react';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
    const navigate = useNavigate(); 
  const rooms = [
    {
      id: 1,
      image: 'https://cdn-61e62012c1ac18f874f78489.closte.com/wp-content/uploads/2022/05/WoRp44unDDFH3cTXgM7t.jpg',
      name: 'Ocean View Deluxe',
      type: 'Deluxe',
      description: 'Spacious room with a breathtaking ocean view and modern amenities.',
      price: 2500,
    },
    {
      id: 2,
      image: 'https://www.admiralhotelmanila.com/wp-content/uploads/sites/224/2021/11/Executive-Suite.jpg',
      name: 'Executive Suite',
      type: 'Suite',
      description: 'Luxurious suite with separate living area and premium services.',
      price: 4000,
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfXqnPtyolFnzuk0YMuY37m0xhV6avMpkTjCYZijJQHtGCBg_AR6TWWsTdAZ-o64Pum4&usqp=CAU',
      name: 'Cozy Standard',
      type: 'Cottage',
      description: 'Comfortable room for a relaxing stay with essential amenities.',
      price: 8000,
    },
  ];
  const handleBookNow = () => {
    navigate('/login');
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Rooms</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-teal-600">{room.type}</span>
                <span className="text-lg font-bold text-gray-900">Rs.{room.price}/night</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{room.description}</p>
              <button
              onClick={handleBookNow}
               className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;