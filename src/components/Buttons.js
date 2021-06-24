import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { forwardsFalse, forwardsTrue } from "../actions/buttons";
import { finishOn } from "../actions/finish"; 
import { initFinishOn } from "../actions/initfinish";
import { openDash, closeDash } from "../actions/dashbaord";
import { IconButton, Box } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Audio } from './Audio'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';


export const Buttons = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)
    const dashboard = useSelector(state => state.dashboard)
    
    const [disableButtons, setDisableButtons] = useState(false)
    const [disableBack, setDisableBack] = useState(true)
    const [disableForward, setDisableForward] = useState(false)
    const duration = useSelector(state => state.duration) 

    useEffect(() => {
        {counter === 0 ? setDisableBack(true) : setDisableBack(false)}
        {counter === 5 ? setDisableForward(true) : setDisableForward(false)}
      }, [counter])
    
    return (
        <>
        <Box className='button-padding'>
            <IconButton
                className='buttons'
                disabled={disableButtons ? true : disableBack}
                onClick={() => {
                dispatch(decrement())
                dispatch(forwardsFalse())
                setDisableButtons(true)
                setTimeout(() => {
                    setDisableButtons(false)
                }, duration * 2000)
                }}
            >
                <ArrowBackIcon style={disableButtons || disableBack ? {color: '#555555'} : {color: '#ffffff'}} />
            </IconButton>
        </Box>
        <Box className='button-padding'>
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
        <Box className='button-padding'>
            <IconButton
            className='buttons'
            onClick={() => {
                dispatch(initFinishOn())
                setTimeout(function() {
                    dispatch(finishOn())
                }, duration * 1000)
            }}
            >
                <DoneIcon style={{ color: '#ffffff' }}/>
            </IconButton> 
        </Box>
        : ''
        }
        <Box className='button-padding'>
            <Audio />
        </Box>
        <Box className='button-padding'>
            <IconButton
                className='buttons'
                disabled={disableButtons ? true : disableForward}
                onClick={() => {
                dispatch(increment())
                dispatch(forwardsTrue())
                setDisableButtons(true)
                setTimeout(() => {
                    setDisableButtons(false)
                }, duration * 2000)
                }}
            >
                <ArrowForwardIcon style={disableButtons || disableForward ? {color: '#555555'} : {color: '#ffffff'}}  />
            </IconButton>
        </Box>
        </>
    )
}

