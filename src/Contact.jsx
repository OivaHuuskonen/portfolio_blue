import React from 'react';

const Footer = ({ title }) => {
  const isArray = Array.isArray(title);
  return (
    <div className="bg-[#74889c] italic font-light text-center text-[#d7cdc0] p-4">
      {isArray ? (
        title.map((line, index) => (
          <p key={index}>
            <em>{line}</em>
          </p>
        ))
      ) : (
        <p>
          <em>
            {title.split(' ').map((word, i) => (
              <>
                {word}
                {i === Math.floor(title.split(' ').length / 2) && (
                  <br className="block sm:hidden" />
                )}{' '}
              </>
            ))}
          </em>
        </p>
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
    <section id="contact" className="max-w-4xl mx-auto">
    <div style={{ minHeight: '75vh' }} className='bg-[#74889c] flex flex-col justify-between'>
      <div name='contact' className='container pt-4 pb-0 mx-auto max-w-4xl px-4'>
        <form action={`https://getform.io/f/${import.meta.env.VITE_REACT_APP_GETFORM_ID}`} method='POST' className='flex flex-col'>

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
      </div>
      <br></br>
      <Footer title="webpage made by Juha Niemikallio@2024"/> 
      <br></br><br></br>
    </div>
    </section>
  )
}

export default Contact;
