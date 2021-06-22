import React, { useEffect, useRef } from 'react'
import { Box } from '@material-ui/core'
import { start } from "../actions/start";
import { useDispatch } from "react-redux";
import { Audio } from './Audio'
import { gsap, Power3 } from 'gsap'


export const Landing = () => {
    const dispatch = useDispatch()
    const story = useRef()
    const line1 = useRef()
    const line2 = useRef()
    const title = useRef()
    const body = useRef()
    const buttons = useRef()

    let tl = gsap.timeline()
    const from = {autoAlpha: 0}
    const to = {autoAlpha: 1, ease: Power3.easeOut, duration: 6}

    useEffect(() => {
        tl.fromTo(story.current, from, to, 0)
        .fromTo(title.current, from, to, 1)
        .from(line1.current, {scale: 0, duration: 6}, 1)
        .from(line2.current, {scale: 0, duration: 6}, 1)
        .fromTo(body.current, from, to, 2)
        .fromTo(buttons.current, from, to, 3)
    }, [tl])

    return (
        <div className='landing'>
            <h2 ref={story} className='story-of'><i>The Story of</i></h2>
            <hr ref={line1}/>
            <h1 ref={title} className='title'>Yeonmi Park</h1>
            <hr ref={line2}/>
            <p ref={body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div ref={buttons}>
                <Box px={2}>
                    <Audio />
                </Box>
                <button
                    className='startButton'
                    onClick={() => {
                        dispatch(start())
                    }}
                >
                    <h1 className='start-button'>Start the experience</h1>
                </button>

            </div>
        </div>
    )
}
