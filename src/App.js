import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import HomePage from "./pages/HomePage";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply the selected theme to the data-theme attribute on the document element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div style={{ background: "var(--primary-bg-gradient)" }}>
      {/* <button onClick={toggleTheme} style={{ position: 'fixed', top: '10px', right: '10px' }}>
        Toggle Theme
      </button> */}

      <label
        className="switch"
        style={{ position: "fixed", top: "10px", right: "10px" }}
      >
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
      <HomePage />
    </div>
  );
}

export default App;
