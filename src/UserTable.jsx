
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from the backend
//     axios.get('http://localhost:3031/user/getallUserList')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-teal-700 shadow-lg fixed top-0 left-0 w-full z-50">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           <div className="text-white text-xl font-bold">Taj Hotel</div>
//           <button 
//             onClick={() => navigate('/admindashboard')}
//             className="bg-white text-teal-700 px-4 py-2 rounded shadow hover:bg-teal-100">
//             Back
//           </button>
//         </div>
//       </nav>

//       {/* Table */}
//       <div className="container mx-auto mt-24">
//         <h2 className="text-2xl font-bold mb-4">User List</h2>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">ID</th>
//               <th className="py-2 px-4 border-b">Email</th>
//               <th className="py-2 px-4 border-b">Name</th>
//               <th className="py-2 px-4 border-b">Phone Number</th>
//               {/* <th className="py-2 px-4 border-b">Password</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id}>
//                 <td className="py-2 px-4 border-b">{user.id}</td>
//                 <td className="py-2 px-4 border-b">{user.userEmail}</td>
//                 <td className="py-2 px-4 border-b">{user.userName}</td>
//                 <td className="py-2 px-4 border-b">{user.userPhoneNumber}</td>
//                 {/* <td className="py-2 px-4 border-b">{user.userPassword}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserTable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHotel } from 'react-icons/fa';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3031/user/getallUserList')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-teal-700 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/AdminDashboard')}>
                        <Link to="/">
                            <FaHotel className="text-white text-3xl mr-2" />
                        </Link>
                        <h1 className="text-white text-2xl font-extrabold">Taj Hotels Admin</h1>
                    </div>
          <button 
            onClick={() => navigate('/admindashboard')}
            className="bg-white text-teal-700 px-6 py-2 rounded-full shadow hover:bg-teal-100 transition duration-300">
            Back to Dashboard
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-24 p-8">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">User List</h2>
        
        {/* Toggle Button */}
        <button 
          onClick={toggleTable}
          className="mb-4 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
        >
          {isTableVisible ? 'Hide Table' : 'Show Table'}
        </button>

        {/* Table Caption */}
        <p className="text-lg text-gray-600 mb-4">
          This table displays a comprehensive list of all registered users in our system.
        </p>

        {/* Animated Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTableVisible ? 1 : 0, y: isTableVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          {isTableVisible && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">ID</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-b">{user.id}</td>
                      <td className="py-3 px-4 border-b">{user.userEmail}</td>
                      <td className="py-3 px-4 border-b">{user.userName}</td>
                      <td className="py-3 px-4 border-b">{user.userPhoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UserTable;