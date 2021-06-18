import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three"
import { useSpring, animated } from '@react-spring/three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import southkorea from '../resources/southkorea.glb'
import china from '../resources/china.glb'
import father from '../resources/father.glb'
import child from '../resources/child.glb'
import america from '../resources/america.glb'
import mongolia from '../resources/mongolia.glb'
import img from '../resources/color.jpg'
import nrml from '../resources/normal.jpg'

export const Scene = ({ activeScene, forwards }) => {
  const box = useRef();
  const sphere = useRef();
  const torus = useRef();

  const texture = useLoader(TextureLoader, img)
  const normal = useLoader(TextureLoader, nrml)

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

  const config = {
    duration: 2000,
    mass: 5,
    tension: 2000,
    friction: 200
  }

  const scene1 = useLoader(GLTFLoader, child)
  const scene2 = useLoader(GLTFLoader, father)
  const scene3 = useLoader(GLTFLoader, china)
  const scene4 = useLoader(GLTFLoader, mongolia)
  const scene5 = useLoader(GLTFLoader, southkorea)
  const scene6 = useLoader(GLTFLoader, america)

  const { boxPos } = useSpring({
    config,
    boxPos:
      activeBox.current === undefined || prevBox.current === undefined ? prevBoxPos = [0, 0, 0] : 
      activeBox.current.name === 'Box' ? prevBoxPos = [0, 0, 0] : 
      prevBox.current.name === 'Box' && forwards ? prevBoxPos = [0, 0, -20] :
      prevBox.current.name === 'Box' && !forwards ? prevBoxPos = [0, 0, 20] :
      prevBoxPos
  })
  const { spherePos } = useSpring({
    config,
    spherePos: 
      activeBox.current === undefined || prevBox.current === undefined ? prevSpherePos = [0, 0, 20] : 
      activeBox.current.name === 'Sphere' ? prevSpherePos = [0, 0, 0] : 
      prevBox.current.name === 'Sphere' && forwards ? prevSpherePos = [0, 0, -20] : 
      prevBox.current.name === 'Sphere' && !forwards ? prevSpherePos = [0, 0, 20] :
      prevSpherePos
  })
  const { torusPos } = useSpring({
    config,
    torusPos:
      activeBox.current === undefined || prevBox.current === undefined ? prevTorusPos = [0, 0, 20] : 
      activeBox.current.name === 'Torus' ? prevTorusPos = [0, 0, 0] : 
      prevBox.current.name === 'Torus' && forwards ? prevTorusPos = [0, 0, -20] : 
      prevBox.current.name === 'Torus' && !forwards ? prevTorusPos = [0, 0, 20] :
      prevTorusPos 
  })

  return (
    <>
      <animated.mesh castShadow ref={box} position={boxPos} name="Box">
        <primitive object={scene1.scene} />
      </animated.mesh>

      <animated.mesh castShadow ref={sphere} position={spherePos} name="Sphere">
        <primitive object={scene4.scene} />
      </animated.mesh>

      <animated.mesh castShadow ref={torus} position={torusPos} name="Torus">
      <primitive object={scene2.scene} />
      </animated.mesh>

      <mesh receiveShadow rotation={[Math.PI * 1.5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry args={[30, 15]} />
        <meshStandardMaterial 
          map={texture} 
          normalMap={normal}
        />
      </mesh>
    </>
  );
};