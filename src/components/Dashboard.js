import React from 'react'
import { Buttons } from './Buttons'
import { makeStyles } from '@material-ui/core/styles';
import { Story } from './Story'
import { useSelector } from "react-redux";
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    accordion: {
      display: 'flex',
      flexDirection: 'column-reverse',
      backgroundColor: '#0E0E0E',
    },
    panel: {
        display: 'flex',
        flexDirection: 'column-reverse',
    }
  }));


export const Dashboard = ({ counter }) => {
    const classes = useStyles();
    const open = useSelector(state => state.dashboard)

    return (
        <div className='dashboard'>
            <Accordion expanded={open} square className={classes.accordion}>
                <AccordionSummary style={{ cursor: 'default' }} className={classes.panel}>
                <Buttons />
                </AccordionSummary>
                <AccordionDetails>
                <Story counter={counter} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
