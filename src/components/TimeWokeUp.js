// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function TimeWokeUp() {

    const [name, setName] = useState('');
    const [timeWokeUp, setTimeWokeUp] = useState('');
    const [result, setResult] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTimeWokeUpChange = (event) => {
        setTimeWokeUp(event.target.value);
    };

    const handleSubmit = async () => {
        const response = await fetch(`https://allforone2updates.azurewebsites.net/TimeYouWokeUp/Questions2Answers/${name}/${timeWokeUp}`);
        let data = await response.text();
        if (data.includes("you woke up at ")) {
            setResult(data);
        } else {
            setResult(`Invalid inputs: ${name} / ${timeWokeUp}`);
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


                
                <h1 className="mt-4 text-2xl md:text-4xl font-bold mb-5 md:mb-16">What Time Did You Wake Up?</h1>
                <p className="mb-4 md:mb-8 text-xl md:text-2xl">Fill out the field below</p>
                <div>
                <input
                    type="text"
                    className="w-36 h-14 mr-6 form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                    placeholder="Your name"
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    className="w-36 h-14 form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                    placeholder="Time woke up"
                    value={timeWokeUp}
                    onChange={handleTimeWokeUpChange}
                    />
                </div>
                <p className="mb-8 md:text-2xl">Please enter your name and what time you woke up today</p>
                <button
                    className="bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10"
                    onClick={handleSubmit}
                >
                    Wake Up Time
                </button>
                <h3 className="text-2xl font-semibold">{result}</h3>
          





            </div>
        </div>
    );
};
