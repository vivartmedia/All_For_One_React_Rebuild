// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function MagicBall() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const fetchAnswer = async () => {
        if (question.trim() === '') {
            setAnswer("Please ask your question first and try again.");
            return;
        }
        // Adjust the URL to correctly include the question if your API supports it.
        // This example does not send the question to the API due to the placeholder URL.
        const response = await fetch("https://allforone2updates.azurewebsites.net/Magic8Ball/Ask your question and press execute");
        const data = await response.text();
        setAnswer(data);
    };

    const handleKeyDown = async (event) => {
        if (event.key === "Enter" && question.trim() !== '') {
            await fetchAnswer();
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


                
                <h1 className="text-5xl font-bold mb-12">Magic Ball</h1>
                <p className="mb-12 text-3xl md:text-4xl">Ask your question in the field below and press execute</p>
                <input
                    type="text"
                    className="w-64 h-20 justify-center form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                    placeholder="Will I be a rich person one day?"
                    value={question}
                    onChange={handleQuestionChange}
                    onKeyDown={handleKeyDown}
                />
                <p className="mb-4">Please enter your question and then click Execute or press Enter</p>
                <button
                    className="bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10"
                    onClick={fetchAnswer}
                >
                    Execute
                </button>
                <h3 className="text-2xl font-semibold">{answer}</h3>






            </div>
        </div>
    );
};
