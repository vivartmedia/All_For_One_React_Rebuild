// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function ReverseNumber() {

    const [number, setNumber] = useState('');
    const [reversedNumber, setReversedNumber] = useState('');

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const reverseNumber = async () => {
        const response = await fetch(`https://allforone2updates.azurewebsites.net/ReversNum/ReversNumber/${number}`);
        const data = await response.text();
        setReversedNumber(data);
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


                <h1 className="md:text-5xl text-3xl font-bold mb-12">Reverse a Number</h1>
                <p className="mb-12 text-2xl md:text-4xl">Please input a number to reverse it</p>
                <input
                    type="text"
                    className="justify-center form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                    placeholder="123456789"
                    value={number}
                    onChange={handleNumberChange}
                />
                <p className="mb-4">Please enter numbers and then press the button below</p>
                <button
                    className="bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10"
                    onClick={reverseNumber}
                >
                    Reverse Number
                </button>
                <h3 className="text-2xl font-semibold">{reversedNumber}</h3>






            </div>
        </div>
    );
};
