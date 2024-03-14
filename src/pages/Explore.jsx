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
    }

]



return (

    <div className="grid grid-cols-3">
        <div className="grid grid-cols-1">
            <div className="w-9/12">
            <h5 className="text-3xl mx-20 p-4 font-semibold text-center text-orange-600 bg-cyan-50 border border-4 border-cyan-50 rounded-lg shadow-lg shadow-cyan-300 subpixel-antialiased">Games</h5>
            {games.map((game, index) => (
            <Link 
                key={index}
                to={game.link}
                className={"h-36 flex m-6 bg-orange-50 transition ease-in-out delay-150 border border-4 border-orange-50 rounded-lg shadow-md shadow-orange-300 , hover:bg-orange-100 hover:border-orange-300 hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-2xl m-auto font-semibold text-cyan-600 subpixel-antialiased">{game.name}</h5>
            </Link>
            
             ))}
            </div>
        </div>
        <div className="grid grid-cols-1">
        <div className="w-9/12">
            <h5 className="text-3xl mx-20 p-4 font-semibold text-center text-orange-600 bg-cyan-50 border border-4 border-cyan-50 rounded-lg shadow-lg shadow-cyan-300 subpixel-antialiased">Quizes</h5>
            {quizes.map((quiz, index) => (
            <Link 
                key={index}
                to={quiz.link}
                className={"h-36 flex m-6 bg-orange-50 transition ease-in-out delay-150 border border-4 border-orange-50  rounded-lg shadow-md shadow-orange-300 , hover:bg-orange-100 hover:border-orange-300 hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-2xl m-auto font-semibold text-cyan-600 subpixel-antialiased">{quiz.name}</h5>
          
            </Link>
             ))}
             </div>
        </div>
        <div className="grid grid-cols-1">
        <div className="w-9/12">
        <h5 className="text-3xl mx-20 p-4 font-semibold text-center text-orange-600 bg-cyan-50 border border-4 border-cyan-50 rounded-lg shadow-lg shadow-cyan-300 subpixel-antialiased">Videos</h5>
        {videos.map((video, index) => (
            <Link 
                key={index}
                to={video.link}
                className={"h-36 flex m-6 bg-orange-50 transition ease-in-out delay-150 border border-4 border-orange-50  rounded-lg shadow-md shadow-orange-300 , hover:bg-orange-100 hover:border-orange-300 hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-2xl m-auto font-semibold text-cyan-600 subpixel-antialiased">{video.name}</h5>
            </Link>
             ))}
        </div>
        </div>

    </div>
);
//     // <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-9/12 m-auto ">
//     //     {categories.map((category, index) => (
//     //         <Link 
//     //             key={index}
//     //             to={category.link}
//     //             className={"h-60 m-6 bg-orange-50 transition ease-in-out delay-150 border border-4 border-orange-400  rounded-lg shadow-md shadow-orange-300 , hover:bg-orange-100 flex justify-center items-center hover:-translate-y-1 hover:scale-110 duration-300 "}
//     //         >
//     //             <h5 className="text-3xl m-auto font-semibold text-orange-600 subpixel-antialiased">{category.name}</h5>
//     //         </Link>
//     //     ))}
//     // </div>
// 
        }


export default Explore;
