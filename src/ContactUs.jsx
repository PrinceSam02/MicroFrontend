// // // import React from 'react';
// // // import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// // // const ContactUs = () => {
// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
// // //             {/* Header */}
// // //             <header className="bg-teal-600 text-white py-6">
// // //                 <div className="container mx-auto px-4">
// // //                     <h1 className="text-4xl font-bold text-center">Contact Us</h1>
// // //                 </div>
// // //             </header>

// // //             {/* Main Content */}
// // //             <main className="container mx-auto px-4 py-12">
// // //                 {/* Contact Information Cards */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // //                     <ContactCard
// // //                         icon={<FaPhone className="text-4xl text-teal-500" />}
// // //                         title="Phone"
// // //                         content="+1 (123) 456-7890"
// // //                     />
// // //                     <ContactCard
// // //                         icon={<FaEnvelope className="text-4xl text-teal-500" />}
// // //                         title="Email"
// // //                         content="contact@tajhotels.com"
// // //                     />
// // //                     <ContactCard
// // //                         icon={<FaMapMarkerAlt className="text-4xl text-teal-500" />}
// // //                         title="Address"
// // //                         content="123 Luxury Avenue, Cityville, State 12345"
// // //                     />
// // //                 </div>

// // //                 {/* Contact Form and Map */}
// // //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // //                     {/* Contact Form */}
// // //                     <div className="bg-white rounded-lg shadow-lg p-8">
// // //                         <h2 className="text-2xl font-semibold mb-6 text-teal-700">Send us a message</h2>
// // //                         <form>
// // //                             <div className="mb-4">
// // //                                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
// // //                                 <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
// // //                             </div>
// // //                             <div className="mb-4">
// // //                                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
// // //                                 <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
// // //                             </div>
// // //                             <div className="mb-4">
// // //                                 <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
// // //                                 <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
// // //                             </div>
// // //                             <div className="mb-4">
// // //                                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
// // //                                 <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required></textarea>
// // //                             </div>
// // //                             <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300">Send Message</button>
// // //                         </form>
// // //                     </div>

// // //                     {/* Map */}
// // //                     <div className="bg-white rounded-lg shadow-lg p-8">
// // //                         <h2 className="text-2xl font-semibold mb-6 text-teal-700">Our Location</h2>
// // //                         <div className="aspect-w-16 aspect-h-9">
// // //                             <iframe
// // //                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412644812704!2d-73.98780568459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621531305461!5m2!1sen!2sus"
// // //                                 width="100%"
// // //                                 height="100%"
// // //                                 style={{ border: 0 }}
// // //                                 allowFullScreen=""
// // //                                 loading="lazy"
// // //                             ></iframe>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Social Media Links */}
// // //                 <div className="mt-12 text-center">
// // //                     <h2 className="text-2xl font-semibold mb-6 text-teal-700">Connect With Us</h2>
// // //                     <div className="flex justify-center space-x-6">
// // //                         <SocialLink href="#" icon={<FaFacebook />} />
// // //                         <SocialLink href="#" icon={<FaTwitter />} />
// // //                         <SocialLink href="#" icon={<FaInstagram />} />
// // //                         <SocialLink href="#" icon={<FaLinkedin />} />
// // //                     </div>
// // //                 </div>
// // //             </main>

// // //             {/* Footer */}
// // //             <footer className="bg-teal-700 text-white py-6 mt-12">
// // //                 <div className="container mx-auto px-4 text-center">
// // //                     <p>&copy; 2023 Taj Hotels. All rights reserved.</p>
// // //                 </div>
// // //             </footer>
// // //         </div>
// // //     );
// // // };

// // // const ContactCard = ({ icon, title, content }) => (
// // //     <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105">
// // //         <div className="mb-4">{icon}</div>
// // //         <h3 className="text-xl font-semibold mb-2 text-teal-700">{title}</h3>
// // //         <p className="text-gray-600">{content}</p>
// // //     </div>
// // // );

// // // const SocialLink = ({ href, icon }) => (
// // //     <a href={href} className="text-teal-600 hover:text-teal-800 text-2xl transition duration-300">
// // //         {icon}
// // //     </a>
// // // );

// // // export default ContactUs;
// // import React, { useState } from 'react';
// // import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// // const ContactUs = () => {
// //     const [isPopupVisible, setIsPopupVisible] = useState(false);

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         setIsPopupVisible(true);
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
// //             {/* Header */}
// //             <header className="bg-teal-600 text-white py-6">
// //                 <div className="container mx-auto px-4">
// //                     <h1 className="text-5xl font-extrabold text-center tracking-wider">Contact Us</h1>
// //                 </div>
// //             </header>

