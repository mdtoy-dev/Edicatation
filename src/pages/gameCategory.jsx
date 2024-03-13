import React from "react";
import { Link } from "react-router-dom";

function GameCategory (){
    const categories = [
        {
            name: "Memory",
            link: "/memory",
        },  {
            name: "Math",
            link: "/math",
        }, {
            name: "Countries",
            link: "/countries",
        }, {
            name: "Animals", 
            link: "/animal",
        }, {
            name: "Capitals", 
            link: "/capitals",
        }
]; 


return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-9/12 m-auto ">
        {categories.map((category, index) => (
            <Link 
                key={index}
                to={category.link}
                className={"h-60 m-6 bg-orange-50 transition ease-in-out delay-150 border border-4 border-orange-400  rounded-lg shadow-md shadow-orange-300 , hover:bg-orange-100 flex justify-center items-center hover:-translate-y-1 hover:scale-110 duration-300 "}
            >
                <h5 className="text-3xl m-auto font-semibold text-orange-600 subpixel-antialiased">{category.name}</h5>
            </Link>
        ))}
    </div>
);
        }


export default GameCategory;
