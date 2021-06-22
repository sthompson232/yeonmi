import React, { useEffect, useRef } from 'react'
import { Box, IconButton } from '@material-ui/core'
import { finishOff } from "../actions/finish";
import { restart } from "../actions/start"
import { reset } from "../actions/counter";
import { useDispatch } from "react-redux";
import { Audio } from './Audio'
import { gsap, Power3 } from 'gsap'
import ReplayIcon from '@material-ui/icons/Replay';


export const Finish = () => {
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
            <h2>Maybe some information about China n stuff</h2>
            <h2>Some final information about what Yeonmi is doing today</h2>
            <h2>To find out more information visit youtuve channel</h2>
            <p ref={body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div ref={buttons}>
                <Box px={2}>
                    <Audio />
                </Box>
                <Box px={2}>
                    <IconButton
                        className='buttons'
                        onClick={() => {
                            dispatch(finishOff())
                            dispatch(reset())
                            dispatch(restart())
                        }}
                    >
                        <ReplayIcon style={{ color: '#ffffff' }} />
                    </IconButton>
                </Box>
            </div>
        </div>
    )
}