import React from 'react';

  
const Home = () => {
  const background={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/home.jpg"})`,
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };
  return (
    <div style={background}>
      <div className="flex justify-center" >
      <div className="m-5 p-6 bg-amber-50 max-w-lg rounded-lg border border-gray-200 shadow-lg ">
          <h1 className="">Welcome </h1>
          <p className="leading-loose leading-9"></p>
        </div>
        </div>
    </div>
  );
};
  
export default Home;