// //             {/* Main Content */}
// //             <main className="container mx-auto px-4 py-12">
// //                 {/* Contact Information Cards */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// //                     <ContactCard
// //                         icon={<FaPhone className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
// //                         title="Phone"
// //                         content="+1 (123) 456-7890"
// //                     />
// //                     <ContactCard
// //                         icon={<FaEnvelope className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
// //                         title="Email"
// //                         content="contact@tajhotels.com"
// //                     />
// //                     <ContactCard
// //                         icon={<FaMapMarkerAlt className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
// //                         title="Address"
// //                         content="123 Luxury Avenue, Cityville, State 12345"
// //                     />
// //                 </div>

// //                 {/* Contact Form and Map */}
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //                     {/* Contact Form */}
// //                     <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
// //                         <h2 className="text-3xl font-semibold mb-6 text-teal-700">Send us a message</h2>
// //                         <form onSubmit={handleSubmit}>
// //                             <div className="mb-4">
// //                                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
// //                                 <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
// //                                 <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
// //                                 <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
// //                                 <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required></textarea>
// //                             </div>
// //                             <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300">Send Message</button>
// //                         </form>
// //                     </div>

// //                     {/* Map */}
// //                     <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
// //                         <h2 className="text-3xl font-semibold mb-6 text-teal-700">Our Location</h2>
// //                         <div className="aspect-w-16 aspect-h-9">
// //                             <iframe
// //                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412644812704!2d-73.98780568459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621531305461!5m2!1sen!2sus"
// //                                 width="100%"
// //                                 height="100%"
// //                                 style={{ border: 0 }}
// //                                 allowFullScreen=""
// //                                 loading="lazy"
// //                             ></iframe>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Social Media Links */}
// //                 <div className="mt-12 text-center">
// //                     <h2 className="text-3xl font-semibold mb-6 text-teal-700">Connect With Us</h2>
// //                     <div className="flex justify-center space-x-6">
// //                         <SocialLink href="#" icon={<FaFacebook />} />
// //                         <SocialLink href="#" icon={<FaTwitter />} />
// //                         <SocialLink href="#" icon={<FaInstagram />} />
// //                         <SocialLink href="#" icon={<FaLinkedin />} />
// //                     </div>
// //                 </div>
// //             </main>

// //             {/* Footer */}
// //             <footer className="bg-teal-700 text-white py-6 mt-12">
// //                 <div className="container mx-auto px-4 text-center">
// //                     <p>&copy; 2023 Taj Hotels. All rights reserved.</p>
// //                 </div>
// //             </footer>

// //             {/* Popup */}
// //             {isPopupVisible && (
// //                 <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
// //                     <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform scale-110 duration-300">
// //                         <h2 className="text-3xl font-semibold mb-4 text-teal-700">Thank You!</h2>
// //                         <p className="text-gray-600 mb-4">Your message has been sent successfully. We appreciate your feedback!</p>
// //                         <button
// //                             onClick={() => setIsPopupVisible(false)}
// //                             className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // const ContactCard = ({ icon, title, content }) => (
// //     <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 duration-300">
// //         <div className="mb-4">{icon}</div>
// //         <h3 className="text-xl font-semibold mb-2 text-teal-700">{title}</h3>
// //         <p className="text-gray-600">{content}</p>
// //     </div>
// // );

// // const SocialLink = ({ href, icon }) => (
// //     <a href={href} className="text-teal-600 hover:text-teal-800 text-3xl transition-transform transform hover:scale-110 duration-300">
// //         {icon}
// //     </a>
// // );

// // export default ContactUs;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const ContactUs = () => {
//     const [isPopupVisible, setIsPopupVisible] = useState(false);
//     const navigate = useNavigate(); // Hook for navigation

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsPopupVisible(true);
//     };

//     const handleClosePopup = () => {
//         setIsPopupVisible(false);
//         navigate('/'); // Navigate to the home page
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
//             {/* Header */}
//             <header className="bg-teal-600 text-white py-6">
//                 <div className="container mx-auto px-4">
//                     <h1 className="text-5xl font-extrabold text-center tracking-wider">Contact Us</h1>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="container mx-auto px-4 py-12">
//                 {/* Contact Information Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                     <ContactCard
//                         icon={<FaPhone className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
//                         title="Phone"
//                         content="+1 (123) 456-7890"
//                     />
//                     <ContactCard
//                         icon={<FaEnvelope className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
//                         title="Email"
//                         content="contact@tajhotels.com"
//                     />
//                     <ContactCard
//                         icon={<FaMapMarkerAlt className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
//                         title="Address"
//                         content="123 Luxury Avenue, Cityville, State 12345"
//                     />
//                 </div>

