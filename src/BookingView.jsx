import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaHotel, FaChevronLeft, FaUser, FaCalendar, FaBed, FaDollarSign, FaIdCard } from 'react-icons/fa';

const BookingView = () => {
  const [bookings, setBookings] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3031/admin/bookingPending')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching the pending bookings:', error));
  }, [count]);

  const toggleDetails = (id) => {
    setDetailsVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const getImageSrc = (base64String) => {
    if (!base64String) return '';
    return `data:image/jpeg;base64,${base64String}`;
  };

  const handleBackClick = () => {
    navigate('/admindashboard');
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const updateBooking = (booking, status) => {
    booking.bookingStatus = status === "approve" ? "Approved" : "Cancelled";
    axios.put("http://localhost:3031/booking/updateBookingStatus", booking)
      .then(() => setCount(count + 1))
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-teal-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <FaHotel className="text-white text-3xl mr-2" />
            <h1 className="text-white text-2xl font-extrabold">Taj Hotels Admin</h1>
          </div>
          <button 
            onClick={handleBackClick} 
            className="bg-white text-teal-600 px-4 py-2 rounded-full hover:bg-teal-100 transition duration-300 flex items-center"
          >
            <FaChevronLeft className="mr-2" /> Back
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-teal-700"> Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map(booking => (
            <div key={booking.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-teal-600">{booking.firstName} {booking.lastName}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    booking.bookingStatus === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    booking.bookingStatus === 'Approved' ? 'bg-green-200 text-green-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {booking.bookingStatus}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center"><FaUser className="mr-2" /> Age: {booking.userAge}</p>
                  <p className="flex items-center"><FaCalendar className="mr-2" /> Total Days: {booking.totalDays}</p>
                  <p className="flex items-center"><FaBed className="mr-2" /> Room Type: {booking.roomType}</p>
                  <p className="flex items-center"><FaDollarSign className="mr-2" /> Price: Rs.{booking.price}/-</p>
                </div>
                <button 
                  onClick={() => toggleDetails(booking.id)}
                  className="mt-4 text-teal-600 hover:text-teal-800 transition duration-300"
                >
                  {detailsVisible[booking.id] ? 'Less Details' : 'More Details'}
                </button>
                {detailsVisible[booking.id] && (
                  <div className="mt-4 text-sm text-gray-600 space-y-2">
                    <p><strong>Address:</strong> {booking.address}</p>
                    <p><strong>Phone:</strong> {booking.phoneNumber}</p>
                    <p><strong>Email:</strong> {booking.email}</p>
                    <p><strong>Total Guests:</strong> {booking.totalGuests}</p>
                  </div>
                )}
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaIdCard className="text-teal-600 mr-2" />
                    <span className="text-sm font-medium text-gray-600">ID Proof</span>
                  </div>
                  {booking.proofCard ? (
                    <button 
                      onClick={() => handleImageClick(getImageSrc(booking.proofCard))}
                      className="text-teal-600 hover:text-teal-800 transition duration-300"
                    >
                      <FaEye size={20} />
                    </button>
                  ) : (
                    <span className="text-sm text-gray-500">No Image</span>
                  )}
                </div>
              </div>
              {booking.bookingStatus === "Pending" && (
                <div className="px-6 py-4 bg-gray-100 flex justify-end space-x-4">
                  <button 
                    onClick={() => updateBooking(booking, "approve")}
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => updateBooking(booking, "deny")}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                  >
                    Deny
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
            <img src={selectedImage} alt="ID Proof" className="max-w-full h-auto" />
            <button 
              onClick={handleCloseModal} 
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingView;