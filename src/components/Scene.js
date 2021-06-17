import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three';

export const Scene = ({ activeScene, forwards }) => {
  const box = useRef();
  const sphere = useRef();
  const torus = useRef();

  const [activeBox, setActiveBox] = useState(box);
  const [prevBox, setPrevBox] = useState(box);

  useEffect(() => {
    if (activeScene === 0) {setActiveBox(box)
    } else if (activeScene === 1) {setActiveBox(sphere)
    } else if (activeScene === 2) {setActiveBox(torus)}
    setPrevBox(activeBox);
  }, [activeScene]);

  let prevBoxPos = undefined 
  let prevSpherePos = undefined 
  let prevTorusPos = undefined 

  const { boxPos } = useSpring({
    boxPos:
      activeBox.current === undefined || prevBox.current === undefined ? prevBoxPos = [0, 0, 0] : 
      activeBox.current.name === 'Box' ? prevBoxPos = [0, 0, 0] : 
      prevBox.current.name === 'Box' && forwards ? prevBoxPos = [0, 0, -20] :
      prevBox.current.name === 'Box' && !forwards ? prevBoxPos = [0, 0, 20] :
      prevBoxPos
  })
  const { spherePos } = useSpring({
    spherePos: 
      activeBox.current === undefined || prevBox.current === undefined ? prevSpherePos = [0, 0, 20] : 
      activeBox.current.name === 'Sphere' ? prevSpherePos = [0, 0, 0] : 
      prevBox.current.name === 'Sphere' && forwards ? prevSpherePos = [0, 0, -20] : 
      prevBox.current.name === 'Sphere' && !forwards ? prevSpherePos = [0, 0, 20] :
      prevSpherePos
  })
  const { torusPos } = useSpring({
    torusPos:
      activeBox.current === undefined || prevBox.current === undefined ? prevTorusPos = [0, 0, 20] : 
      activeBox.current.name === 'Torus' ? prevTorusPos = [0, 0, 0] : 
      prevBox.current.name === 'Torus' && forwards ? prevTorusPos = [0, 0, -20] : 
      prevBox.current.name === 'Torus' && !forwards ? prevTorusPos = [0, 0, 20] :
      prevTorusPos 
  })

  return (
    <>
      <animated.mesh ref={box} position={prevBoxPos} name="Box">
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="grey" transparent />
      </animated.mesh>

      <animated.mesh ref={sphere} position={spherePos} name="Sphere">
        <sphereGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="grey" transparent />
      </animated.mesh>

      <animated.mesh ref={torus} position={torusPos} name="Torus">
        <torusGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="grey" transparent />
      </animated.mesh>

      <mesh receiveShadow rotation={[Math.PI * 1.5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};