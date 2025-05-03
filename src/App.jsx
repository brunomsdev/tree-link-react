import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
  Sun,
} from "phosphor-react";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  function getInitialDarkMode() {
    const darkModeLocalStorage = localStorage.getItem("darkMode");

    return darkModeLocalStorage === "true" ? true : false;
  }

  const [darkMode, setDarkMode] = useState(getInitialDarkMode());

  function redirectPage(url) {
    window.open(url, "_blank");
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);

    // Set in Local Storage
    localStorage.setItem("darkMode", !darkMode);
  }

  return (
    <div className={`w-full h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <header className={`flex justify-end p-4 ${darkMode ? "text-white" : "text-black"}`}>
        <Button variant="secondary" onClick={toggleDarkMode}>
          {darkMode === true ? <Moon size={16} /> : <Sun size={16} />}
        </Button>
      </header>
      <main className=" w-full h-full flex justify-center items-center">
        <section
          className={`border border-gray-400 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white"
          } p-6 rounded-lg w-fit flex flex-col justify-center items-center gap-4`}
        >
          <img
            className="w-32 h-32 rounded-full border-4 border-gray-300"
            src="https://avatars.githubusercontent.com/u/189457404?v=4"
            alt="Foto de perfil do usuário "
          />

          <h1 className="font-bold text-2xl">Bruno Milhomens</h1>

          <p className="text-slate-500">Desenvolvedor Fullk Stack</p>

          {/* Links Section */}
          <div className="space-y-6">
            <Button onClick={() => redirectPage("https://www.instagram.com/")}>
              <InstagramLogo size={24} />
              <p>Instagram</p>
            </Button>
            <Button
              onClick={() => redirectPage("https://www.linkedin.com/feed/")}
            >
              <LinkedinLogo size={24} />
              <p>LinkedIn</p>
            </Button>
            <Button
              onClick={() =>
                redirectPage("https://www.facebook.com/?locale=pt_BR")
              }
            >
              <FacebookLogo size={24} />
              <p>Facebook</p>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
