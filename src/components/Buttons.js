import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { forwardsFalse, forwardsTrue } from "../actions/buttons";
import { Button } from '@material-ui/core'

export const Buttons = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter)
    const [disableButtons, setDisableButtons] = useState(false)
    const [disableBack, setDisableBack] = useState(true)
    const [disableForward, setDisableForward] = useState(false)
    const buttonTimeout = 1000

    useEffect(() => {
        {counter === 0 ? setDisableBack(true) : setDisableBack(false)}
        {counter === 2 ? setDisableForward(true) : setDisableForward(false)}
      }, [counter])
    
    return (
        <div>
            <Button
                disabled={disableButtons ? true : disableBack}
                onClick={() => {
                dispatch(decrement())
                dispatch(forwardsFalse())
                setDisableButtons(true)
                setTimeout(() => {
                    setDisableButtons(false)
                }, buttonTimeout)
                }}
            >
                Backwards
            </Button>
            <Button
                disabled={disableButtons ? true : disableForward}
                onClick={() => {
                dispatch(increment())
                dispatch(forwardsTrue())
                setDisableButtons(true)
                setTimeout(() => {
                    setDisableButtons(false)
                }, buttonTimeout)
                }}
            >
                Forward
            </Button>
        </div>
    )
}

