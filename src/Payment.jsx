
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';
// import { motion } from 'framer-motion';
// import { FaCreditCard, FaMobileAlt, FaQuoteLeft, FaQuoteRight, FaEye, FaEyeSlash } from 'react-icons/fa';
// // import { FaHotel } from 'react-icons/fa';

// // import { ReactComponent as ReactLogo } from './path/to/react-logo.svg'; // Update with the correct path to the React icon SVG

// const Payment = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { formData } = location.state || {};
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [paymentStatus, setPaymentStatus] = useState('');
//     const [creditCardDetails, setCreditCardDetails] = useState({ number: '', expDate: '', cvv: '', showCvv: false });
//     const [upiDetails, setUpiDetails] = useState({ id: '', pin: '', showPin: false });
//     const [bill, setBill] = useState(null);

//     const handlePaymentMethodChange = (e) => {
//         setPaymentMethod(e.target.value);
//         setPaymentStatus(''); // Clear payment status when payment method changes
//     };

//     const handleCreditCardChange = (e) => {
//         let { name, value } = e.target;

//         // Automatically add spaces after every 4 digits for the card number
//         if (name === 'number') {
//             value = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
//         }

//         // Automatically add '/' after 2 digits in expiry date
//         if (name === 'expDate') {
//             value = value.replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) => p2 ? `${p1}/${p2}` : p1);
//         }

//         setCreditCardDetails({ ...creditCardDetails, [name]: value });
//     };

//     const handleUpiChange = (e) => {
//         setUpiDetails({ ...upiDetails, [e.target.name]: e.target.value });
//     };

//     const handleToggleVisibility = (field) => {
//         if (field === 'cvv') {
//             setCreditCardDetails({ ...creditCardDetails, showCvv: !creditCardDetails.showCvv });
//         } else if (field === 'pin') {
//             setUpiDetails({ ...upiDetails, showPin: !upiDetails.showPin });
//         }
//     };

//     const handlePayment = (e) => {
//         e.preventDefault();

//         if (paymentMethod === 'creditCard') {
//             if (!creditCardDetails.number || !creditCardDetails.expDate || !creditCardDetails.cvv) {
//                 alert('Please fill in all credit card details.');
//                 return;
//             }
//             setPaymentStatus('Payment successful using Credit Card');
//         } else if (paymentMethod === 'upi') {
//             if (!upiDetails.id || !upiDetails.pin) {
//                 alert('Please fill in all UPI details.');
//                 return;
//             }
//             setPaymentStatus('Payment successful using UPI');
//         } else {
//             alert('Please select a payment method.');
//             return;
//         }

//         setBill({
//             name: `${formData.firstName} ${formData.lastName}`,
//             roomName: formData.roomName,
//             roomType: formData.roomType,
//             price: formData.price,
//             totalGuests: formData.totalGuests,
//             checkInDate: formData.checkInDate,
//             checkOutDate: formData.checkOutDate,
//             paymentMethod: paymentMethod
//         });
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
        
//         // Add hotel name and logo
//         doc.setFont("times", "bolder"); // Setting custom font style
//         doc.text(30, 30, 'Taj Hotels');
        
//         // Add booking details
//         doc.setFontSize(12);
//         doc.text(20, 50, `Name: ${bill.name}`);
//         doc.text(20, 60, `Room Type: ${bill.roomType}`);
//         doc.text(20, 70, `Price: $${bill.price}`);
//         doc.text(20, 80, `Total Guests: ${bill.totalGuests}`);
//         doc.text(20, 90, `Check-in Date: ${bill.checkInDate}`);
//         doc.text(20, 100, `Check-out Date: ${bill.checkOutDate}`);
//         doc.text(20, 110, `Payment Method: ${bill.paymentMethod}`);
        
//         // Add payment status
//         doc.setFontSize(14);
//         doc.text(20, 130, `Payment Status: ${paymentStatus}`);
        
//         // Save the PDF
//         doc.save('payment-receipt.pdf');
//     };

//     const quotes = [
//         "Secure payments build trust, trust builds loyalty.",
//         "Your payment security is our top priority.",
//         "Experience luxury with peace of mind.",
//         "We value your trust in our payment process."
//     ];

//     return (
//         <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://page.mysoftinn.com/hs-fs/hubfs/Blog/36382999_l.jpg?width=855&name=36382999_l.jpg)" }}>
//             <div className="min-h-screen bg-teal-800 bg-opacity-80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
//                 >
//                     {/* Go Back or Cancel Booking Button */}
//                     <button
//                         onClick={() => navigate('/room-cards')}
//                         className="absolute top-4 left-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
//                     >
//                         Go Back
//                     </button>

