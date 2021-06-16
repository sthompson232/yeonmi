import React from 'react'
import { Button } from '@material-ui/core'
import { start } from "../actions/start";
import { useDispatch } from "react-redux";

import { Audio } from './Audio'

export const Landing = () => {
    const dispatch = useDispatch()
    
    return (
        <div className='landing'>
            <h2 className='story-of'><i>The Story of</i></h2>
            <h1 className='title'>Yeonmi Park</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Audio color={'#ffffff'}/>
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
