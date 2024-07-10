import "./App.css";
import Porfile from "./assets/portfolio_ai.jpg";
import Contact from './Contact'
import Portfolio from "./assets/portfolio.jpg";
import jumble from "./assets/jumble.jpg";
import phonebook from "./assets/phonebook.jpg";
import festival from "./assets/festival.jpg";
import ta from "./assets/ta.jpg";
import rent from "./assets/rent.jpg";
import Burger from "./assets/Burger.jpg";
import BP from "./assets/BP.jpg";
//import Facebook from "./assets/facebook.svg";
//import LinkedIn from "./assets/linkedin.svg";
//import Instagram from "./assets/instagram.svg";
//import HTML from './assets/html.png';
//import CSS from './assets/css.png';
//import JavaScript from './assets/javascript.png';
import ReactImg from './assets/react.png';
import Node from './assets/node.png';
//import FireBase from './assets/firebase.png';
//import GitHub from './assets/github.png';
//import Tailwind from './assets/tailwind.png';
import Express from './assets/express.png';
import Mongo from './assets/mongo.png';

import ArrowDown from "./assets/arrow-down.svg";
import {
  //FaBars,
  //FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp
  //FaFacebook,
  //FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TbAccessibleOff } from "react-icons/tb";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [arrowRotated, setArrowRotated] = useState(false);

  const predefinedMessage = "How can I help you?";
  const encodedMessage = encodeURIComponent(predefinedMessage);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  useEffect(() => {
    const handleNavigation = () => {
      setArrowRotated(false);
    };

     // Adding event listeners for navigation links
     const navLinks = document.querySelectorAll("a");
     navLinks.forEach((link) => {
       link.addEventListener("click", handleNavigation);
     });
 
     return () => {
       navLinks.forEach((link) => {
         link.removeEventListener("click", handleNavigation);
       });
     };
   }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setArrowRotated(true);
    setTimeout(() => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }, 300); // 300ms delay for the rotation animation
  };

  return (
    <div className="max-w-4xl m-auto relative flex flex-col items-center ">
      <header className={`${scrolling ? 'border-b border-[#d7cdc0]' : ''} fixed left-0 right-0 top-0 z-30`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-[#74889c]">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-normal text-2xl text-[#43513a]">Juha Niemikallio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-[#d7cdc0] hover:text-[#FFFFFF] cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-[#d7cdc0] hover:text-[#FFFFFF] cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-[#d7cdc0] hover:text-[#FFFFFF] cursor-pointer">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#d7cdc0] hover:text-[#FFFFFF] cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>


     
            </div>
          </div>
        </div>
      </header>

      <main className="relative mt-28">
      <section className="flex flex-col-reverse sm:flex-row items-center w-full">
 
          <div className="container m-auto px-4 pb-8 sm:pt-20 bg-[#74889c] text-center sm:text-left">
            <div className="mb-4 sm:mb-0">
              <h2 className="font-normal text-4xl text-[#93a29d5]">Hello, I'm Juha,</h2>
              <h2 className="font-normal text-4xl mt-1 gradient-text">Fullstack developer</h2>
              <p className="mt-4 text-black">
                I am a beginner software developer who is currently focused on creating websites and applications
                using technologies such as react, mern stack, firebase, etc. I also like to take care of
                app publishing and SEO optimization. Feel free to contact me if you have a project you want to discuss.
              </p>
              <div className="text-center sm:text-left">
              <a href="#projects" className="inline-block" onClick={handleButtonClick}>
                <button
                  className="px-4 shadow-[#808080] shadow py-4 mt-6 group
                    flex items-center border border-[#d7cdc0] rounded-md
                    text-[#93a29d5] hover:bg-[#8394a4] hover:border-[#FFFFFF]"
                >
                  Checkout my works
                  <span
                    className={`inline-block transition-transform duration-300 ${arrowRotated ? "rotate-90" : ""}`}
                  >
                    <HiArrowNarrowRight className="text-xl ml-1 mt-0 text-[#d7cdc0]" />
                  </span>
                </button>
              </a>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 mb-8 sm:mb-0 sm:ml-8">
            <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] 
                            after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40

                            before:bg-[url('./large-long.png')] before:bg-contain before:block before:bg-no-repeat
                            before:w-[220px] before:h-[220px] before:absolute before:bottom-6 before:-right-16">
              <img src={Porfile} className="mt-10 relative z-20 w-[320px] h-[320px] m-auto sm:w-[550px] sm:h-[350px] rounded-full" />
            </div>
          </div>
        </section>

        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            {/*<h2 className="text-2xl font-semibold">These are the technologies i work with</h2>*/}
            <div className="mt-14">
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                  <p className='my-4'>EXPRESS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>          
             </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-normal text-[#43513a]">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-normal text-[#43513a]">React</h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#43513a]">TailwindCSS</h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#43513a]">
                    MongoDB
                  </h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>
              <div className="mt-8">
              <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#43513a]">NodeJS</h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>



               
                <span className="w-65% h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>
          
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#43513a]">Express</h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>
                <span className="w-65% h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>

              <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-[#43513a]">AWS</h2>
                <p className="text-[#9C749C]">Advanced</p>
              </div>
              <span className="w-65% h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>


              <div className="mt-8">
             <div className="flex justify-between items-center">
               <h2 className="font-semibold text-[#43513a]">Git / Github</h2>
               <p className="text-[#9C749C]">Advanced</p>
             </div>
             <span className="w-65% h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
             </div>
          
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#43513a]">Firebase</h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>
                <span className="w-65% h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-[#43513a]">Render</h2>
                  <p className="text-[#9C749C]">Advanced</p>
                </div>
                <span className="w-65% h-2 mt-2 bg-gradient-to-t from-[#9C749C] to-[#749C74] block rounded-md" />
              </div>
          
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-normal text-[#43513a]">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="text-[#43513a] font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                 UI / UX design
                </p>
              </div>
              <div>
                <p className="text-[#43513a] font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 english
                </p>
              </div>
              <div>
                <p className="text-[#43513a] font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Mindfullness
                </p>
              </div>
             
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
            <div>
                <p className="text-[#43513a] font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Video editing
                </p>
              </div>
              <div>
                <p className="text-[#43513a] font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Producing music
                </p>
              </div>
              <div>
                <p className="text-[#43513a] font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  and much more ...
                </p>
              </div>
            
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold text-[#43513a]">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={jumble} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                Online store for used vinyl records focused on 50s American music.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  MERN Stack (MongoDB, Express, React, NodeJS) 
                  with responsive Bootstrap CSS layout for E-commerce. 
                  fully functional Admin dashboard 
                  and order management with SendGrid email and PayPal/Braintree payment management system.
                </p>
                <div className="flex mt-12 gap-2">
                  {/*<button className="flex-1 text-sm py-3 bg-gradient-to-t from-[#376B2F] rounded-full to-[#6B632F] hover:from-blue-700 hover:to-cyan-700">*/}
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                  <a className='flex justify-between items-center w-full pl-10 text-gray-300' href='https://ezz24.onrender.com'>
                    Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={rent} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Real estate E-commerce app.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  MERN Stack (MongoDB, Express, React, NodeJS) 
                  with responsive TailwindCSS layout for Real estate E-commerce. 
                  Complete admin dashboard for brokers with multiple image uploads, Google maps / Google places integration,  
                  and admin dashboard with AWS SES management system.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={BP} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">  
                Free blood pressure and heart rate monitoring application.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  React / Firebase App with responsive SASS layout. Google Auth authentication.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                    <a className='flex justify-between items-center w-full pl-10 text-gray-300' href='https://verenpaine-mitta.web.app/'>
                    Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={Burger} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                 Hamburger Clicker App.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                 School project made with React and responsive CSS layout.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                   
                    <a className='flex justify-between items-center w-full pl-10 text-gray-300' href='https://burgerclicker-accd2.web.app/'>
                    Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={Portfolio} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">  
                 Portfolito website.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  React with responsive TailwindCSS layout. 
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={ta} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                 Association or company website with a database.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  PHP, CSS with MariaDB database. Customers can log in and register for events.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={festival} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">  
                Fully responsive music festival website / mern-stack.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  HTML with responsive TailwindCSS layout. 
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            

                <div className="border border-[#d7cdc0] rounded-md p-5 flex-1">
                <img src={phonebook} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">  
                 Mern stack phonebook. Helsinki university Fullstack open course project.
                </h3>
                <p className="text-[#d7cdc0] text-sm mt-2">
                  Mern stack with jwt authentication. 
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full bg-[#74889c]  hover:from-blue-700 hover:to-cyan-700">
                  <a className='flex justify-between items-center w-full pl-10 text-gray-300' href='https://phonebook24.onrender.com/'>
                    Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border border-[#d7cdc0] rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Technoglies section */}






        

    
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold text-[#43513a]">My journey to web development</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  BearIT ITC-Camp with a focus on Fullstack development. Two Udemy certificates in React, NodeJS, MongoDB, and Express + two more certificates in Agile and Git.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p> 
                 In the fall of 2023, I graduated from Sasky Huittinen 
                 adult education institution with a bachelor's degree in Computer Science, 
                 Software developer / Fullstack developer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                 I am starting self-study of website development with the help of MOOC courses of the Open University of Helsinki (e.g. Full Stack open) 
                 and AMKoodari courses of open universities of applied sciences.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2013</h3>
                <p>
                 Pirkanmaan aikuisopisto, design assistant, technical illustrator, 3D modeler.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#9C749C] before:to-[#749C74]  before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold"></h3>
                <p>
                 Construction site carpenter, guitar player, library worker, youth instructor, asphalt worker, janitor, 
                 smartphone assembly and quality control etc,. 
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <br></br>  <br></br>
    
      <Contact />
    
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#25D366]'>
            <a className='flex justify-between items-center w-full pl-6 text-gray-300' href='https://wa.me/358405142954?text=How%20can%20I%20help%20you%3F'>
              Whatsapp <FaWhatsapp size={30} className="mr-4"/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full pl-5 text-gray-300' href='https://www.linkedin.com'>
              Linkedin <FaLinkedin size={30} className="mr-4"/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full pl-10 text-gray-300' href='https://github.com/OivaHuuskonen'>
              Github <FaGithub size={30} className="mr-4"/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full pl-10 text-gray-300' href="#contact">
              Email <HiOutlineMail size={30} className="mr-4" />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full pl-10 text-gray-300' href='/resume.pdf'>
              CV <BsFillPersonLinesFill size={30} className="mr-4"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
