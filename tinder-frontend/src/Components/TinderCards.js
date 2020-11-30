import React, { useEffect, useContext } from 'react'
import { UserContext } from '../ContextAPI'
//import { v4 as uuidv4 } from 'uuid'
import { Swipeable, direction } from 'react-deck-swiper'
import './TinderCards.css'

import { Photo } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

function TinderCards({ isLoaded, onUnliked, onLiked }) {

    const cats = useContext(UserContext)

    useEffect(() => {
        return () => {
            if(cats._id) {
                onLiked()
                onUnliked()
            }
        }
    }, [cats, onUnliked,onLiked])

    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            return onLiked()
        }
        if (swipeDirection === direction.LEFT) {
            return onUnliked()
        }
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                { !isLoaded ? cats.filter(cat => cat.statut === 'empty').map( cat => 
                        <div className='swipe' key={cat._id} id={ cat._id }>
                            <Swipeable onSwipe={handleOnSwipe} >
                                <div className='card' style={{ backgroundImage: `url(${cat.imgUrl})` }}>
                                    <div className='description'>
                                        <h3>{`${cat.name}, 2`}</h3>
                                        <IconButton>
                                            <Photo />
                                            <p>2</p>
                                        </IconButton>
                                    </div>
                                </div>
                            </Swipeable>
                        </div>
                    )
                    : "LOADING.." 
                }
            </div>
        </div>
    )
}

export default React.memo(TinderCards)
