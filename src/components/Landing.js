import React from 'react'
import { IconButton, Button } from '@material-ui/core'
import { start } from "../actions/start";
import { useDispatch, useSelector } from "react-redux";
import { soundOn, soundOff } from '../actions/sound'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

export const Landing = () => {
    const dispatch = useDispatch()
    const sound = useSelector(state => state.sound)
    
    return (
        <div className='landing'>
            <h1 className='title'>Yeonmi Park</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {sound ?
                <IconButton 
                    className='buttons'
                    style={{ color: '#ffffff' }}
                    onClick={() => {
                        dispatch(soundOff())
                    }}
                >
                    <VolumeUpIcon />
                </IconButton>
                :
                <IconButton 
                    className='buttons'
                    style={{ color: '#ffffff' }}
                    onClick={() => {
                        dispatch(soundOn())
                    }}
                >
                    <VolumeOffIcon />
                </IconButton>
            }
            <Button
                variant='contained'
                className='startButton'
                onClick={() => {
                    dispatch(start())
                }}
            >
                Start Experience
            </Button>
        </div>
    )
}
