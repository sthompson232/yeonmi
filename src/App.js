import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [forwards, setForwards] = useState(true);

  const [disableButtons, setDisableButtons] = useState(false)
  const [disableBack, setDisableBack] = useState(true)
  const [disableForward, setDisableForward] = useState(false)

  useEffect(() => {
    {counter === 0 ? setDisableBack(true) : setDisableBack(false)}
    {counter === 2 ? setDisableForward(true) : setDisableForward(false)}
  }, [counter])

  return (
    <>
      <div className="controls">
        <button
          disabled={disableButtons ? true : disableBack}
          onClick={() => {
            setCounter(counter - 1);
            setForwards(false);
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
            setCounter(counter + 1);
            setForwards(true);
            setDisableButtons(true)
            setTimeout(() => {
              setDisableButtons(false)
            }, 1000)
          }}
        >
          Forward
        </button>
      </div>
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