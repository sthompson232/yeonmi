import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { start } from "../actions/start";
import { useDispatch } from "react-redux";

export const Landing = () => {
    const dispatch = useDispatch()
    
    return (
        <div style={{ height: '100vh' }}>
            <Paper>
            <h1>This is the landing page</h1>
            <Button
                onClick={() => {
                    dispatch(start())
                }}
            >Start</Button>
            </Paper>
        </div>
    )
}
