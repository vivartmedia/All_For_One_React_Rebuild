// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function MadLib() {

    const [inputs, setInputs] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
    });
    const [sentence, setSentence] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const generateSentence = async () => {
        const { input1, input2, input3, input4, input5, input6, input7, input8, input9, input10 } = inputs;
        const response = await fetch(`https://allforone2updates.azurewebsites.net/MadLib/Madlib/${input1}/${input2}/${input3}/${input4}/${input5}/${input6}/${input7}/${input8}/${input9}/${input10}`);
        let data = await response.text();
        setSentence(data);
    };

    const placeholders = ["sunny", "scientist", "thrilling", "backpack", "dog", "Max", "forest", "crystal", "invisibility", "daunting"];
    const labels = ["Adjective", "Noun", "Adjective", "Noun", "Animal", "Name", "Place", "Object", "Superpower", "Adjective"];



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


                <p className="mb-4 md:mb-8 text-2xl md:text-3xl text-center">Fill out the following empty fields to create a sentence from your words</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:w-full max-w-6xl px-4 justify-items-center md:justify-items-stretch mx-auto">
                    {labels.map((label, index) => (
                        <div className="flex-col" key={index}>
                            <p>{label}</p>
                            <input
                                type="text"
                                className="w-36 h-14 mr-6 justify-center form-input px-4 py-2 border rounded-md mb-4 center-placeholder"
                                placeholder={placeholders[index]}
                                name={`input${index + 1}`}
                                value={inputs[`input${index + 1}`]}
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
                </div>
                <p className="mb-8 md:text-2xl px-10 text-center">Please press enter to get the full sentence</p>
                <button
                    className="bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-4 md:mb-10"
                    onClick={generateSentence}
                >
                    Create Sentence
                </button>
                <h3 className="max-w-6xl mx-auto text-center text-2xl md:text-2xl font-semibold mb-20">{sentence}</h3>




            </div>
        </div>
    );
};



