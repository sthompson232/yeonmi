import React from 'react'
import { Buttons } from './Buttons'
import { Story } from './Story'
import { Paper } from '@material-ui/core'
import { useSelector } from "react-redux";



export const Dashboard = ({ counter }) => {
    const open = useSelector(state => state.dashboard)

    return (
        <div className='dashboard'>
            <Paper square style={{ backgroundColor: '#0E0E0E' }}>
                <Buttons />
                <div style={open ? {display: 'block'} : {display: 'none' }}>
                    <Story counter={counter} />
                </div>
            </Paper>
        </div>
    )
}
