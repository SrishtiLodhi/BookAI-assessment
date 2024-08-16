import "./App.css";
import Card from "./components/Card";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="vh-100" style={{background: "var(--primary-bg-gradient)"}}>
      <HomePage />
    </div>
  );
}

export default App;
