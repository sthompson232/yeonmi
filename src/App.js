import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { Dashboard } from './components/Dashboard';
import { useSelector } from "react-redux";

const Loader = () => {
    const counter = useSelector(state => state.counter)
    const forwards = useSelector(state => state.forwards)
    const start = useSelector(state => state.start)
  
    console.log(start)

    return (
        <>
        <Dashboard />
          <Canvas
            camera={{
              position: [-4, 2, 0],
              fov: 50,
              near: 1
            }}
          >
            <ambientLight intensity={0.5} />
            <Scene activeScene={counter} forwards={forwards} />
          </Canvas>
        </>
    )
}

export default Loader