import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
import { Finish } from './components/Finish'
import { gsap, Power3 } from "gsap";

const App = () => {
    const counter = useSelector(state => state.counter)
    const forwards = useSelector(state => state.forwards)
    const start = useSelector(state => state.start)
    const finish = useSelector(state => state.finish)
    const initFinish = useSelector(state => state.initFinish)
    const dashboard = useSelector(state => state.dashboard)
    const duration = useSelector(state => state.duration)
    const blackout = useRef()
    const finishBlackout = useRef()

    const root = document.getElementById('root')
    useEffect(() => {
      if (dashboard) {
        root.style.height = '80vh';
      } else {
        root.style.height = '100vh';
      }
    }, [dashboard])

    useEffect(() => {
      if (start) {gsap.to(blackout.current, {opacity: 0, display: 'none', ease: Power3.easeIn, duration: duration * 2})}
    }, [start])

    useEffect(() => {
      if (initFinish) {
        gsap.fromTo(finishBlackout.current, {opacity: 0}, {opacity: 1, display: 'block', ease: Power3.easeOut, duration: duration})
        setTimeout(function() {
          gsap.to(finishBlackout.current, {display: 'none'})
        }, duration * 1000)
    }
    }, [initFinish])

    return (
        <>
        { 
          start ? 
          <>
            { finish ?
            <>
            <Finish />
            </>
            :
            <>
            <div ref={finishBlackout} className='blackout' style={{ display: 'none' }}></div>
            <div ref={blackout} className='blackout'></div>
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