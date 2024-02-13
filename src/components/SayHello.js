// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function SayHello() {

    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const fetchGreeting = async (name) => {
        if (name.trim() === '') {
            setGreeting("Please enter a name and try again.");
            return;
        }
        const response = await fetch(`https://allforone2updates.azurewebsites.net/SayHelloEndPoint/SayHelloApi/${name}`);
        const data = await response.text();
        setGreeting(data);
    };

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleButtonClick = () => {
        fetchGreeting(name);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            fetchGreeting(name);
        }
    };



    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/Bg.png)' }}>
            {/* Overlay container for positioning the button in the top-left */}
            <div className="absolute top-10 left-10 p-5 md:p-10">
                <Link to="/">
                    <button type="button" className="w-44 text-2xl px-6 py-3.5 font-medium text-white inline-flex justify-center bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                        Home
                    </button>
                </Link>
            </div>

            {/* Additional content can be added here if needed, centered or otherwise */}
            <div className="flex flex-col justify-center items-center min-h-screen">
                {/* Your central content here */}
   
           
                <h1 className="text-5xl font-bold mb-12">Say Hello</h1>
                <p className="mb-12 text-3xl md:text-4xl">Enter your name to get a personal greeting</p>
                <input
                    required
                    type="text"
                    className="justify-center form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                    placeholder="Your name"
                    value={name}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <p className="mb-4">Please enter your name and press the button</p>
                <button
                    className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-3 px-5 rounded mb-10"
                    onClick={handleButtonClick}
                >
                    Your Greeting
                </button>
                <h3 className="text-2xl font-semibold">{greeting}</h3>
       
        




                
            </div>
        </div>
    );
};
