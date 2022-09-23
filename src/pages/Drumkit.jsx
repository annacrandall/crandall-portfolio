 import { useEffect, useState } from "react";
 import drumsOne from "../drum-1.wav" ;
 import drumsTwo from "../drum-2.wav";
 import drumsThree from "../drum-3.wav";
 import drumsFour from "../drum-4.wav";
 import drumsFive from "../drum-5.wav";
 import drumsSix from "../drum-6.wav";
 import drumsSeven from "../drum-7.wav";
 import drumsEight from "../drum-8.wav";
 import drumsNine from "../drum-9.wav";


 const drumKit = [
   { name: "achievement sound ", audio: drumsOne, keyPress: "Q" },
   { name: "official drums", audio: drumsTwo, keyPress: "W" },
   { name: "scary drums", audio: drumsThree, keyPress: "E" },
   { name: "drum roll", audio: drumsFour, keyPress: "A" },
   { name: "wacky sound", audio: drumsFive, keyPress: "S" },
   { name: "more drums", audio: drumsSix, keyPress: "D" },
   { name: "drum thuds", audio: drumsSeven, keyPress: "Z" },
   { name: "horror-drums", audio: drumsEight, keyPress: "X" },
   { name: "drum and clink", audio: drumsNine, keyPress: "C" },
 ];
 const App = () => {
   const [displayText, setDisplayText] = useState("");
   const [volume, setVolume] = useState(0.04); 
   const handleClick = (key) => {
     playAudio(key)
   }

   const handleKeyDown = ({ key }) => {
     const audio = drumKit.find(({ keyPress }) => keyPress.toLowerCase() === key.toLowerCase())
     if (!audio) {
       return null;
     }
     playAudio(key);
   }

   const playAudio = (key) => {
     const { name } = drumKit.find((drum) => key === drum.keyPress);
     setDisplayText(name)
     document.getElementById(key).volume = volume;
     document.getElementById(key).play()
   }

   const handleVolumeChange = (e) => setVolume(e.target.value);

   useEffect(() => {
     window.addEventListener('keydown', handleKeyDown);

     return () => {
       window.removeEventListener('keydown', handleKeyDown);
     };
   });

   return (
     <section className="border-4 border-black m-10 p-10 rounded">
       <div className="border-2 border-black rounded drop-shadow">
         <h1 className="text-center text-xl font-mono tracking-wide">Ana's Drum Kit</h1>
         <div id="display" className="text-center">
           {displayText}
         </div>
       </div>
       <div className="relative" id="drum-machine">
         <div className="flex justify-center gap-4 items-center h-screen" id="display">
           {drumKit.map(({ keyPress, audio, name }) => (
             <button
               className="drum-pad border-2 border-black p-2 rounded hover:bg-slate-600 hover:text-white transition-all 
             hover:shadow-lg hover:shadow-lime-800 "
               key={keyPress}
               id={name}
               onClick={() => handleClick(keyPress)}

               type="button"
             >
               {keyPress}
               <audio src={audio} id={keyPress} className="clip"></audio>
             </button>
           ))}
           <input value={volume} type="range" min="0" max="1" step="0.05" onChange={handleVolumeChange} />
         </div>
       </div>
     </section>
   );
 }

 export default App;
