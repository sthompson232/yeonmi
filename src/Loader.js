import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Landing } from './components/Landing'

const App = React.lazy(() => import ('./App'))


export default function Loader() {
  const start = useSelector(state => state.start)

  console.log(start)

  return (
    <>
      <Landing />
      <Suspense fallback={<h1>Loading</h1>}>
        <App />
      </Suspense>
    </>
  );
}