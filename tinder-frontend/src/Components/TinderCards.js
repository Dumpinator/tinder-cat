import React, { useEffect, useContext, useCallback } from 'react'
import { UserContext } from '../ContextAPI'
import { Swipeable, direction } from 'react-deck-swiper'
import './TinderCards.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { Photo } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import Loader from 'react-loader-spinner'

function TinderCards({ isLoaded, onUnliked, onLiked }) {

    const cats = useContext(UserContext)
    const isMountedRef = React.useRef(null)

    useEffect(() => {
        isMountedRef.current = true
        return () => {
            isMountedRef.current = false
        }
    }, [cats])
    
    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleOnSwipe = useCallback ( swipeDirection => {

        if (swipeDirection === direction.RIGHT) {
            if(isMountedRef.current) { onLiked() }
        }
        if (swipeDirection === direction.LEFT) {
            if(isMountedRef.current) { onUnliked() }
        }
    }, [onUnliked, onLiked])

    const deck = () => {
        if( isMountedRef.current && cats.length >= 1 ) {
            const deck = cats.map((cat) => {
                if (cat.statut === "empty") {
                    return (
                            <div className='swipe' key={ cat._id }>
                                <Swipeable onSwipe={ handleOnSwipe }  id={ cat._id }>
                                    <div className='card' style={{ backgroundImage: `url(${cat.imgUrl})` }}>
                                        <div className='description'>
                                            <h3>{`${cat.name}`}</h3>
                                            <IconButton>
                                                <Photo />
                                                <p>{ getRandomInt(1, 4) }</p>
                                            </IconButton>
                                        </div> 
                                    </div>
                                </Swipeable>
                            </div>
                    )
                } else return null
            })
            return deck
        }
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                { 
                    !isLoaded ? deck() 
                        : 
                    <Loader type="Hearts"
                            color="#FF5864"
                            height={200}
                            width={200}
                    />
                }
            </div>
        </div>
    )
}

export default React.memo(TinderCards)