//                     <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-6">Secure Payment</h2>

//                     {/* Quotes Carousel */}
//                     <div className="mb-8 text-center text-teal-600 italic">
//                         <FaQuoteLeft className="inline-block mr-2" />
//                         {quotes[Math.floor(Math.random() * quotes.length)]}
//                         <FaQuoteRight className="inline-block ml-2" />
//                     </div>

//                     <div className="mb-8 p-6 bg-teal-50 rounded-lg shadow-inner">
//                         <h3 className="text-2xl font-semibold mb-4 text-teal-700">Booking Details</h3>
//                         <div className="grid grid-cols-2 gap-4">
//                             <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
//                             <p><strong>Room Type:</strong> {formData.roomType}</p>
//                             <p><strong>Price:</strong> ${formData.price}</p>
//                             <p><strong>Total Guests:</strong> {formData.totalGuests}</p>
//                             <p><strong>Check-in Date:</strong> {formData.checkInDate}</p>
//                             <p><strong>Check-out Date:</strong> {formData.checkOutDate}</p>
//                         </div>
//                     </div>

//                     <form onSubmit={handlePayment} className="space-y-6">
//                         <div>
//                             <label htmlFor="paymentMethod" className="block text-sm font-medium text-teal-700">Select Payment Method</label>
//                             <select
//                                 id="paymentMethod"
//                                 name="paymentMethod"
//                                 value={paymentMethod}
//                                 onChange={handlePaymentMethodChange}
//                                 className="mt-1 block w-full py-2 px-3 border border-teal-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-300"
//                                 required
//                             >
//                                 <option value="">Select Payment Method</option>
//                                 <option value="creditCard">Credit Card</option>
//                                 <option value="upi">UPI</option>
//                             </select>
//                         </div>

//                         {paymentMethod === 'creditCard' && (
//                             <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="space-y-4"
//                             >
//                                 <h4 className="text-xl font-semibold text-teal-700 flex items-center">
//                                     <FaCreditCard className="mr-2" /> Credit Card Details
//                                 </h4>

//                                 <div>
//                                     <label htmlFor="cardNumber" className="block text-sm font-medium text-teal-700">Card Number</label>
//                                     <input
//                                         id="cardNumber"
//                                         name="number"
//                                         type="text"
//                                         value={creditCardDetails.number}
//                                         onChange={handleCreditCardChange}
//                                         maxLength="19"
//                                         placeholder="1234 5678 9012 3456"
//                                         className="mt-1 block w-full py-2 px-3 border border-teal-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-300"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="expDate" className="block text-sm font-medium text-teal-700">Expiry Date</label>
//                                     <input
//                                         id="expDate"
//                                         name="expDate"
//                                         type="text"
//                                         value={creditCardDetails.expDate}
//                                         onChange={handleCreditCardChange}
//                                         maxLength="5"
//                                         placeholder="MM/YY"
//                                         className="mt-1 block w-full py-2 px-3 border border-teal-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-300"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="relative">
//                                     <label htmlFor="cvv" className="block text-sm font-medium text-teal-700">CVV</label>
//                                     <input
//                                         id="cvv"
//                                         name="cvv"
//                                         type={creditCardDetails.showCvv ? "text" : "password"}
//                                         value={creditCardDetails.cvv}
//                                         onChange={handleCreditCardChange}
//                                         maxLength="3"
//                                         placeholder="123"
//                                         className="mt-1 block w-full py-2 px-3 border border-teal-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-300"
//                                         required
//                                     />
//                                     <button
//                                         type="button"
//                                         className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
//                                         onClick={() => handleToggleVisibility('cvv')}
//                                     >
//                                         {creditCardDetails.showCvv ? <FaEyeSlash /> : <FaEye />}
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         )}

//                         {paymentMethod === 'upi' && (
//                             <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="space-y-4"
//                             >
//                                 <h4 className="text-xl font-semibold text-teal-700 flex items-center">
//                                     <FaMobileAlt className="mr-2" /> UPI Details
//                                 </h4>

