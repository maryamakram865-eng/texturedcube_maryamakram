import * as THREE from "three";
import { useEffect, useRef } from "react";

function TexturedCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight - 80), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight - 80);
    renderer.setClearColor(0x120812); 
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    
    // VITE FIX: This detects your GitHub repository folder automatically
    const basePath = import.meta.env.BASE_URL;

    const materials = [
      new THREE.MeshBasicMaterial({ map: loader.load(`${basePath}textures/image1.jpeg`) }),
      new THREE.MeshBasicMaterial({ map: loader.load(`${basePath}textures/image2.jpeg`) }),
      new THREE.MeshBasicMaterial({ map: loader.load(`${basePath}textures/image3.jpeg`) }),
      new THREE.MeshBasicMaterial({ map: loader.load(`${basePath}textures/image4.jpeg`) }),
      new THREE.MeshBasicMaterial({ map: loader.load(`${basePath}textures/image5.png`) }),
      new THREE.MeshBasicMaterial({ map: loader.load(`${basePath}textures/image6.png`) }),
    ];

    const cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), materials);
    scene.add(cube);
    camera.position.z = 6;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight - 80);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight - 80);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
}

export default TexturedCube;
