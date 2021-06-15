import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Landing } from './components/Landing'

const App = React.lazy(() => import ('./App'))


export default function Loader() {
  const start = useSelector(state => state.start)

  return (
    <>
      { 
        start ? 
        <Suspense fallback={<h1>Loading</h1>}>
          <App className='app'/>
        </Suspense>
        : 
        <Landing />
      }
    </>
  );
}