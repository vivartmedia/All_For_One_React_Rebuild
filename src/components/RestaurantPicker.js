// import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your Tailwind CSS
import React, { useState } from 'react';

export default function RestaurantPicker() {

    const [restaurantSuggestion, setRestaurantSuggestion] = useState('');

    const fetchRestaurantSuggestion = async (firstNumber) => {
        // Assuming the endpoint URL is corrected and operational
        const response = await fetch("https://allforone2updates.azurewebsites.net/RestaurantPicker/Enter restaurant number: 1-Fast food; 2-Asian Restaurants; 3-Latin American Restaurants/" + firstNumber);
        const data = await response.text();
        setRestaurantSuggestion(data);
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


                <h1 className="md:text-5xl text-3xl font-bold mb-12">Restaurant Picker</h1>
                <p className="mb-12 text-2xl md:text-3xl">Please select: 1-Fast food; 2-Asian Restaurants; 3-Latinos Restaurant</p>
                <p className="mb-4">Please press one of the 3 restaurant’s categories below to get a suggestion of a restaurant you might like.</p>
                <div className="flex justify-center gap-4 md:gap-8">
                    <button onClick={() => fetchRestaurantSuggestion(1)} className="md:w-32 w-24 h-10 text-xs md:text-sm bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10">
                        Fast Food
                    </button>
                    <button onClick={() => fetchRestaurantSuggestion(2)} className="md:w-32 w-24  h-10 text-xs md:text-sm bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10">
                        Asian
                    </button>
                    <button onClick={() => fetchRestaurantSuggestion(3)} className="md:w-32 w-24  h-10 text-xs md:text-sm bg-fuchsia-700 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mb-10">
                        Latinos
                    </button>
                </div>
                <h3 className="md:text-2xl text-base font-semibold">{restaurantSuggestion}</h3>





            </div>
        </div>
    );
};
