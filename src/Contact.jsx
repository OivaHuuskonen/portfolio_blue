//import whatsapp from './assets/whatsapp.png';
import React from 'react';
//import './App.css';


const Footer = ({ title }) => {
  const isArray = Array.isArray(title);

  return (
    <div className="bg-[#74889c] italic font-light text-center text-[#d7cdc0]">
      {isArray ? (
        title.map((line, index) => (
          <p key={index}><em>{line}</em></p>
        ))
      ) : (
        <em>{title}</em>
      )}
      <br /><br />
    </div>
  );
}

const PageHeader = ({ title }) => (
  <div className="container mx-auto px-4">
    <div className="text-left pb-4">
      <h2 className="text-2xl text-[#43513a] font-semibold">
        {title}
      </h2>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact">
    <div style={{ minHeight: '75vh' }} className='bg-[#74889c] flex flex-col justify-between'>
      <div name='contact' className='container mx-auto px-4 pt-4 pb-0'>
        <form action={`https://getform.io/f/${import.meta.env.VITE_REACT_APP_GETFORM_ID}`} method='POST' className='flex flex-col max-w-4xl mx-auto'>

          <PageHeader title="Contact me"/>
          <p className='text-justify py-4'>please contact me using the form below or use{" "}
             <a className='wa inline border-b-2 border-[#43513a]' href='https://wa.me/358405142954?text=How%20can%20I%20help%20you%3F'>
              whatsapp 
            </a>
          </p>
          <input className='bg-[#d7cdc0] p-2 border rounded-md' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#d7cdc0] border rounded-md' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#d7cdc0] p-2 border rounded-md' name="message" rows="10" placeholder='Message'></textarea>
          <button className='group border-2 border-[#d7cdc0] px-6 py-3 my-8 rounded-md hover:bg-[#f5eadc] hover:border-[#43513a] mx-auto flex items-center'>Let's collaborate</button>
        </form>
        {/*  <a 
        href="https://wa.me/358405142954"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a> */}
      </div>
      <br></br>
      <Footer title="webpage made by Jukka ilveskorpi@2024"/> 
      <br></br><br></br>
    </div>
    </section>
  )
}

export default Contact;


   {/* <a
          href="https://wa.me/number here"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>*/}

  {/*const Footer = ({ title }) => {
    const isArray = Array.isArray(title);
  
    return (
      <div className="bg-[#fdebd3] italic font-light text-center text-[#679186]">
        <br />
        {isArray ? (
          title.map((line, index) => (
            <p key={index}><em>{line}</em></p>
          ))
        ) : (
          <em>{title}</em>
        )}
        <br /><br />
      </div>
    );
  }
  
  
  const PageHeader = ({ title }) => (
    <div className="mx-auto px-4 max-w-[1000px] w-full grid grid-cols-2 gap-8">
      <div className="sm:text-center pb-8">
        <p className="text-4xl font-bold text-[#679186] inline border-b-2 border-[#f9b4ab]">
          {title}
        </p>
      </div>
    </div>
  );
  
  const Contact = () => {
   
    return (
      <div style={{ minHeight: '100vh' }} className='bg-[#fdebd3] flex flex-col justify-between'>
      <div>
      <div name='contact' className='w-screen h-screen flex justify-center items-center p-4'>
          <br></br><br></br>
          <br></br><br></br>
         <form action={`https://getform.io/f/${import.meta.env.VITE_REACT_APP_GETFORM_ID}`} method='POST' className='flex flex-col mx-auto max-w-[600px] w-full'>
              <div className='pb-4'>
                  <PageHeader title="Yhteydenotto"/>
                  <p className='text-[#000000] text-justify py-4'>zzzzzzzzzzzzzzzzzzz</p>
                  </div>
                  <input className='bg-white' type="text" placeholder='Name' name='name' />
                  <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
                  <textarea className='bg-white' name="message" rows="10" placeholder='Message'></textarea>
                  <button className='text-[#679186] group border-2 px-6 py-3 my-8 hover:bg-[#f5eadc] hover: border-[#f9b4ab] mx-auto flex items-center'>Lets collabrate</button>
          </form>
         
          </div> 
        <a
          href="https://wa.me/number here"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
             </div>
         
        </div>
    )
  }
  
  export default Contact*/}