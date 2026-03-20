import { useState } from "react";
import "./index.css";
import Cube from "./ThreeJsSetup/Cube";
import TexturedCube from "./ThreeJsSetup/TexturedCube";

function App() {
  const [view, setView] = useState("cube");
  const [showEid, setShowEid] = useState(false);

  // Seat Number Fixed Here
  const maryamSeatNo = "B23110006XXX"; // ENTER ACTUAL SEAT NO HERE

  const triggerEid = () => {
    setShowEid(true);
    // Trigger Confetti
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#2dd4bf', '#c084fc']
      });
    }
  };

  return (
    <div className="app-container">
      {showEid && (
        <div className="eid-overlay" onClick={() => setShowEid(false)}>
          <h1 className="eid-text">EID MUBARAK!</h1>
          <p className="eid-subtext">Tap anywhere to close</p>
        </div>
      )}

      <header className="top-bar">
        <div className="identity-info">
          <h1>Maryam Akram | {maryamSeatNo}</h1>
          <p>UBIT - Computer Graphics Lab</p>
        </div>

        <nav className="nav-buttons">
          <button className="nav-btn btn-simple" onClick={() => setView("cube")}>ROSE CUBE</button>
          <button className="nav-btn btn-textured" onClick={() => setView("textured")}>TEAL TEXTURE</button>
        </nav>
      </header>

      <main className="main-stage">
        {/* We pass the trigger function to the cubes */}
        {view === "cube" && <Cube onCubeClick={triggerEid} />}
        {view === "textured" && <TexturedCube onCubeClick={triggerEid} />}
      </main>
    </div>
  );
}

export default App;
