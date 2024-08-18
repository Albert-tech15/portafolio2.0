import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three'; // Importar THREE
import './TronBackground.css';

const AnimatedMesh = () => {
  const meshRef = useRef();
  const startTime = useRef(Date.now());

  useFrame(() => {
    const elapsed = (Date.now() - startTime.current) / 1000; // Tiempo en segundos
    if (meshRef.current) { // Asegúrate de que meshRef.current existe
      meshRef.current.rotation.y = elapsed / 2; // Rotación lenta
      meshRef.current.rotation.x = elapsed / 3; // Rotación lenta en otro eje

      // Cambiar color de azul a otros colores
      const color = new THREE.Color();
      const hue = (elapsed % 5) / 5; // Cambia el valor de 0 a 1 cada 5 segundos
      color.setHSL(hue, 1, 0.5);
      meshRef.current.material.color = color;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="#00ffff" />
    </mesh>
  );
};

const TronBackground = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <gridHelper args={[100, 100, `#00ffff`, `#00ffff`]} position={[0, -5, 0]} />
        <AnimatedMesh />
      </Canvas>
    </div>
  );
};

export default TronBackground;
