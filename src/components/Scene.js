import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Torus } from "@react-three/drei";

export const Scene = ({ activeScene, forwards }) => {
  const box = useRef();
  const sphere = useRef();
  const torus = useRef();

  const [activeBox, setActiveBox] = useState(null);
  const [prevBox, setPrevBox] = useState(null);

  const movementSpeed = 0.005

  useEffect(() => {
    if (activeScene === 0) {setActiveBox(box)
    } else if (activeScene === 1) {setActiveBox(sphere)
    } else if (activeScene === 2) {setActiveBox(torus)}
    setPrevBox(activeBox);
  }, [activeScene]);

  const activeVec = new THREE.Vector3(0, 0, 0);
  let inactiveVec = new THREE.Vector3(0, 0, -50);
  if (!forwards) {
    inactiveVec = new THREE.Vector3(0, 0, 50);
  }

  useFrame(() => {
    activeBox.current.position.lerp(activeVec, movementSpeed);
    try {
      prevBox.current.position.lerp(inactiveVec, movementSpeed);
    } catch {}
  });

  return (
    <>
      <Box castShadow ref={box} position={[0, 1, 10]} name="Box">
        <meshLambertMaterial color="pink" />
      </Box>
      <Sphere castShadow ref={sphere} position={[0, 0, 10]} name="Sphere">
        <meshLambertMaterial color="blue" />
      </Sphere>
      <Torus castShadow ref={torus} position={[0, 0, 10]} name="Torus">
        <meshLambertMaterial color="green" />
      </Torus>
      <mesh receiveShadow rotation={[Math.PI * 1.5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};