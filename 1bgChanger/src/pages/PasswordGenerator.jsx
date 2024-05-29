import React, { useState, useCallback, useEffect, useRef } from "react";



function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passWordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passWordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen dark:bg-black bg-[#e6e6fa] " 
    // style={{ backgroundColor: "lavender" }}
    >
      <div className="flex justify-center inset-x-0">
      

        <div className="bg-[#f5d0fe] w-3/5 h-48 fixed top-12 p-8 rounded shadow-md ">
          
          <div className="flex">
            <input
              className="w-full h-12 rounded-l outline-none px-5 shadow-md"
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passWordRef}
            />
            <button className="bg-blue-600 outline-none px-5 shadow-md text-white rounded-r " onClick={copyPasswordToClipboard}>
              Copy
            </button>
          </div>
          <div className="flex text-l gap-x-2 mt-5">
            <div className="flex items-center gap-x-1 w-2/5">
              <input
                type="range"
                min={6}
                max={99}
                className="cursor-pointer w-4/5"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="">Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">Number</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">Character</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PasswordGenerator;
