import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { forwardsFalse, forwardsTrue } from "../actions/buttons";
import { IconButton, Box } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Audio } from './Audio'


export const Buttons = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)
    const [disableButtons, setDisableButtons] = useState(false)
    const [disableBack, setDisableBack] = useState(true)
    const [disableForward, setDisableForward] = useState(false)
    const buttonTimeout = 1000

    useEffect(() => {
        {counter === 0 ? setDisableBack(true) : setDisableBack(false)}
        {counter === 5 ? setDisableForward(true) : setDisableForward(false)}
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
            <Audio color={'#0E0E0E'}/>
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

