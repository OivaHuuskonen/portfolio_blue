import React from 'react';

const About = () => {
  return (
    //<div style={{ minHeight: '75vh' }} className='bg-[#74889c] flex flex-col justify-between'></div>
    <div name='about' className='w-full h-75vh bg-[#74889c]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <h2 className='text-2xl font-semibold inline border-b-2 border-pink-600'>
              Technologies
            </h2>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-semibold text-[#d7cdc0]'>
              <p>basic technology i like to work with is MERN stack i.g React, MongoDB, express, NodeJS</p>
            </div>
            <div>
              <p>I also have basic understanding abaout Git, Agile, PHP, BootstrapCSS, TAilwindcss, Angular, C#, MariaDB, MySQL, SEO etc,.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;