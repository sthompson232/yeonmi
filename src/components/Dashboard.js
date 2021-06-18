import React from 'react'
import { Buttons } from './Buttons'
import { Paper } from '@material-ui/core'
import { Story } from './Story'

export const Dashboard = ({ counter }) => {

    return (
        <div className='dashboard'>
            <Paper square style={{ backgroundColor: '#0E0E0E' }}>
                <Story counter={counter} />
                <Buttons />
            </Paper>
        </div>
    )
}
