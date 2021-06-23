import React, { useEffect, useRef } from 'react'
import { Box, IconButton } from '@material-ui/core'
import { finishOff } from "../actions/finish";
import { initFinishOff } from '../actions/initfinish';
import { restart } from "../actions/start"
import { reset } from "../actions/counter";
import { useDispatch } from "react-redux";
import { Audio } from './Audio'
import { gsap, Power3 } from 'gsap'
import ReplayIcon from '@material-ui/icons/Replay';


export const Finish = () => {
    const dispatch = useDispatch()
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const text4 = useRef()
    const buttons = useRef()
    const credits = useRef()

    let tl = gsap.timeline()
    const from = {autoAlpha: 0}
    const to = {autoAlpha: 1, ease: Power3.easeOut, duration: 6}

    useEffect(() => {
        tl.fromTo(text1.current, from, to, 0)
        .fromTo(text2.current, from, to, 1)
        .fromTo(text3.current, from, to, 2)
        .fromTo(text4.current, from, to, 3)
        .fromTo(buttons.current, from, to, 4)
        .fromTo(credits.current, from, to, 5)
    }, [tl])

    return (
        <div className='landing'>
            <h2 className='end-text' ref={text1}>Maybe some information about China n stuff</h2>
            <br />
            <h2 className='end-text' ref={text2}>Some final information about what Yeonmi is doing today</h2>
            <br />
            <h2 className='end-text' ref={text3}>To find out more information visit youtuve channel</h2>
            <br />
            <h2 className='end-text' ref={text4}>Or buy her book</h2>
            <br />
            <div ref={buttons}>
                <Box px={2} display="inline">
                    <Audio />
                </Box>
                <Box px={2} display="inline">
                    <IconButton
                        className='buttons'
                        onClick={() => {
                            dispatch(finishOff())
                            dispatch(reset())
                            dispatch(restart())
                            dispatch(initFinishOff())
                        }}
                    >
                        <ReplayIcon style={{ color: '#ffffff' }} />
                    </IconButton>
                </Box>
            </div>
            <h3 className='end-text' ref={credits}><i>Website and music designed and created by <a target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }} href="https://www.samthompson.io"><u>Sam Thompson</u></a></i></h3>
        </div>
    )
}