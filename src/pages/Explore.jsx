import React, { useState } from "react";
import { Link } from "react-router-dom";


function Explore (){
    
    const games = [
    { 
        name: "Memory", 
        link: "/memory" 
    }, { 
        name: "Countries", 
        link: "/countries",
    }
]
    
    const quizes = [
    {
        name: "Math",
        link: "/quiz/Math",
    }, {
        name: "Capitals",
        link: "/quiz/CountryCapitals",
    }, {
        name: "Animals", 
        link: "/quiz/Animals",
    }, 
]
    const videos = [
    {
        name: "AnimalSounds",
        link: "/videos/animalSounds"
    },
    {
        name: "Learn Colours",
        link:"/videos/colours",
    },
    {
        name:'Nursery Rhymes',
        link:"/videos/rhymes"
    },
    {
        name:'Birds',
        link:"/videos/birds"
    },
    {
        name:'Numbers',
        link:"/videos/numbers"
    },
    {
        name:'Phonics',
        link:"/videos/phonics"
    }

]



return (

    <div className="h-screen grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-1">
            <div className="p-6">
            <h5 className="h-16 mx-6 my-2 p-2 font-semibold text-3xl text-center text-lime-50 bg-green-500 border border-4 border-yellow-400 rounded-lg shadow-md shadow-cyan-700 subpixel-antialiased">Games</h5>
            {games.map((game, index) => (
            <Link 
                key={index}
                to={game.link}
                className={"w-3/5 h-14 md:h-36 m-auto my-6 flex bg-red-400 border border-4 border-red-500 rounded-lg shadow-md shadow-red-600 transition ease-in-out delay-150, hover:bg-orange-500 hover:border-red-600 hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-xl text-orange-100 m-auto font-semibold drop-shadow-2xl subpixel-antialiased">{game.name}</h5>
            </Link>
            
             ))}
            </div>
        </div>
        <div className="grid grid-cols-1">
        <div className="p-6">
            <h5 className="h-16 mx-6 my-2 p-2 font-semibold text-3xl text-center text-amber-50 bg-amber-500 border border-4 border-yellow-400 rounded-lg shadow-md shadow-cyan-700 subpixel-antialiased">Quizes</h5>
            {quizes.map((quiz, index) => (
            <Link 
                key={index}
                to={quiz.link}
                className={"w-3/5 h-14 m-auto my-6 md:h-36 flex bg-red-400 border border-4 border-red-500 rounded-lg shadow-md shadow-red-600 transition ease-in-out delay-150, hover:bg-orange-500 hover:border-red-600 hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-xl text-orange-100 m-auto font-semibold drop-shadow-2xl subpixel-antialiased">{quiz.name}</h5>
          
            </Link>
             ))}
             </div>
        </div>
        <div className="grid grid-cols-1">
        <div className="p-6">
        <h5 className="h-16 mx-6 my-2 p-2 font-semibold text-3xl text-center text-purple-50 bg-purple-500 border border-4 border-yellow-400 rounded-lg shadow-md shadow-cyan-700 subpixel-antialiased">Videos</h5>
        {videos.map((video, index) => (
            <Link 
                key={index}
                to={video.link}
                className={"h-16  mx-6 my-2 p-2 flex bg-red-400 border border-4 border-red-500 rounded-lg shadow-md shadow-red-600 transition ease-in-out delay-150, hover:bg-orange-500 hover:border-red-600 hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-xl text-orange-100 m-auto font-semibold drop-shadow-2xl subpixel-antialiased">{video.name}</h5>
            </Link>
             ))}
        </div>
        </div>

    </div>
);
        }


export default Explore;
