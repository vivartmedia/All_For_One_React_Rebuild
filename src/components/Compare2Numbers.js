// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function CompareTwoNumbers() {

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [comparisonResult, setComparisonResult] = useState('');

    const handleFirstNumberChange = (event) => {
        setFirstNumber(event.target.value);
    };

    const handleSecondNumberChange = (event) => {
        setSecondNumber(event.target.value);
    };

    const compareNumbers = async () => {
        const response = await fetch("https://allforone2updates.azurewebsites.net/Compair2Numbers/GreaterOrLess/" + firstNumber + "/" + secondNumber);
        let data = await response.text();
        if (data.includes(" is equal to ") || data.includes("is less than") || data.includes(" is greater than ")) {
            setComparisonResult(data);
        } else {
            setComparisonResult(`Invalid inputs: ${firstNumber} / ${secondNumber}`);
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

                <div className="text-center">
                    <h1 className="mt-4 text-3xl md:text-5xl font-bold mb-10 md:mb-16">Compare 2 Numbers</h1>
                    <p className="mb-4 md:mb-8 text-2xl md:text-4xl">Let’s compare 2 Numbers</p>
                    <div>
                        <input
                            type="text"
                            className="w-36 h-14 mr-6 form-input px-4 py-2 border rounded-md mb-4"
                            placeholder="First number"
                            value={firstNumber}
                            onChange={handleFirstNumberChange}
                        />
                        <input
                            type="text"
                            className="w-36 h-14 form-input px-4 py-2 border rounded-md mb-4"
                            placeholder="Second number"
                            value={secondNumber}
                            onChange={handleSecondNumberChange}
                        />
                    </div>
                    <p className="mb-8 md:text-2xl">Please enter 2 numbers and press the button below to compare the numbers you added</p>
                    <button
                        className="bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10"
                        onClick={compareNumbers}
                    >
                        Compare
                    </button>
                    <h3 className="text-2xl font-semibold">{comparisonResult}</h3>
                </div>
           





            </div>
        </div>
    );
};
