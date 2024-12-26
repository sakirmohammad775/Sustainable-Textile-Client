import React from 'react';

const ContactUs = () => {
    return (
        <><div className='pt-20'>
            <section className="flex flex-col lg:flex-row items-stretch min-h-screen bg-gray-900 text-white">
                {/* Left Section: Map */}
                <div className="flex-1 relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://via.placeholder.com/800x600')`, // Replace with your map image URL
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-lg underline hover:text-gray-300"
                        >
                            Look at Google Maps
                        </a>
                    </div>
                    <h2 className="absolute bottom-10 left-10 text-4xl font-bold">Contact us</h2>
                </div>

                {/* Right Section: Feedback Form */}
                <div className="flex-1 bg-white text-gray-800 p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-6">Feedback Form</h3>
                    <form className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-gray-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm mb-2">E-mail</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-gray-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm mb-2">Phone</label>
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-gray-500"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm mb-2">Message</label>
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-gray-500"
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="block text-sm mb-2">Upload File</label>
                            <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn bg-black text-white hover:bg-gray-700 w-full py-3 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
        </>
    );
};

export default ContactUs;