//                                 <div>
//                                     <label htmlFor="upiId" className="block text-sm font-medium text-teal-700">UPI ID</label>
//                                     <input
//                                         id="upiId"
//                                         name="id"
//                                         type="text"
//                                         value={upiDetails.id}
//                                         onChange={handleUpiChange}
//                                         placeholder="your-upi-id@bank"
//                                         className="mt-1 block w-full py-2 px-3 border border-teal-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-300"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="relative">
//                                     <label htmlFor="upiPin" className="block text-sm font-medium text-teal-700">UPI PIN</label>
//                                     <input
//                                         id="upiPin"
//                                         name="pin"
//                                         type={upiDetails.showPin ? "text" : "password"}
//                                         value={upiDetails.pin}
//                                         onChange={handleUpiChange}
//                                         maxLength="6"
//                                         placeholder="******"
//                                         className="mt-1 block w-full py-2 px-3 border border-teal-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-300"
//                                         required
//                                     />
//                                     <button
//                                         type="button"
//                                         className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
//                                         onClick={() => handleToggleVisibility('pin')}
//                                     >
//                                         {upiDetails.showPin ? <FaEyeSlash /> : <FaEye />}
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         )}

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
//                             >
//                                 Pay Now
//                             </button>
//                         </div>
//                     </form>

//                     {paymentStatus && (
//                         <div className="mt-8 p-4 bg-teal-100 text-teal-800 rounded-lg">
//                             <p className="text-lg font-semibold">{paymentStatus}</p>
//                             {bill && (
//                                 <div>
//                                     <p>Receipt has been generated. <button onClick={generatePDF} className="text-teal-600 underline">Download PDF</button></p>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Payment;
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';
// import { motion } from 'framer-motion';
// import { FaCreditCard, FaMobileAlt, FaQuoteLeft, FaQuoteRight, FaEye, FaEyeSlash } from 'react-icons/fa';
// import RecommendedHotelsCard from './RecommendedHotelsCard'; // Import the new component

// const Payment = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { formData } = location.state || {};
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [paymentStatus, setPaymentStatus] = useState('');
//     const [creditCardDetails, setCreditCardDetails] = useState({ number: '', expDate: '', cvv: '', showCvv: false });
//     const [upiDetails, setUpiDetails] = useState({ id: '', pin: '', showPin: false });
//     const [bill, setBill] = useState(null);
//     const [showRecommended, setShowRecommended] = useState(false); // State to control the visibility of the recommended hotels card

//     const handlePaymentMethodChange = (e) => {
//         setPaymentMethod(e.target.value);
//         setPaymentStatus(''); // Clear payment status when payment method changes
//     };

//     const handleCreditCardChange = (e) => {
//         let { name, value } = e.target;

//         // Automatically add spaces after every 4 digits for the card number
//         if (name === 'number') {
//             value = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
//         }

//         // Automatically add '/' after 2 digits in expiry date
//         if (name === 'expDate') {
//             value = value.replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) => p2 ? `${p1}/${p2}` : p1);
//         }

//         setCreditCardDetails({ ...creditCardDetails, [name]: value });
//     };

//     const handleUpiChange = (e) => {
//         setUpiDetails({ ...upiDetails, [e.target.name]: e.target.value });
//     };

//     const handleToggleVisibility = (field) => {
//         if (field === 'cvv') {
//             setCreditCardDetails({ ...creditCardDetails, showCvv: !creditCardDetails.showCvv });
//         } else if (field === 'pin') {
//             setUpiDetails({ ...upiDetails, showPin: !upiDetails.showPin });
//         }
//     };

//     const handlePayment = (e) => {
//         e.preventDefault();

//         if (paymentMethod === 'creditCard') {
//             if (!creditCardDetails.number || !creditCardDetails.expDate || !creditCardDetails.cvv) {
//                 alert('Please fill in all credit card details.');
//                 return;
//             }
//             setPaymentStatus('Payment successful using Credit Card');
//         } else if (paymentMethod === 'upi') {
//             if (!upiDetails.id || !upiDetails.pin) {
//                 alert('Please fill in all UPI details.');
//                 return;
//             }
//             setPaymentStatus('Payment successful using UPI');
//         } else {
//             alert('Please select a payment method.');
//             return;
//         }

//         setBill({
//             name: `${formData.firstName} ${formData.lastName}`,
//             roomName: formData.roomName,
//             roomType: formData.roomType,
//             price: formData.price,
//             totalGuests: formData.totalGuests,
//             checkInDate: formData.checkInDate,
//             checkOutDate: formData.checkOutDate,
//             paymentMethod: paymentMethod
//         });

//         setShowRecommended(true); // Show recommended hotels card after payment
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
        
//         // Add hotel name and logo
//         doc.setFont("times", "bolder"); // Setting custom font style
//         doc.text(30, 30, 'Taj Hotels');
        
