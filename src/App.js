import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { Dashboard } from './components/Dashboard';
import { useSelector } from "react-redux";
import React from "react";
import { Landing } from './components/Landing'

const App = () => {
    const counter = useSelector(state => state.counter)
    const forwards = useSelector(state => state.forwards)
    const start = useSelector(state => state.start)

    return (
        <>
        { 
          start ? 
          <>
          <Dashboard />
          <Canvas
            gl={{
              preserveDrawingBuffer: true,
              alpha: false, 
              antialias: true
            }}
            camera={{
              position: [-4, 2, 0],
              fov: 50,
              near: 1
            }}
            onCreated={({gl}) => {
              gl.setClearColor('#0E0E0E')
            }}
          >
            <ambientLight intensity={0.5} />
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