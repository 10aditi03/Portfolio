import React from "react";
import pic from "../../public/aditi.jpg";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiCss3, SiHtml5 } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {ReactTyped} from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Creative Hub</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm </h1>
              <ReactTyped
                className="text-rose-700 font-bold"
                strings={["ADITI SHARMA"]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify">
              As a dedicated web developer with a passion for creating dynamic and engaging digital experiences, I invite you to explore my curated collection of projects. My journey in web development has equipped me with a solid foundation in HTML, CSS, JavaScript, and React, and has been further enriched by specialized training and hands-on experience. Here, you’ll find a showcase of my work that demonstrates my commitment to combining aesthetics with functionality to deliver impactful solutions. Whether you’re interested in collaborative opportunities or simply want to see what I’ve been working on, I’m excited to share my expertise and vision with you.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/aditi-sharma-8278572a0/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:10aditi03@gmail.com" target="_blank" rel="noopener noreferrer">
                      <FaMailBulk className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/10aditi03" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Download Resume</h1>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center space-x-2 text-black-500 hover:text-black-700"
                >
                  <BsFillPersonLinesFill className="text-2xl cursor-pointer ml-16"/>
                </a>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Actively Engaged In</h1>
                <div className="flex space-x-5">
                  <SiHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiCss3 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Aditi Sharma"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