//         // Add booking details
//         doc.setFontSize(12);
//         doc.text(20, 50, `Name: ${bill.name}`);
//         doc.text(20, 60, `Room Type: ${bill.roomType}`);
//         doc.text(20, 70, `Price: $${bill.price}`);
//         doc.text(20, 80, `Total Guests: ${bill.totalGuests}`);
//         doc.text(20, 90, `Check-in Date: ${bill.checkInDate}`);
//         doc.text(20, 100, `Check-out Date: ${bill.checkOutDate}`);
//         doc.text(20, 110, `Payment Method: ${bill.paymentMethod}`);
        
//         // Add payment status
//         doc.setFontSize(14);
//         doc.text(20, 130, `Payment Status: ${paymentStatus}`);
        
//         // Save the PDF
//         doc.save('payment-receipt.pdf');
//     };

//     const quotes = [
//         "Secure payments build trust, trust builds loyalty.",
//         "Your payment security is our top priority.",
//         "Experience luxury with peace of mind.",
//         "We value your trust in our payment process."
//     ];

//     return (
//         <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://page.mysoftinn.com/hs-fs/hubfs/Blog/36382999_l.jpg?width=855&name=36382999_l.jpg)" }}>
//             <div className="min-h-screen bg-teal-800 bg-opacity-80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
//                 >
//                     {/* Go Back or Cancel Booking Button */}
//                     <button
//                         onClick={() => navigate('/room-cards')}
//                         className="absolute top-4 left-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
//                     >
//                         Go Back
//                     </button>

//                     <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-6">Secure Payment</h2>

//                     {/* Payment Form */}
//                     <form onSubmit={handlePayment}>
//                         <div className="space-y-4">
//                             {/* Payment Method Selection */}
//                             <div className="flex space-x-4">
//                                 <label className="inline-flex items-center">
//                                     <input
//                                         type="radio"
//                                         value="creditCard"
//                                         checked={paymentMethod === 'creditCard'}
//                                         onChange={handlePaymentMethodChange}
//                                         className="form-radio text-teal-600"
//                                     />
//                                     <span className="ml-2 text-teal-600">Credit Card</span>
//                                 </label>
//                                 <label className="inline-flex items-center">
//                                     <input
//                                         type="radio"
//                                         value="upi"
//                                         checked={paymentMethod === 'upi'}
//                                         onChange={handlePaymentMethodChange}
//                                         className="form-radio text-teal-600"
//                                     />
//                                     <span className="ml-2 text-teal-600">UPI</span>
//                                 </label>
//                             </div>

//                             {/* Credit Card Details */}
//                             {paymentMethod === 'creditCard' && (
//                                 <div className="space-y-4">
//                                     <div>
//                                         <label htmlFor="number" className="block text-sm font-medium text-gray-700">Card Number</label>
//                                         <input
//                                             type="text"
//                                             id="number"
//                                             name="number"
//                                             value={creditCardDetails.number}
//                                             onChange={handleCreditCardChange}
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
//                                         <input
//                                             type="text"
//                                             id="expDate"
//                                             name="expDate"
//                                             value={creditCardDetails.expDate}
//                                             onChange={handleCreditCardChange}
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//                                         <div className="relative">
//                                             <input
//                                                 type={creditCardDetails.showCvv ? 'text' : 'password'}
//                                                 id="cvv"
//                                                 name="cvv"
//                                                 value={creditCardDetails.cvv}
//                                                 onChange={handleCreditCardChange}
//                                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => handleToggleVisibility('cvv')}
//                                                 className="absolute inset-y-0 right-0 flex items-center px-3"
//                                             >
//                                                 {creditCardDetails.showCvv ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* UPI Details */}
//                             {paymentMethod === 'upi' && (
//                                 <div className="space-y-4">
//                                     <div>
//                                         <label htmlFor="id" className="block text-sm font-medium text-gray-700">UPI ID</label>
//                                         <input
//                                             type="text"
//                                             id="id"
//                                             name="id"
//                                             value={upiDetails.id}
//                                             onChange={handleUpiChange}
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="pin" className="block text-sm font-medium text-gray-700">UPI PIN</label>
//                                         <div className="relative">
//                                             <input
//                                                 type={upiDetails.showPin ? 'text' : 'password'}
//                                                 id="pin"
//                                                 name="pin"
//                                                 value={upiDetails.pin}
//                                                 onChange={handleUpiChange}
//                                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => handleToggleVisibility('pin')}
//                                                 className="absolute inset-y-0 right-0 flex items-center px-3"
//                                             >
//                                                 {upiDetails.showPin ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Payment Status */}
//                             {paymentStatus && (
//                                 <div className="bg-teal-100 border border-teal-300 text-teal-700 px-4 py-3 rounded relative">
//                                     <strong className="font-bold">Payment Status:</strong> {paymentStatus}
//                                 </div>
//                             )}

