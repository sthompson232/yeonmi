import React, { useEffect } from "react";
import { IconButton } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import { soundOn, soundOff } from '../actions/sound'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

export const Audio = () => {
    const dispatch = useDispatch()
    const soundfile = document.getElementById("soundfile")
    const sound = useSelector(state => state.sound)

    soundfile.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    useEffect(() => {
        sound ? soundfile.play() : soundfile.pause();
      }, [sound, soundfile]);


    return (
        <>
            {sound ?
                <IconButton 
                    className='buttons'
                    onClick={() => {
                        dispatch(soundOff())
                    }}
                >
                    <VolumeUpIcon style={{ color: '#ffffff' }}/>
                </IconButton>
                :
                <IconButton 
                    className='buttons'
                    onClick={() => {
                        dispatch(soundOn())
                    }}
                >
                    <VolumeOffIcon style={{ color: '#ffffff' }}/>
                </IconButton>
            }
        </>
    )
}
