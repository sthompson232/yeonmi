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
  const scene1 = useRef();
  const box = useRef();
  const sphere = useRef();
  const torus = useRef();

  const texture = useLoader(TextureLoader, img)
  const normal = useLoader(TextureLoader, nrml)

  const [activeBox, setActiveBox] = useState(scene1);
  const [prevBox, setPrevBox] = useState(scene1);

  useEffect(() => {
    if (activeScene === 0) {setActiveBox(scene1)
    } else if (activeScene === 1) {setActiveBox(sphere)
    } else if (activeScene === 2) {setActiveBox(torus)}
    setPrevBox(activeBox);
  }, [activeScene]);

  let prevScene1Pos = undefined 
  let prevSpherePos = undefined 
  let prevTorusPos = undefined 

  const config = {
    duration: 2000,
    mass: 5,
    tension: 2000,
    friction: 200
  }

  const scene1Mesh = useLoader(GLTFLoader, child)
  const scene2Mesh = useLoader(GLTFLoader, father)
  const scene3Mesh = useLoader(GLTFLoader, china)
  const scene4Mesh = useLoader(GLTFLoader, mongolia)
  const scene5Mesh = useLoader(GLTFLoader, southkorea)
  const scene6Mesh = useLoader(GLTFLoader, america)

  const { scene1Pos } = useSpring({
    config,
    scene1Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene1Pos = [0, 0, 0] : 
      activeBox.current.name === 'Scene1' ? prevScene1Pos = [0, 0, 0] : 
      prevBox.current.name === 'Scene1' && forwards ? prevScene1Pos = [0, 0, -20] :
      prevBox.current.name === 'Scene1' && !forwards ? prevScene1Pos = [0, 0, 20] :
      prevScene1Pos
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
      <animated.mesh castShadow ref={scene1} position={scene1Pos} name="Scene1">
        <primitive object={scene1Mesh.scene} />
      </animated.mesh>

      <animated.mesh castShadow ref={sphere} position={spherePos} name="Sphere">
        <primitive object={scene4Mesh.scene} />
      </animated.mesh>

      <animated.mesh castShadow ref={torus} position={torusPos} name="Torus">
      <primitive object={scene2Mesh.scene} />
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