//                             {/* Pay Now Button */}
//                             <div className="flex justify-center mt-8">
//                                 <button
//                                     type="submit"
//                                     className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                                 >
//                                     Pay Now
//                                 </button>
//                             </div>
//                         </div>
//                     </form>

//                     {/* Display the bill and generate PDF */}
//                     {bill && (
//                         <div className="mt-8 text-center">
//                             <button
//                                 onClick={generatePDF}
//                                 className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                             >
//                                 Download Receipt
//                             </button>
//                         </div>
//                     )}

//                     {/* Quotes */}
//                     <div className="mt-8 text-center text-gray-700">
//                         {quotes.map((quote, index) => (
//                             <div key={index} className="relative py-4">
//                                 <FaQuoteLeft className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                                 <p className="text-lg italic">{quote}</p>
//                                 <FaQuoteRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Recommended Hotels Card */}
//                     {showRecommended && <RecommendedHotelsCard />}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Payment;
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';
// import { motion } from 'framer-motion';
// import { FaCreditCard, FaMobileAlt, FaQuoteLeft, FaQuoteRight, FaEye, FaEyeSlash } from 'react-icons/fa';
// import RecommendedHotelsCard from './RecommendedHotelsCard'; // Import the new component

// const Payment = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { formData } = location.state || {};
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [paymentStatus, setPaymentStatus] = useState('');
//     const [creditCardDetails, setCreditCardDetails] = useState({ number: '', expDate: '', cvv: '', showCvv: false });
//     const [upiDetails, setUpiDetails] = useState({ id: '', pin: '', showPin: false });
//     const [bill, setBill] = useState(null);
//     const [showRecommended, setShowRecommended] = useState(false); // State to control the visibility of the recommended hotels card

//     const handlePaymentMethodChange = (e) => {
//         setPaymentMethod(e.target.value);
//         setPaymentStatus(''); // Clear payment status when payment method changes
//     };

//     const handleCreditCardChange = (e) => {
//         let { name, value } = e.target;

//         // Automatically add spaces after every 4 digits for the card number
//         if (name === 'number') {
//             value = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
//         }

//         // Automatically add '/' after 2 digits in expiry date
//         if (name === 'expDate') {
//             value = value.replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) => p2 ? `${p1}/${p2}` : p1);
//         }

//         setCreditCardDetails({ ...creditCardDetails, [name]: value });
//     };

//     const handleUpiChange = (e) => {
//         setUpiDetails({ ...upiDetails, [e.target.name]: e.target.value });
//     };

//     const handleToggleVisibility = (field) => {
//         if (field === 'cvv') {
//             setCreditCardDetails({ ...creditCardDetails, showCvv: !creditCardDetails.showCvv });
//         } else if (field === 'pin') {
//             setUpiDetails({ ...upiDetails, showPin: !upiDetails.showPin });
//         }
//     };

//     const handlePayment = (e) => {
//         e.preventDefault();

//         if (paymentMethod === 'creditCard') {
//             if (!creditCardDetails.number || !creditCardDetails.expDate || !creditCardDetails.cvv) {
//                 alert('Please fill in all credit card details.');
//                 return;
//             }
//             setPaymentStatus('Payment successful using Credit Card');
//         } else if (paymentMethod === 'upi') {
//             if (!upiDetails.id || !upiDetails.pin) {
//                 alert('Please fill in all UPI details.');
//                 return;
//             }
//             setPaymentStatus('Payment successful using UPI');
//         } else {
//             alert('Please select a payment method.');
//             return;
//         }

//         setBill({
//             name: `${formData.firstName} ${formData.lastName}`,
//             roomName: formData.roomName,
//             roomType: formData.roomType,
//             price: formData.price,
//             totalGuests: formData.totalGuests,
//             checkInDate: formData.checkInDate,
//             checkOutDate: formData.checkOutDate,
//             paymentMethod: paymentMethod
//         });

//         setShowRecommended(true); // Show recommended hotels card after payment
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
        
//         // Add hotel name and logo
//         doc.setFont("times", "bolder"); // Setting custom font style
//         doc.text(30, 30, 'Taj Hotels');
        
