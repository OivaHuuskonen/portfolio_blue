
import React, { useState, useEffect } from 'react';

const MyJourney = () => {
  const [activeYearPosition, setActiveYearPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let closestYear = null;
      let closestDistance = Infinity;
      document.querySelectorAll('.year-container').forEach((yearElement) => {
        const rect = yearElement.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (distance < closestDistance) {
          closestYear = yearElement;
          closestDistance = distance;
        }
      });
      if (closestYear) {
        setActiveYearPosition(closestYear.offsetTop - document.querySelector('.container').offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-8 max-w-4xl m-auto" id="aboutme">
      <div className="container px-4 relative">
        <h2 className="text-2xl font-normal">My journey</h2>
        <div className="mt-12 relative">
          <div className="flex flex-col md:flex-row">
            {/* Vuosiluvut */}
            <div className="flex flex-col items-end pr-4">
              <div className="year-container mb-36 relative">
                <h3 className="text-lg font-semibold">2024</h3>
              </div>
              <div className="year-container mb-28 relative">
                <h3 className="text-lg font-semibold">2023</h3>
              </div>
              <div className="year-container mb-28 relative">
                <h3 className="text-lg font-semibold">2020</h3>
              </div>
              <div className="year-container mb-24 relative">
                <h3 className="text-lg font-semibold">2013</h3>
              </div>
              <div className="year-container mb-24 relative">
                <h3 className="text-lg font-semibold">1995 <br></br>2012</h3>
              </div>
            </div>

            {/* Palkki ja pallo */}
            <div className="relative w-3 flex justify-center">
              <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 rounded-xl"></div>
              <div
                className="absolute transition-all duration-300 ease-in-out"
                style={{ top: `${activeYearPosition}px`, left: '50%', transform: 'translateX(-50%)' }}
              >
                <div className="w-4 h-4 bg-gradient-to-t from-[#9C749C] to-[#749C74] rounded-full"></div>
              </div>
            </div>

            {/* Kuvaukset */}
            <div className="flex-1 pl-7">
              <div className="year-container mb-24 relative">
                <p>
                  BearIT ITC-Camp with a focus on Fullstack development. 
                  Two Udemy certificates in React, NodeJS, MongoDB, and Express 
                  + two more certificates in Agile and Git.
                </p>
              </div>
              <div className="year-container mb-20 relative">
                <p>
                  In the fall of 2023, I graduated from Sasky Huittinen
                  adult education institution with a bachelor's degree in Computer Science,
                  Software developer / Fullstack developer.
                </p>
              </div>
              <div className="year-container mb-16 relative">
                <p>
                  I am starting self-study of website development with the help of MOOC courses of the Open University of Helsinki (e.g. Full Stack open)
                  and AMKoodari courses of open universities of applied sciences.
                </p>
              </div>
              <div className="year-container mb-24 relative">
                <p>
                  Pirkanmaan aikuisopisto, design assistant, technical illustrator, 3D modeler.
                </p>
              </div>
              <div className="year-container mb-24 relative">
                <p>
                  Construction site carpenter, guitar player, library worker, youth instructor, asphalt worker, janitor,
                  smartphone assembly and quality control etc,.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;















/*import React, { useState, useEffect } from 'react';

const MyJourney = () => {
  const [activeYearPosition, setActiveYearPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let closestYear = null;
      let closestDistance = Infinity;
      document.querySelectorAll('.year-container').forEach((yearElement) => {
        const rect = yearElement.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (distance < closestDistance) {
          closestYear = yearElement;
          closestDistance = distance;
        }
      });
      if (closestYear) {
        setActiveYearPosition(closestYear.offsetTop - document.querySelector('.container').offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-8 max-w-4xl m-auto" id="aboutme">
      <div className="container px-4 relative">
        <h2 className="text-2xl font-normal">My journey</h2>
        <div className="mt-12 relative">
          <div className="flex">*/
            {/* Vuosiluvut */}
          /*  <div className="flex flex-col items-end pr-4">
              <div className="year-container mb-36 relative">
                <h3 className="text-lg font-semibold">2024</h3>
              </div>
              <div className="year-container mb-28 relative">
                <h3 className="text-lg font-semibold">2023</h3>
              </div>
              <div className="year-container mb-28 relative">
                <h3 className="text-lg font-semibold">2020</h3>
              </div>
              <div className="year-container mb-24 relative">
                <h3 className="text-lg font-semibold">2013</h3>
              </div>
              <div className="year-container mb-24 relative">
                <h3 className="text-lg font-semibold">1995 <br></br>2012</h3>
              </div>
            </div>

            <div className="relative w-3 flex justify-center">
              <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 rounded-xl"></div>
              <div
                className="absolute transition-all duration-300 ease-in-out"
                style={{ top: `${activeYearPosition}px`, left: '50%', transform: 'translateX(-50%)' }}
              >
                <div className="w-4 h-4 bg-gradient-to-t from-[#9C749C] to-[#749C74] rounded-full"></div>
              </div>
            </div>

      
            <div className="flex-1 pl-7">
              <div className="year-container mb-24 relative">
                <p>
                  BearIT ITC-Camp with a focus on Fullstack development. 
                  Two Udemy certificates in React, NodeJS, MongoDB, and Express 
                  + two more certificates in Agile and Git.
                </p>
              </div>
              <div className="year-container mb-20 relative">
                <p>
                  In the fall of 2023, I graduated from Sasky Huittinen
                  adult education institution with a bachelor's degree in Computer Science,
                  Software developer / Fullstack developer.
                </p>
              </div>
              <div className="year-container mb-16 relative">
                <p>
                  I am starting self-study of website development with the help of MOOC courses of the Open University of Helsinki (e.g. Full Stack open)
                  and AMKoodari courses of open universities of applied sciences.
                </p>
              </div>
              <div className="year-container mb-24 relative">
                <p>
                  Pirkanmaan aikuisopisto, design assistant, technical illustrator, 3D modeler.
                </p>
              </div>
              <div className="year-container mb-24 relative">
                <p>
                  Construction site carpenter, guitar player, library worker, youth instructor, asphalt worker, janitor,
                  smartphone assembly and quality control etc,.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;*/

 
 
 
 /*import React, { useState, useEffect } from 'react';

const MyJourney = () => {
  const [activeYearPosition, setActiveYearPosition] = useState(0);

 useEffect(() => {
    const handleScroll = () => {
      let closestYear = null;
      let closestDistance = Infinity;
      document.querySelectorAll('.year-container').forEach(yearElement => {
        const rect = yearElement.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (distance < closestDistance) {
          closestYear = yearElement;
          closestDistance = distance;
        }
      });
      if (closestYear) {
        setActiveYearPosition(closestYear.offsetTop + closestYear.offsetHeight / 2 - 50); // Adjust -50 for alignment
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let closestYear = null;
      let closestDistance = Infinity;
      document.querySelectorAll('.year-container').forEach(yearElement => {
        const rect = yearElement.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.scrollY);
        if (distance < closestDistance) {
          closestYear = yearElement;
          closestDistance = distance;
        }
      });
      if (closestYear) {
        setActiveYearPosition(closestYear.offsetTop - document.querySelector('.container').offsetTop);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-8 max-w-4xl m-auto" id="aboutme">
      <div className="container px-4">
        <h2 className="text-2xl font-semibold text-[#43513a]">My journey</h2>
        <div className="mt-12 flex relative">
          /* Vuosiluvut */
        /*  <div className="flex-1 space-y-24 pr-4">
            /* Iteroi tämä osa datan perusteella */
       /*     <div className="year-container left-0">
              <h3 className="text-lg font-semibold">2024</h3>
            </div>
            <div className="year-container left-0">
              <h3 className="text-lg font-semibold">2022</h3>
            </div>
            <div className="year-container left-0">
              <h3 className="text-lg font-semibold">2020</h3>
            </div>
            <div className="year-container left-0">
              <h3 className="text-lg font-semibold">2014</h3>
            </div>
            {/* Lisää vuosiluvut tähän */
       //   </div>
          {/* Palkki ja pallo */}
         /* <div className="relative flex-shrink-0" style={{ marginLeft: 'auto' }}>
            <div className="before:absolute before:top-0 before:left-0 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white"></div>
            <div className="absolute" style={{ right: '0', top: `${activeYearPosition}px`, transition: 'top 0.3s ease' }}>
              <div className="w-4 h-4 bg-gradient-to-t from-[#9C749C] to-[#749C74] rounded-full"></div>
            </div>
          </div>
          {/* Kuvaukset */
       //   <div className="flex-1 space-y-24 pl-8">
            /* Iteroi tämä osa datan perusteella */
         /*   <div className="year-container">
              <p>BearIT ITC-Camp with a focus on Fullstack development...</p>
            </div>
            <div className="year-container">
              <p>aghgftsht focus on Fullstack development...</p>
            </div>
            <div className="year-container">
              <p>gfhgfshgf with a focus on Fullstack development...</p>
            </div>
            <div className="year-container">
              <p>zzzzzzzzzzzz Fullstack development...</p>
            </div>
            /* Lisää kuvaukset tähän */
         /* </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;*/

