import React from "react";
import html from "../../public/html5.jpg";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import ReactJs from '../../public/react.jpg';
import tailwind from '../../public/tailwind.jpg';
import mongodb from "../../public/mongodb.jpg";
import git from "../../public/git.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: ReactJs,
      name: "ReactJs",
    },
    {
      id: 5,
      logo: tailwind,
      name: "TailWind",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: git,
      name: "Git",
    },

  ];
  return (
    <div
      name="Proficiency"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
      <h1 className="text-3xl font-bold mb-5">Proficiency</h1>
    

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