//         // Add booking details
//         doc.setFontSize(12);
//         doc.text(20, 50, `Name: ${bill.name}`);
//         doc.text(20, 60, `Room Type: ${bill.roomType}`);
//         doc.text(20, 70, `Price: $${bill.price}`);
//         doc.text(20, 80, `Total Guests: ${bill.totalGuests}`);
//         doc.text(20, 90, `Check-in Date: ${bill.checkInDate}`);
//         doc.text(20, 100, `Check-out Date: ${bill.checkOutDate}`);
//         doc.text(20, 110, `Payment Method: ${bill.paymentMethod}`);
        
//         // Add payment status
//         doc.setFontSize(14);
//         doc.text(20, 130, `Payment Status: ${paymentStatus}`);
        
//         // Save the PDF
//         doc.save('payment-receipt.pdf');
//     };

//     const quotes = [
//         "Secure payments build trust, trust builds loyalty.",
//         "Your payment security is our top priority.",
//         // "Experience luxury with peace of mind.",
//         // "We value your trust in our payment process."
//     ];

//     return (
//         <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://page.mysoftinn.com/hs-fs/hubfs/Blog/36382999_l.jpg?width=855&name=36382999_l.jpg)" }}>
//             <div className="min-h-screen bg-teal-800 bg-opacity-80 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
//                 >
//                     {/* Quotes */}
//                     <div className="text-center text-gray-700">
//                         {quotes.map((quote, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.5 }}
//                                 className="relative py-4"
//                             >
//                                 <FaQuoteLeft className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                                 <p className="text-lg italic">{quote}</p>
//                                 <FaQuoteRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* Go Back or Cancel Booking Button */}
//                     <button
//                         onClick={() => navigate('/room-cards')}
//                         className="absolute top-4 left-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
//                     >
//                         Go Back
//                     </button>

//                     <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-6">Secure Payment</h2>

//                     {/* Payment Form */}
//                     <form onSubmit={handlePayment}>
//                         <div className="space-y-4">
//                             {/* Payment Method Selection */}
//                             <div className="flex space-x-4">
//                                 <label className="inline-flex items-center">
//                                     <input
//                                         type="radio"
//                                         value="creditCard"
//                                         checked={paymentMethod === 'creditCard'}
//                                         onChange={handlePaymentMethodChange}
//                                         className="form-radio text-teal-600"
//                                     />
//                                     <span className="ml-2 text-teal-600">Credit Card</span>
//                                 </label>
//                                 <label className="inline-flex items-center">
//                                     <input
//                                         type="radio"
//                                         value="upi"
//                                         checked={paymentMethod === 'upi'}
//                                         onChange={handlePaymentMethodChange}
//                                         className="form-radio text-teal-600"
//                                     />
//                                     <span className="ml-2 text-teal-600">UPI</span>
//                                 </label>
//                             </div>

//                             {/* Credit Card Details */}
//                             {paymentMethod === 'creditCard' && (
//                                 <div className="space-y-4">
//                                     <div>
//                                         <label htmlFor="number" className="block text-sm font-medium text-gray-700">Card Number</label>
//                                         <input
//                                             type="text"
//                                             id="number"
//                                             name="number"
//                                             value={creditCardDetails.number}
//                                             onChange={handleCreditCardChange}
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
//                                         <input
//                                             type="text"
//                                             id="expDate"
//                                             name="expDate"
//                                             value={creditCardDetails.expDate}
//                                             onChange={handleCreditCardChange}
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//                                         <div className="relative">
//                                             <input
//                                                 type={creditCardDetails.showCvv ? 'text' : 'password'}
//                                                 id="cvv"
//                                                 name="cvv"
//                                                 value={creditCardDetails.cvv}
//                                                 onChange={handleCreditCardChange}
//                                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => handleToggleVisibility('cvv')}
//                                                 className="absolute inset-y-0 right-0 flex items-center px-3"
//                                             >
//                                                 {creditCardDetails.showCvv ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* UPI Details */}
//                             {paymentMethod === 'upi' && (
//                                 <div className="space-y-4">
//                                     <div>
//                                         <label htmlFor="id" className="block text-sm font-medium text-gray-700">UPI ID</label>
//                                         <input
//                                             type="text"
//                                             id="id"
//                                             name="id"
//                                             value={upiDetails.id}
//                                             onChange={handleUpiChange}
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="pin" className="block text-sm font-medium text-gray-700">UPI PIN</label>
//                                         <div className="relative">
//                                             <input
//                                                 type={upiDetails.showPin ? 'text' : 'password'}
//                                                 id="pin"
//                                                 name="pin"
//                                                 value={upiDetails.pin}
//                                                 onChange={handleUpiChange}
//                                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => handleToggleVisibility('pin')}
//                                                 className="absolute inset-y-0 right-0 flex items-center px-3"
//                                             >
//                                                 {upiDetails.showPin ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Payment Status */}
//                             {paymentStatus && (
//                                 <div className="bg-teal-100 border border-teal-300 text-teal-700 px-4 py-3 rounded relative">
//                                     <strong className="font-bold">Payment Status:</strong> {paymentStatus}
//                                 </div>
//                             )}

