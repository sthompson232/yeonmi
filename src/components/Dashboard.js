import React from 'react'
import { Buttons } from './Buttons'
import { Paper } from '@material-ui/core'

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Paper square>
                <Buttons />
            </Paper>
        </div>
    )
}
