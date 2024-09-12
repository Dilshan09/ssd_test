import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut }from '../firebase/auth'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="home relative">
            {/* Header */}
            <header className="header fixed top-0 left-0 w-full bg-gray-900 text-white py-6 z-8 flex items-center">  {/* Added "flex" class for flexbox */}
                <img
                    src="/public/nn.png"
                    alt="Space Explorer Logo"
                    className="inline-block h-25 w-32 mr-4" 
                /> {/* Adjust size as needed */}
                
                <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} 
                    className="text-lg text-white  absolute top-4 right-4" /* Absolute positioning and increased right margin */
                >
                    Logout👽
                </button>
            </header>
            {/* Card Container */}
            <div className="card-container flex flex-col items-center justify-center mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-2 gap-6">
                    <Link className="card flex items-center justify-center bg-blue-500 text-white" to="/nasaphoto"> 
                        See NASA Details! 🚀
                    </Link>
                    <Link className="card flex items-center justify-center bg-blue-500 text-white" to="/marsrover"> 
                        Mars Rover Details! 🛰️
                    </Link>
                    <Link className="card flex items-center justify-center bg-blue-500 text-white" to="/earthphoto"> 
                        See Earth Details! 🌍
                    </Link>
                    <Link className="card flex items-center justify-center bg-blue-500 text-white" to="/epic"> 
                        See EPIC Details! 📸
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer fixed bottom-0 left-0 w-full bg-gray-900 text-white py-2 px-4 flex justify-between items-center z-10">
                <p>Design By @ Praneeth Dilshan! 💖</p>
                <p className="text-right">NASAInspires</p>
            </footer>
        </div>
    );
}
