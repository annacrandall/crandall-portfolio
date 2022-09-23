import React from 'react';

  
const Home = () => {
  const background={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/background.jpg"})`,
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };
  return (
    <div style={background}>
    </div>
  );
};
  
export default Home;