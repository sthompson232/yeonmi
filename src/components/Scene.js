import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three';
import { Circle, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import southkorea from '../resources/southkorea.glb'
import china from '../resources/china.glb'
import father from '../resources/father.glb'
import child from '../resources/child.glb'
import america from '../resources/america.glb'
import mongolia from '../resources/mongolia.glb'
import * as easings from 'd3-ease'

export const Scene = ({ activeScene, forwards }) => {
  const scene1 = useRef();
  const scene2 = useRef();
  const scene3 = useRef();
  const scene4 = useRef();
  const scene5 = useRef();
  const scene6 = useRef();
  const circle = useRef();

  let startPosition = [0, 0, 20]
  let endPosition = [0, 0, -20]
  let livePosition = [0, 0, 0]

  const [activeBox, setActiveBox] = useState(scene1);
  const [prevBox, setPrevBox] = useState(scene1);

  useEffect(() => {
    if (activeScene === 0) {setActiveBox(scene1)
    } else if (activeScene === 1) {setActiveBox(scene2)
    } else if (activeScene === 2) {setActiveBox(scene3)
    } else if (activeScene === 3) {setActiveBox(scene4)
    } else if (activeScene === 4) {setActiveBox(scene5)
    } else if (activeScene === 5) {setActiveBox(scene6)
    }
    setPrevBox(activeBox);
  }, [activeScene]);

  useFrame(() => {
    activeBox.current.rotation.y += 0.0002
    circle.current.rotation.z += 0.0002
  })

  let prevScene1Pos = undefined 
  let prevScene2Pos = undefined 
  let prevScene3Pos = undefined 
  let prevScene4Pos = undefined 
  let prevScene5Pos = undefined 
  let prevScene6Pos = undefined 

  const config = {
    easing: easings.easeCircleInOut,
    duration: 4000,
    mass: 5,
    tension: 2000,
    friction: 200
  }

  // LOAD MODELS 
  const url = 'https://www.gstatic.com/draco/v1/decoders/'
  const scene1Mesh = useGLTF(child, url)
  const scene2Mesh = useGLTF(father, url) 
  const scene3Mesh = useGLTF(china, url) 
  const scene4Mesh = useGLTF(mongolia, url) 
  const scene5Mesh = useGLTF(southkorea, url) 
  const scene6Mesh = useGLTF(america, url) 

  // POSITIONS OF ALL MODELS
  const { scene1Pos } = useSpring({
    config,
    scene1Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene1Pos = livePosition : 
      activeBox.current.name === 'Scene1' ? prevScene1Pos = livePosition : 
      prevBox.current.name === 'Scene1' && forwards ? prevScene1Pos = endPosition :
      prevBox.current.name === 'Scene1' && !forwards ? prevScene1Pos = startPosition :
      prevScene1Pos
  })
  const { scene2Pos } = useSpring({
    config,
    scene2Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene2Pos = startPosition : 
      activeBox.current.name === 'Scene2' ? prevScene2Pos = livePosition : 
      prevBox.current.name === 'Scene2' && forwards ? prevScene2Pos = endPosition :
      prevBox.current.name === 'Scene2' && !forwards ? prevScene2Pos = startPosition :
      prevScene2Pos
  })
  const { scene3Pos } = useSpring({
    config,
    scene3Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene3Pos = startPosition : 
      activeBox.current.name === 'Scene3' ? prevScene3Pos = livePosition : 
      prevBox.current.name === 'Scene3' && forwards ? prevScene3Pos = endPosition :
      prevBox.current.name === 'Scene3' && !forwards ? prevScene3Pos = startPosition :
      prevScene3Pos
  })
  const { scene4Pos } = useSpring({
    config,
    scene4Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene4Pos = startPosition : 
      activeBox.current.name === 'Scene4' ? prevScene4Pos = livePosition : 
      prevBox.current.name === 'Scene4' && forwards ? prevScene4Pos = endPosition :
      prevBox.current.name === 'Scene4' && !forwards ? prevScene4Pos = startPosition :
      prevScene4Pos
  })
  const { scene5Pos } = useSpring({
    config,
    scene5Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene5Pos = startPosition : 
      activeBox.current.name === 'Scene5' ? prevScene5Pos = livePosition : 
      prevBox.current.name === 'Scene5' && forwards ? prevScene5Pos = endPosition :
      prevBox.current.name === 'Scene5' && !forwards ? prevScene5Pos = startPosition :
      prevScene5Pos
  })
  const { scene6Pos } = useSpring({
    config,
    scene6Pos:
      activeBox.current === undefined || prevBox.current === undefined ? prevScene6Pos = startPosition : 
      activeBox.current.name === 'Scene6' ? prevScene6Pos = livePosition : 
      prevBox.current.name === 'Scene6' && forwards ? prevScene6Pos = endPosition :
      prevBox.current.name === 'Scene6' && !forwards ? prevScene6Pos = startPosition :
      prevScene6Pos
  })

  return (
    <>
      <animated.mesh ref={scene1} position={scene1Pos} name="Scene1">
        <primitive object={scene1Mesh.scene} />
      </animated.mesh>

      <animated.mesh ref={scene2} position={scene2Pos} name="Scene2">
        <primitive object={scene2Mesh.scene} />
      </animated.mesh>

      <animated.mesh ref={scene3} position={scene3Pos} name="Scene3">
        <primitive object={scene3Mesh.scene} />
      </animated.mesh>

      <animated.mesh ref={scene4} position={scene4Pos} name="Scene4">
        <primitive object={scene4Mesh.scene} />
      </animated.mesh>

      <animated.mesh ref={scene5} position={scene5Pos} name="Scene5">
        <primitive object={scene5Mesh.scene} />
      </animated.mesh>

      <animated.mesh ref={scene6} position={scene6Pos} name="Scene6">
        <primitive object={scene6Mesh.scene}/>
      </animated.mesh>

      <Circle ref={circle} rotation={[Math.PI * 1.5, 0, 0]} position={[0, 0, 0]} args={[4, 16]}>
        <meshStandardMaterial />
      </Circle>
      <spotLight position={[-0.5, 10, 0]} penumbra={0.3} angle={Math.PI / 10} />
    </>
  );
};