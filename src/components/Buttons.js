import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { forwardsFalse, forwardsTrue } from "../actions/buttons";
import { finishOn } from "../actions/finish"; 
import { openDash, closeDash } from "../actions/dashbaord";
import { IconButton, Box } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Audio } from './Audio'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const Buttons = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)
    const dashboard = useSelector(state => state.dashboard)
    
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
        <Box px={2}>
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
                <ArrowBackIcon style={disableButtons || disableBack ? {color: '#555555'} : {color: '#ffffff'}} />
            </IconButton>
        </Box>
        <Box px={2}>
            {dashboard ? 
            <IconButton onClick={() => {dispatch(closeDash())}} className='buttons'>
                <ExpandMoreIcon style={{ color: '#ffffff' }}/>
            </IconButton>
                : 
            <IconButton onClick={() => {dispatch(openDash())}} className='buttons'>
                <ExpandLessIcon style={{ color: '#ffffff' }} />
            </IconButton>  
            }
        </Box>
        {counter === 5 ? 
        <Box px={2} className='finish-button'>
            <button
            className='startButton'
            onClick={() => {
                dispatch(finishOn())
            }}
            >
                <h1 className='start-button'>Finish</h1>
            </button> 
        </Box>
        : ''
        }
        <Box px={2}>
            <Audio />
        </Box>
        <Box px={2}>
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
                <ArrowForwardIcon style={disableButtons || disableForward ? {color: '#555555'} : {color: '#ffffff'}}  />
            </IconButton>
        </Box>
        </>
    )
}

