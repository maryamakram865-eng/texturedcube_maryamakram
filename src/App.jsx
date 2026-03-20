import { useState } from "react";
import "./index.css";
import Cube from "./ThreeJsSetup/Cube";
import TexturedCube from "./ThreeJsSetup/TexturedCube";

function App() {
  const [view, setView] = useState("cube");

  return (
    <div className="app-layout">
      
      {/* 1. THE MAIN DISPLAY AREA (Now on the LEFT) */}
      <main className="main-stage">
        {view === "cube" && <Cube />}
        {view === "textured" && <TexturedCube />}
      </main>

      {/* 2. THE RIGHT SIDEBAR MENU (Moved here) */}
      <aside className="sidebar">
        {/* Updated Identity Header for Maryam Akram */}
        <div className="identity-header">
          <h1>Student ID: B23110006065</h1> {/* REPLACE WITH NEW SEAT NO */}
          <p>Maryam Akram</p>
          <p>UBIT Karachi</p>
        </div>
        
        <nav className="control-pane">
          <button 
            className="control-btn btn-simple" 
            onClick={() => setView("cube")}
          >
            VIRTUAL CUBE (ROSE)
          </button>
          
          <button 
            className="control-btn btn-textured" 
            onClick={() => setView("textured")}
          >
            TEXTURED CUBE (TEAL)
          </button>
        </nav>
      </aside>

    </div>
  );
}

export default App;