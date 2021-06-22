import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
import { Finish } from './components/Finish'
import { OrbitControls } from "@react-three/drei";

const App = () => {
    const counter = useSelector(state => state.counter)
    const forwards = useSelector(state => state.forwards)
    const start = useSelector(state => state.start)
    const finish = useSelector(state => state.finish)
    const dashboard = useSelector(state => state.dashboard)

    const root = document.getElementById('root')
    useEffect(() => {
      if (dashboard) {
        root.style.height = '70vh';
      } else {
        root.style.height = '100vh';
      }
    }, [dashboard])

    return (
        <>
        { 
          start ? 
          <>
            { finish ?
            <Finish />
            :
            <>
            <Dashboard counter={counter} />
            <Canvas
            sRGB
              colorManagement={true}
              gl={{
                preserveDrawingBuffer: true,
                alpha: false, 
                antialias: true
              }}
              camera={{
                position: [-9, 4, 0],
                fov: 40,
                near: 1,
                far: 18
              }}
              onCreated={({gl}) => {
                gl.setClearColor('#000000')
              }}
            >
              {/* <OrbitControls /> */}
              <Scene activeScene={counter} forwards={forwards} />
            </Canvas>
            </>
            }
          </>
            : 
          <Landing />
        }
      </>
    )
}

export default App