//                             {/* Pay Now Button */}
//                             <div className="flex justify-center mt-8">
//                                 <button
//                                     type="submit"
//                                     className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                                 >
//                                     Pay Now
//                                 </button>
//                             </div>
//                         </div>
//                     </form>

//                     {/* Display the bill and generate PDF */}
//                     {bill && (
//                         <div className="mt-8 text-center">
//                             <button
//                                 onClick={generatePDF}
//                                 className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                             >
//                                 Download Receipt
//                             </button>
//                         </div>
//                     )}

//                     {/* Recommended Hotels Card */}
//                     {showRecommended && (
//                         <div className="mt-8">
//                             <RecommendedHotelsCard />
//                         </div>
//                     )}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Payment;
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';
import { FaCreditCard, FaMobileAlt, FaQuoteLeft, FaQuoteRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import RecommendedHotelsCard from './RecommendedHotelsCard'; // Import the new component

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state || {};
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [creditCardDetails, setCreditCardDetails] = useState({ number: '', expDate: '', cvv: '', showCvv: false });
    const [upiDetails, setUpiDetails] = useState({ id: '', pin: '', showPin: false });
    const [bill, setBill] = useState(null);
    const [showRecommended, setShowRecommended] = useState(false); // State to control the visibility of the recommended hotels card

    const roomName = sessionStorage.getItem("roomName");
    const roomType = sessionStorage.getItem("roomType");
    const roomPrice = sessionStorage.getItem("roomPrice");

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        setPaymentStatus(''); // Clear payment status when payment method changes
    };

    const handleCreditCardChange = (e) => {
        let { name, value } = e.target;

        if (name === 'number') {
            // Only allow digits and add spaces
            value = value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ').trim();
        }

        if (name === 'expDate') {
            // Format MM/YY
            value = value.replace(/\D/g, '').slice(0, 4);
            value = value.replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) => (p2 ? `${p1}/${p2}` : p1));
        }

        if (name === 'cvv') {
            // Allow only digits and limit to 4 characters
            value = value.replace(/\D/g, '').slice(0, 4);
        }

        setCreditCardDetails({ ...creditCardDetails, [name]: value });
    };

    const handleUpiChange = (e) => {
        setUpiDetails({ ...upiDetails, [e.target.name]: e.target.value });
    };

    const handleToggleVisibility = (field) => {
        if (field === 'cvv') {
            setCreditCardDetails({ ...creditCardDetails, showCvv: !creditCardDetails.showCvv });
        } else if (field === 'pin') {
            setUpiDetails({ ...upiDetails, showPin: !upiDetails.showPin });
        }
    };

    const validateCreditCard = () => {
        const { number, expDate, cvv } = creditCardDetails;

        // Validate card number (16 digits with spaces allowed)
        if (number.replace(/\s/g, '').length !== 16) {
            alert('Card number must be 16 digits.');
            return false;
        }

        // Validate expiry date (MM/YY)
        const [month, year] = expDate.split('/');
        if (month && (month < 1 || month > 12)) {
            alert('Invalid month in expiry date.');
            return false;
        }
        if (year && year.length !== 2) {
            alert('Expiry year must be 2 digits.');
            return false;
        }

        // Validate CVV (3 or 4 digits)
        if (cvv.length < 3 || cvv.length > 4) {
            alert('CVV must be 3 or 4 digits.');
            return false;
        }

        return true;
    };

    const handlePayment = (e) => {
        e.preventDefault();

        if (paymentMethod === 'creditCard') {
            if (!validateCreditCard()) return;

            setPaymentStatus('Payment successful using Credit Card');
        } else if (paymentMethod === 'upi') {
            if (!upiDetails.id || !upiDetails.pin) {
                alert('Please fill in all UPI details.');
                return;
            }
            setPaymentStatus('Payment successful using UPI');
        } else {
            alert('Please select a payment method.');
            return;
        }

        setBill({
            name: `${formData.firstName} ${formData.lastName}`,
            roomName: formData.roomName,
            roomType: formData.roomType,
            price: formData.price,
            totalGuests: formData.totalGuests,
            checkInDate: formData.checkInDate,
            checkOutDate: formData.checkOutDate,
            paymentMethod: paymentMethod
        });

        setShowRecommended(true); // Show recommended hotels card after payment
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        
        // Add hotel name and logo
        doc.setFont("times", "bolder"); // Setting custom font style
        doc.text(30, 30, 'Taj Hotels');
        
        // Add booking details
        doc.setFontSize(12);
        doc.text(20, 50, `Name: ${bill.name}`);
        doc.text(20, 60, `Room Type: ${bill.roomType}`);
        doc.text(20, 70, `Price: ${bill.price}`);
        doc.text(20, 80, `Total Guests: ${bill.totalGuests}`);
        doc.text(20, 90, `Check-in Date: ${bill.checkInDate}`);
        doc.text(20, 100, `Check-out Date: ${bill.checkOutDate}`);
        doc.text(20, 110, `Payment Method: ${bill.paymentMethod}`);
        
        // Add payment status
        doc.setFontSize(14);
        doc.text(20, 130, `Payment Status: ${paymentStatus}`);
        
        // Save the PDF
        doc.save('payment-receipt.pdf');
    };

    const quotes = [
        "Secure payments build trust, trust builds loyalty.",
        "Your payment security is our top priority.",
        // "Experience luxury with peace of mind.",
        // "We value your trust in our payment process."
    ];

    return (
        <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://page.mysoftinn.com/hs-fs/hubfs/Blog/36382999_l.jpg?width=855&name=36382999_l.jpg)" }}>
            <div className="min-h-screen bg-teal-800 bg-opacity-80 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
                >
                    {/* Quotes */}
                    <div className="text-center text-gray-700">
                        {quotes.map((quote, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                                className="relative py-4"
                            >
                                <FaQuoteLeft className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <p className="text-lg italic">{quote}</p>
                                <FaQuoteRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Go Back or Cancel Booking Button */}
                    <button
                        onClick={() => navigate('/room-cards')}
                        className="absolute top-4 left-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
                    >
                        Go Back
                    </button>

                    <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-6">Secure Payment</h2>
                    <div>
                        <h3>Your Room Details</h3>
                        <p>RoomName: {roomName}</p>
                        <p>RoomType: {roomType}</p>
                        <p>RoomPrice: {roomPrice}</p>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handlePayment}>
                        <div className="space-y-4">
                            {/* Payment Method Selection */}
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="creditCard"
                                        checked={paymentMethod === 'creditCard'}
                                        onChange={handlePaymentMethodChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Credit Card</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="upi"
                                        checked={paymentMethod === 'upi'}
                                        onChange={handlePaymentMethodChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">UPI</span>
                                </label>
                            </div>

                            {/* Credit Card Details */}
                            {paymentMethod === 'creditCard' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                        <input
                                            type="text"
                                            name="number"
                                            value={creditCardDetails.number}
                                            onChange={handleCreditCardChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            maxLength="19"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
                                        <input
                                            type="text"
                                            name="expDate"
                                            value={creditCardDetails.expDate}
                                            onChange={handleCreditCardChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            maxLength="5"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                                        <div className="relative">
                                            <input
                                                type={creditCardDetails.showCvv ? 'text' : 'password'}
                                                name="cvv"
                                                value={creditCardDetails.cvv}
                                                onChange={handleCreditCardChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                maxLength="4"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleToggleVisibility('cvv')}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            >
                                                {creditCardDetails.showCvv ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* UPI Details */}
                            {paymentMethod === 'upi' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">UPI ID</label>
                                        <input
                                            type="text"
                                            name="id"
                                            value={upiDetails.id}
                                            onChange={handleUpiChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">UPI PIN</label>
                                        <div className="relative">
                                            <input
                                                type={upiDetails.showPin ? 'text' : 'password'}
                                                name="pin"
                                                value={upiDetails.pin}
                                                onChange={handleUpiChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                maxLength="6"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleToggleVisibility('pin')}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            >
                                                {upiDetails.showPin ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>

                    {/* Payment Status */}
                    {paymentStatus && (
                        <div className="mt-6 text-center">
                            <h3 className="text-lg font-semibold text-teal-700">{paymentStatus}</h3>
                            {bill && (
                                <button
                                    onClick={generatePDF}
                                    className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
                                >
                                    Download Receipt
                                </button>
                                
                            )}
                            
                        </div>
                    )}

                    {/* Recommended Hotels */}
                    {showRecommended && (
                        <RecommendedHotelsCard /> // Display the RecommendedHotelsCard component
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Payment;
