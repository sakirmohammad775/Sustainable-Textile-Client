import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between items-center mb-8">
                    {/* Logo and Tagline */}
                    <div>
                        <h1 className="text-2xl font-bold">LOGO</h1>
                        <p className="text-gray-400 text-sm">Sologan Company</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="font-bold mb-2">Weebly Themes</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Pre-Sale FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Submit a Ticket
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold mb-2">Services</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Theme Tweak
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold mb-2">Showcase</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        WidgetKit
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold mb-2">About Us</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Affiliates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-6" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-rss"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>

                    {/* Copyright Notice */}
                    <p className="text-gray-400">
                        &copy; Copyright. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
