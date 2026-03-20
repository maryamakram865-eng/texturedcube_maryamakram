import { useState } from "react";
import "./index.css";
import Cube from "./ThreeJsSetup/Cube";
import TexturedCube from "./ThreeJsSetup/TexturedCube";

function App() {
  const [view, setView] = useState("cube");

  return (
    <div className="app-container">
      {/* TOP BAR NAVIGATION */}
      <header className="top-bar">
        <div className="identity-info">
          <h1>Maryam Akram | B23110006XXXX</h1>
          <p>UBIT - Computer Graphics Lab</p>
        </div>

        <nav className="nav-buttons">
          <button 
            className="nav-btn btn-simple" 
            onClick={() => setView("cube")}
          >
            ROSE CUBE
          </button>
          <button 
            className="nav-btn btn-textured" 
            onClick={() => setView("textured")}
          >
            TEAL TEXTURE
          </button>
        </nav>
      </header>

      {/* 3D RENDER AREA */}
      <main className="main-stage">
        {view === "cube" && <Cube />}
        {view === "textured" && <TexturedCube />}
      </main>
    </div>
  );
}

export default App;
