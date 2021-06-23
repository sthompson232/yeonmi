import React, { useEffect, useRef } from 'react'
import { Box } from '@material-ui/core'
import { start } from "../actions/start";
import { useDispatch, useSelector } from "react-redux";
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
    const duration = useSelector(state => state.duration)

    let tl = gsap.timeline()
    const from = {autoAlpha: 0}
    const to = {autoAlpha: 1, ease: Power3.easeOut, duration: 6}

    useEffect(() => {
        tl.fromTo(story.current, from, to, 0)
        .fromTo(title.current, from, to, 1)
        .fromTo(line1.current, {scale: 0, autoAlpha: 1}, {scale:1, autoAlpha:1, duration: duration * 2}, 1)
        .fromTo(line2.current, {scale: 0, autoAlpha: 1}, {scale:1, autoAlpha:1, duration: duration * 2}, 1)
        .fromTo(body.current, from, to, 2)
        .fromTo(buttons.current, from, to, 4)
    }, [tl])

    const fadeout = () => {
        gsap.to(story.current, {opacity: 0, duration: duration})
        gsap.to(title.current, {opacity: 0, duration: duration})
        gsap.to(line1.current, {opacity: 0, duration: duration})
        gsap.to(line2.current, {opacity: 0, duration: duration})
        gsap.to(body.current, {opacity: 0, duration: duration})
        gsap.to(buttons.current, {opacity: 0, duration: duration})
    }

    return (
        <>
        {/* <div className="blackout" style={{ height: '100%' }}>gfdn</div> */}
        <div className='landing'>
            <h2 ref={story} className='story-of'><i>The Story of</i></h2>
            <hr ref={line1} style={{ visibility: 'hidden' }} />
            <h1 ref={title} className='title'>Yeonmi Park</h1>
            <hr ref={line2} style={{ visibility: 'hidden' }} />
            <h3 ref={body} className='subtitle'>North Korean defector, and human rights activist.</h3>
            <div ref={buttons} style={{ visibility: 'hidden' }}>
                <Box px={2}>
                    <Audio />
                </Box>
                <button
                    className='startButton'
                    onClick={() => {
                        fadeout()
                        setTimeout(function() {
                            dispatch(start())
                        }, duration * 1000)
                    }}
                >
                    <h1 className='start-button'>Start the experience</h1>
                </button>
            </div>
        </div>
    </>
    )
}
