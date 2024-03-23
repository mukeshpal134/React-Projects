import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center rounded bottom-12 gap-3 inset-x-0 px-3">
        <div className="flex justify-center rounded bg-white px-4 py-2 gap-3 ">
          <button
            className="outline-none shadow-md px-8 py-3 rounded-xl text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none shadow-md px-5 py-3 rounded-xl"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none shadow-md px-5 py-3 rounded-xl text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button className="outline-none shadow-md px-5 py-3 rounded-xl text-white" style={{backgroundColor:"Green"}} onClick={()=>setColor("Green")}> green</button>
          <button className="outline-none shadow-md px-5 py-3 rounded-xl text-white" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>olive</button>
          <button className="outline-none shadow-md px-5 py-4 rounded-xl text-white" style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>gray</button>
          <button className="outline-none shadow-md px-5 py-3 rounded-xl " style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>pink</button>
          <button className="outnile-none shadow-md px-5 py-3 rounded-xl text-white" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className="outnile-none shadow-md px-5 py-3 rounded-xl  " style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>lavender</button>
          <button className="outnile-none shadow-md px-5 py-3 rounded-xl " style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>white</button>
          <button className="outnile-none shadow-md px-5 py-3 rounded-xl text-white" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
