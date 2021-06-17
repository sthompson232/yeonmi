import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { Dashboard } from './components/Dashboard';
import { useSelector } from "react-redux";
import React from "react";
import { Landing } from './components/Landing'
import { OrbitControls } from "@react-three/drei";

const App = () => {
    const counter = useSelector(state => state.counter)
    const forwards = useSelector(state => state.forwards)
    const start = useSelector(state => state.start)

    return (
        <>
        { 
          start ? 
          <>
          <Dashboard counter={counter}/>
          <Canvas
            shadows
            gl={{
              preserveDrawingBuffer: true,
              alpha: false, 
              antialias: true
            }}
            camera={{
              position: [-8, 2, 0],
              fov: 50,
              near: 1,
              far: 30
            }}
            onCreated={({gl}) => {
              gl.setClearColor('#000000')
            }}
          >
            <spotLight castShadow intensity={0.5} position={[-1, 2, 0]} penumbra={1}/>
            <OrbitControls />
            <Scene activeScene={counter} forwards={forwards} />
          </Canvas>
          </>
            : 
          <Landing />
        }
      </>
    )
}

export default App