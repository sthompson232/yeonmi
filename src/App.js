import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
import { forwardsFalse, forwardsTrue } from "./actions/buttons";

export default function App() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const forwards = useSelector(state => state.forwards)

  const [disableButtons, setDisableButtons] = useState(false)
  const [disableBack, setDisableBack] = useState(true)
  const [disableForward, setDisableForward] = useState(false)

  useEffect(() => {
    {counter === 0 ? setDisableBack(true) : setDisableBack(false)}
    {counter === 2 ? setDisableForward(true) : setDisableForward(false)}
  }, [counter])

  return (
    <>
      <button
        disabled={disableButtons ? true : disableBack}
        onClick={() => {
          dispatch(decrement())
          dispatch(forwardsFalse())
          setDisableButtons(true)
          setTimeout(() => {
            setDisableButtons(false)
          }, 1000)
        }}
      >
        Backwards
      </button>
      <button
        disabled={disableButtons ? true : disableForward}
        onClick={() => {
          dispatch(increment())
          dispatch(forwardsTrue())
          setDisableButtons(true)
          setTimeout(() => {
            setDisableButtons(false)
          }, 1000)
        }}
      >
        Forward
      </button>
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
  );
}