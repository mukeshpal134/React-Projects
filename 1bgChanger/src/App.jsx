import { Link } from "react-router-dom";
import ThemeBtn from "./components/ThemeBtn";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div
      className="w-full h-screen flex items-center bg-[#e6e6fa] dark:bg-black "
      // style={{ backgroundColor: "lavender" }}
    >
      <div className=" h-4/5 bg-[#9333ea] flex flex-col p-8  ml-6 rounded-xl gap-5">
        <div className="flex justify-between items-center">
          <h1 className="flex justify-center  text-white text-xl dark:text-black ">
            React Projects
          </h1>
          <ThemeBtn />
        </div>
        <Link
          to="/bgchanger"
          className="text-xl bg-white text-black dark:text-white dark:bg-black rounded flex justify-center px-3 py-4"
        >
          Background Color Changer
        </Link>
        <Link
          to="/password"
          className="text-xl bg-white text-black dark:text-white dark:bg-black rounded flex justify-center px-3 py-4"
        >
          Password Generator
        </Link>
        <Link
          to="/apicall"
          className="text-xl bg-white text-black dark:text-white dark:bg-black rounded flex justify-center px-3 py-4"
        >
          Api Call
        </Link>
        <Link
          to="/api"
          className="text-xl bg-white text-black dark:text-white dark:bg-black rounded flex justify-center px-3 py-4"
        >
          Api 
        </Link>
        <Link
          to="/todo"
          className="text-xl bg-white text-black dark:text-white dark:bg-black rounded flex justify-center px-3 py-4"
        >
          Todos 
        </Link>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