//                 {/* Contact Form and Map */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                     {/* Contact Form */}
//                     <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
//                         <h2 className="text-3xl font-semibold mb-6 text-teal-700">Send us a message</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//                                 <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                                 <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
//                                 <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
//                                 <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required></textarea>
//                             </div>
//                             <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300">Send Message</button>
//                         </form>
//                     </div>

//                     {/* Map */}
//                     <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
//                         <h2 className="text-3xl font-semibold mb-6 text-teal-700">Our Location</h2>
//                         <div className="aspect-w-16 aspect-h-9">
//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412644812704!2d-73.98780568459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621531305461!5m2!1sen!2sus"
//                                 width="100%"
//                                 height="100%"
//                                 style={{ border: 0 }}
//                                 allowFullScreen=""
//                                 loading="lazy"
//                             ></iframe>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Social Media Links */}
//                 <div className="mt-12 text-center">
//                     <h2 className="text-3xl font-semibold mb-6 text-teal-700">Connect With Us</h2>
//                     <div className="flex justify-center space-x-6">
//                         <SocialLink href="#" icon={<FaFacebook />} />
//                         <SocialLink href="#" icon={<FaTwitter />} />
//                         <SocialLink href="#" icon={<FaInstagram />} />
//                         <SocialLink href="#" icon={<FaLinkedin />} />
//                     </div>
//                 </div>
//             </main>

//             {/* Footer */}
//             <footer className="bg-teal-700 text-white py-6 mt-12">
//                 <div className="container mx-auto px-4 text-center">
//                     <p>&copy; 2023 Taj Hotels. All rights reserved.</p>
//                 </div>
//             </footer>

//             {/* Popup */}
//             {isPopupVisible && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//                     <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform scale-110 duration-300">
//                         <h2 className="text-3xl font-semibold mb-4 text-teal-700">Thank You!</h2>
//                         <p className="text-gray-600 mb-4">Your message has been sent successfully. We appreciate your feedback!</p>
//                         <button
//                             onClick={handleClosePopup}
//                             className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// const ContactCard = ({ icon, title, content }) => (
//     <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 duration-300">
//         <div className="mb-4">{icon}</div>
//         <h3 className="text-xl font-semibold mb-2 text-teal-700">{title}</h3>
//         <p className="text-gray-600">{content}</p>
//     </div>
// );

// const SocialLink = ({ href, icon }) => (
//     <a href={href} className="text-teal-600 hover:text-teal-800 text-3xl transition-transform transform hover:scale-110 duration-300">
//         {icon}
//     </a>
// );

// export default ContactUs;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
            {/* Header */}
            <header className="bg-teal-600 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-extrabold text-center tracking-wider">Contact Us</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <ContactCard
                        icon={<FaPhone className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
                        title="Phone"
                        content="+1 (123) 456-7890"
                    />
                    <ContactCard
                        icon={<FaEnvelope className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
                        title="Email"
                        content="contact@tajhotels.com"
                    />
                    <ContactCard
                        icon={<FaMapMarkerAlt className="text-5xl text-teal-600 transform transition-transform duration-300 hover:scale-110" />}
                        title="Address"
                        content="123 Luxury Avenue, Cityville, State 12345"
                    />
                </div>

                {/* Contact Form and Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow duration-300" required></textarea>
                            </div>
                            <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300">Send Message</button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Our Location</h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412644812704!2d-73.98780568459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621531305461!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-700">Connect With Us</h2>
                    <div className="flex justify-center space-x-6">
                        <SocialLink href="#" icon={<FaFacebook />} />
                        <SocialLink href="#" icon={<FaTwitter />} />
                        <SocialLink href="#" icon={<FaInstagram />} />
                        <SocialLink href="#" icon={<FaLinkedin />} />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-teal-700 text-white py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 Taj Hotels. All rights reserved.</p>
                </div>
            </footer>

            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform scale-110 duration-300">
                        <h2 className="text-3xl font-semibold mb-4 text-teal-700">Thank You!</h2>
                        <p className="text-gray-600 mb-4">Your message has been sent successfully. We appreciate your feedback!</p>
                        <button
                            onClick={handleClosePopup}
                            className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const ContactCard = ({ icon, title, content }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 duration-300">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-teal-700">{title}</h3>
        <p className="text-gray-600">{content}</p>
    </div>
);

const SocialLink = ({ href, icon }) => (
    <a href={href} className="text-teal-600 hover:text-teal-800 text-3xl transition-transform transform hover:scale-110 duration-300">
        {icon}
    </a>
);

export default ContactUs;
