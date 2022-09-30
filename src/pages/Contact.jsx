import React, {useState} from 'react';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f90f47c0-410a-11ed-a06d-cdea678ac864";
const Contact = () => {
  const background={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/contact.jpg"})`,
    height: '100vh',
    width: '100%',
            backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl text-center">Thank you!</div>
        <div className="text-md text-center">I'll be in touch soon.</div>
      </>
    );
  }
  
  return (
    <div style={background}>
      <div className="m-5 text-center">
        <div className="pt-2 pb-2 text-2xl font-medium">
          <h1> Contact Form</h1>
        </div>
      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 relative bg-white bg-white rounded text-sm shadow focus:outline-none focus:ring w-full shadow-lg"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring w-full shadow-lg"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring w-full shadow-lg"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-amber-900 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
        </form>
      </div>
    </div>
  );
};
  
export default Contact;