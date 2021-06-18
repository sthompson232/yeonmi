import React, { useEffect, useRef } from 'react'

export const Story = ({ counter }) => {
    const scene1 = useRef()
    const scene2 = useRef()
    const scene3 = useRef()
    const scene4 = useRef()
    const scene5 = useRef()
    const scene6 = useRef()

    useEffect(() => {
        if (counter === 0) {scene1.current.style.display = 'inline'} else {scene1.current.style.display = 'none'}
        if (counter === 1) {scene2.current.style.display = 'inline'} else {scene2.current.style.display = 'none'}
        if (counter === 2) {scene3.current.style.display = 'inline'} else {scene3.current.style.display = 'none'}
        if (counter === 3) {scene4.current.style.display = 'inline'} else {scene4.current.style.display = 'none'}
        if (counter === 4) {scene5.current.style.display = 'inline'} else {scene5.current.style.display = 'none'}
        if (counter === 5) {scene6.current.style.display = 'inline'} else {scene6.current.style.display = 'none'}
    }, [counter])

    return (
        <div>
        <div ref={scene1}>
            <h1 className='story'>Title1</h1>
            <p className='story'>Description1</p>
        </div>
        <div ref={scene2}>
            <h1 className='story'>Title2</h1>
            <p className='story'>Description2</p>
        </div>
        <div ref={scene3}>
            <h1 className='story'>Title3</h1>
            <p className='story'>Description3</p>
        </div>
        <div ref={scene4}>
            <h1 className='story'>Title4</h1>
            <p className='story'>Description4</p>
        </div>
        <div ref={scene5}>
            <h1 className='story'>Title5</h1>
            <p className='story'>Description5</p>
        </div>
        <div ref={scene6}>
            <h1 className='story'>Title6</h1>
            <p className='story'>Description6</p>
        </div>
        </div>
)
}
