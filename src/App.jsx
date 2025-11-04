import { use } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar";
import { useTheme } from "./Hook/useTheme";

function App() {
  const currentTheme = useTheme();
  return (
    <div className={`min-h-screen max-w-[1920px] xl:mx-auto relative`}>
      {
        currentTheme === "acid" ? (
          <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
          />) : (
            <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
  )
      }
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
