import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Assuming this path is correct for your Tailwind CSS build output

export default function HomePageComponent () {
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/Bg.png)' }}>
            <div className="flex flex-col justify-center items-center min-h-screen">
                
                <h1 className="text-5xl font-poppins mb-10 md:mb-24 mt-0 md:mt-0">All For One</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl px-4 justify-items-center md:justify-items-stretch mx-10">
                    {/* Buttons and Links here */}
                    <Link to="SayHello">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Say Hello
                        </button>
                    </Link>
                    <Link to="Add2Numbers">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Add 2 Numbers
                        </button>
                    </Link>
                    <Link to="Compare2Numbers">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Compare 2 numbers
                        </button>
                    </Link>
                    <Link to="TimeWokeUp">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Time woke up
                        </button>
                    </Link>
                    <Link to="MadLib">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            MadLib
                        </button>
                    </Link>
                    <Link to="OddOrEven">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Odd or Even
                        </button>
                    </Link>
                    <Link to="ReverseAlphaNumeric">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Reverse alphaNumeri
                        </button>
                    </Link>
                    <Link to="ReverseNumber">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Revers a Number
                        </button>
                    </Link><Link to="RestaurantPicker">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Restaurant picker
                        </button>
                    </Link>
                    <Link to="MagicBall">
                        <button type="button" className="w-80 text-2xl px-6 py-3.5 font-medium text-white justify-center inline-flex items-center bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                            Magic Ball
                        </button>
                    </Link>
                    {/* Repeat for other buttons */}
                </div>
            </div>
        </div>

        
        
    );
};



