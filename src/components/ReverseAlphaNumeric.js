// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function ReverseAlphanumeric() {

    const [inputText, setInputText] = useState('');
    const [reversedText, setReversedText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const reverseText = async () => {
        const response = await fetch(`https://allforone2updates.azurewebsites.net/ReversAlfaNum/ReversAlfaNum/${inputText}`);
        const data = await response.text();
        setReversedText(data);
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


                

                <h1 className="md:text-5xl text-2xl font-bold mb-12">Reverse an Alphanumeric String</h1>
                <p className="mb-12 text-2xl md:text-3xl">Please input an alphanumeric word to reverse it</p>
                <input
                    type="text"
                    className="justify-center form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                    placeholder="abcdefgh12345"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <p className="mb-4">Please enter your letters and numbers and then press the button below</p>
                <button
                    className="bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10"
                    onClick={reverseText}
                >
                    Reverse AlNum
                </button>
                <h3 className="text-2xl font-semibold">{reversedText}</h3>





            </div>
        </div>
    );
};
