import { Link } from "react-router-dom";

import BgChanger from "./pages/BgChanger";
import PasswordGenerator from "./pages/PasswordGenerator";

function App() {
  
  return (
   <div className="w-full h-screen flex items-center" style={{backgroundColor:"lavender"}}> 
   <div className=" h-4/5 bg-[#9333ea] flex flex-col p-8  ml-6 rounded-xl text-white gap-5">
    <h1 className="flex justify-center text-xl">React Projects</h1>
   <Link to="/bgchanger" className="text-xl bg-white text-black rounded flex justify-center py-4">Background Color Changer</Link>
   <Link to="/password" className="text-xl bg-white text-black rounded flex justify-center py-4">Password Generator</Link>

   </div>
   </div>
  );
}

export default App;
