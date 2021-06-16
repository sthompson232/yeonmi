import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { forwardsFalse, forwardsTrue } from "../actions/buttons";
import { IconButton, Box } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';


export const Buttons = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)
    const [disableButtons, setDisableButtons] = useState(false)
    const [disableBack, setDisableBack] = useState(true)
    const [disableForward, setDisableForward] = useState(false)
    const buttonTimeout = 1000

    useEffect(() => {
        {counter === 0 ? setDisableBack(true) : setDisableBack(false)}
        {counter === 2 ? setDisableForward(true) : setDisableForward(false)}
      }, [counter])
    
    return (
        <>
        <Box p={2}>
            <IconButton
                className='buttons'
                disabled={disableButtons ? true : disableBack}
                onClick={() => {
                dispatch(decrement())
                dispatch(forwardsFalse())
                setDisableButtons(true)
                setTimeout(() => {
                    setDisableButtons(false)
                }, buttonTimeout)
                }}
            >
                <ArrowBackIcon />
            </IconButton>
            <IconButton>
                <VolumeUpIcon />
            </IconButton>
            <IconButton>
                <VolumeOffIcon />
            </IconButton>
            <h1 style={{ display: 'inline', paddingLeft: 10, paddingRight: 10, margin: 0 }}>{counter}</h1>
            <IconButton
                className='buttons'
                disabled={disableButtons ? true : disableForward}
                onClick={() => {
                dispatch(increment())
                dispatch(forwardsTrue())
                setDisableButtons(true)
                setTimeout(() => {
                    setDisableButtons(false)
                }, buttonTimeout)
                }}
            >
                <ArrowForwardIcon />
            </IconButton>
        </Box>
        </>
    )
}

