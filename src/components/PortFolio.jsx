import React from "react";
import fpage from "../../public/FrontPage.png";
import quiz from "../../public/QuizApp.png";
import ttt from "../../public/TicTacToe.png";
import trvl from "../../public/TravelWeb.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: ttt,
      name: "Tic Tac Toe",
      github: "https://github.com/10aditi03/TicTacToe", 
      desc: "A simple tic tac toe game made using HTML,CSS and Javascript with winner and reset feature. "
    },
    {
      id: 2,
      logo: quiz,
      name: "Quiz App",
      github: "https://github.com/10aditi03/QuizApp", 
      desc: "The Quiz App is a web application built with React, designed to offer a dynamic quiz experience. "
    },
    {
      id: 3,
      logo: fpage,
      name: "Portfolio Website",
      github: "https://github.com/10aditi03/Portfolio", 
      desc: "Explore my portfolio, featuring projects that demonstrate my skills in web development."
    },
    {
      id: 4,
      logo: trvl,
      name: "Traveller",
      github: "https://github.com/10aditi03/Traveller", 
      desc: " A responsive travel website to book tickets and explore various places to visit."
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, github, desc }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[290px] h-[120px] p-1 border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{desc}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-rose-500 hover:bg-rose-500 text-white font-bold px-4 py-2 rounded">
                  Demo
                </button>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-rose-700 hover:bg-rose-800 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
