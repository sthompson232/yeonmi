import React, { useEffect } from 'react'
import { Buttons } from './Buttons'
import { Paper } from '@material-ui/core'
import { Story } from './Story'

export const Dashboard = ({ counter }) => {

    return (
        <div className='dashboard'>
            <Paper square>
                <Story counter={counter} />
                <Buttons />
            </Paper>
        </div>
    )
}
