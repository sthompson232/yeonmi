import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { useSelector } from "react-redux";
import React from "react";
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
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
          <Dashboard counter={counter} />
          <Canvas
          sRGB
            colorManagement={true}
            shadows
            gl={{
              preserveDrawingBuffer: true,
              alpha: false, 
              antialias: true
            }}
            camera={{
              position: [-9, 4, 0],
              fov: 40,
              near: 1,
              far: 15
            }}
            onCreated={({gl}) => {
              gl.setClearColor('#000000')
            }}
          >
            <spotLight castShadow intensity={1} position={[-0.5, 6, 0]} penumbra={0.3} angle={Math.PI / 6}/>
            {/* <OrbitControls /> */}
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