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

  useEffect(() => {
    if (activeScene === 0) {setActiveBox(box)
    } else if (activeScene === 1) {setActiveBox(sphere)
    } else if (activeScene === 2) {setActiveBox(torus)}
    setPrevBox(activeBox);
  }, [activeScene]);

  const activeVec = new THREE.Vector3(0, 0, 0);
  let inactiveVec = new THREE.Vector3(0, 0, -10);
  if (!forwards) {
    inactiveVec = new THREE.Vector3(0, 0, 10);
  }

  useFrame(() => {
    activeBox.current.position.lerp(activeVec, 0.05);
    try {
      prevBox.current.position.lerp(inactiveVec, 0.05);
    } catch {}
  });

  return (
    <>
      <Box ref={box} position={[0, 0, 10]} name="Box">
        <meshLambertMaterial attach="material" color="pink" />
      </Box>
      <Sphere ref={sphere} position={[0, 0, 10]} name="Sphere">
        <meshLambertMaterial attach="material" color="blue" />
      </Sphere>
      <Torus ref={torus} position={[0, 0, 10]} name="Torus">
        <meshLambertMaterial attach="material" color="green" />
      </Torus>
    </>
  );
};