import React from 'react'
import './SwipeButtons.css'

import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

function SwipeButtons(props) {

    const { onLiked, onUnliked } = props

    return (
        <div className='swipeButtons'>
            <IconButton className='swipeBtn__repeat'>
                <Replay fontSize='large' />
            </IconButton>
            <IconButton onClick={(e) => onUnliked(e)} className='swipeBtn__left'>
                <Close fontSize='large' />
            </IconButton>
            <IconButton className='swipeBtn__star'>
                <StarRate fontSize='large' />
            </IconButton>
            <IconButton onClick={(e) => onLiked(e)} className='swipeBtn__right'>
                <Favorite fontSize='large' />
            </IconButton>
            <IconButton className='swipeBtn__lightning'>
                <FlashOn fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons