import React from 'react';

  
const Home = () => {
  const background={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/home.jpg"})`,
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };
  return (
    <div style={background} id="contact-background">
      <div id="container">
        <div className="flex justify-center" id="header-container">
      <div className="box-content h-40 m-5 p-6 bg-white max-w-lg rounded-lg border border-gray-600 shadow-lg " id="header-box">
          <h1 id="header-text" className="font-header text-2xl flex justify-center">Welcome to my portfolio! </h1>
          <p className="font-home text-center p-2 leading-relaxed overflow-auto" id="subheader-text"> Hey there! My name is Anna Crandall, I am a junior web developer who has been programming since June 2022. You have officially reached where I upload my creations! All source code for these projects can be found on my Github, which is linked above. </p>
          </div>
          </div>
        <div id="info-container" className="grid grid-cols-2" >
        <div id="about-me-box" className="p-6 bg-white rounded-lg border border-gray-600 shadow-lg ml-5 mr-3" >
            <h1 className="font-home">More about me:</h1>
              <p>I'm passionate about drawing and designing tatoos.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-600 shadow-lg font-home ml-3 mr-5" id>
            <h1 className="font-home">Languages and Libraries:</h1>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li></li>
          </ul>
          </div>
        </div>
        </div>
    </div>
  );
};
  
export default Home;