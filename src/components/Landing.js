import React from 'react'
import { Button } from '@material-ui/core'
import { start } from "../actions/start";
import { useSelector, useDispatch } from "react-redux";

export const Landing = () => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>This is the landing page</h1>
            <Button
                onClick={() => {
                    dispatch(start())
                }}
            >Start</Button>
        </div>
    )
}
