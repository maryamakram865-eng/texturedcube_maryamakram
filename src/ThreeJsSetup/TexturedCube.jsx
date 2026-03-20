import * as THREE from "three";
import { useEffect, useRef } from "react";

function TexturedCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    
    // Adjusting camera for a better view of the 3x3x3 cube
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Setting a background color that makes the cube pop
    renderer.setClearColor(0x242424); 
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    // Mapping your 6 images to the cube faces
    // Order: Right, Left, Top, Bottom, Front, Back
    const materials = [
      new THREE.MeshBasicMaterial({ map: loader.load("/textures/image1.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/textures/image2.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/textures/image3.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/textures/image4.jpeg") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/textures/image5.png") }),
      new THREE.MeshBasicMaterial({ map: loader.load("/textures/image6.png") }),
    ];

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      materials
    );

    scene.add(cube);

    camera.position.z = 6;

    const animate = () => {
      requestAnimationFrame(animate);
      // Continuous rotation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();

    // Clean up on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
}

export default TexturedCube;