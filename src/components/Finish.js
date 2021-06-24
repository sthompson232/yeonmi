import React, { useEffect, useRef } from 'react'
import { Box, IconButton } from '@material-ui/core'
import { finishOff } from "../actions/finish";
import { initFinishOff } from '../actions/initfinish';
import { restart } from "../actions/start"
import { reset } from "../actions/counter";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from './Audio'
import { gsap, Power3 } from 'gsap'
import ReplayIcon from '@material-ui/icons/Replay';


export const Finish = () => {
    const dispatch = useDispatch()
    const duration = useSelector(state => state.duration)
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const text4 = useRef()
    const buttons = useRef()
    const credits = useRef()

    let tl = gsap.timeline()
    const from = {autoAlpha: 0}
    const to = {autoAlpha: 1, ease: Power3.easeOut, duration: duration * 3}

    useEffect(() => {
        tl.fromTo(text1.current, from, to, 0)
        .fromTo(text2.current, from, to, 2)
        .fromTo(text3.current, from, to, 4)
        .fromTo(text4.current, from, to, 6)
        .fromTo(buttons.current, from, to, 8)
        .fromTo(credits.current, from, to, 10)
    }, [tl])

    return (
        <div className='landing'>
            <h2 className='end-text' ref={text1}>In 2021, North Korea is still the most repressed country in the world</h2>
            <br />
            <h2 className='end-text' ref={text2}>As a result of her activism, Yeonmi Park is high on Kim Jong-un's hit-list</h2>
            <br />
            <h2 className='end-text' ref={text3}>To learn more about Yeonmi Park and her life, visit her YouTube channel <a target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }} href="https://www.youtube.com/channel/UCpQu57KgT7gOoLCAu3FFQsA"><u>Voice of North Korea by Yeonmi Park</u></a></h2>
            <br />
            <h2 className='end-text' ref={text4}>Or read her book <a target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }} href="https://www.penguinrandomhouse.com/books/318940/in-order-to-live-by-yeonmi-park-with-maryanne-vollers/"><u>In Order to Live</u></a></h2>
            <br />
            <div ref={buttons} style={{ visibility: 'hidden' }}>
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